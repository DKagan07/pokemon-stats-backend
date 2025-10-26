import express, { Request, Response } from "express"
import axios, { HttpStatusCode } from "axios"
import { Pokemon } from "../model/pokemon_type"
import pokemans from "../model/db_model"

const pokeRouter = express.Router()
const BASE_URL = "https://pokeapi.co/api/v2"

pokeRouter.get('/:poke', async (req: Request, res: Response) => {
    const { poke } = req.params
    const url = `${BASE_URL}/pokemon/${poke}`
    let data: Pokemon
    try {
        const r = await axios.get(url)
        data = r.data as Pokemon
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log("axios error: ", err)
            res.sendStatus(404)
            return
        }

        console.log("not an axios error: ", err)
        res.sendStatus(405)
        return
    }

    // TODO: Need to parse the data for frontend, this has everything
    // maybe <Pick> something here?
    //
    // This model is imported above, and connected to the mongo instance
    const p = await pokemans.exists({ id: data.id }).exec()
    console.log({ p })
    if (p !== null) {
        console.log("dupe!")
        res.sendStatus(HttpStatusCode.Found)
        return
    }

    await pokemans.create({ id: data.id, poke: data })
    res.send("OK")
})

export default pokeRouter
