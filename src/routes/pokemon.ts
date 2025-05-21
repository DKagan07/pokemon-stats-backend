import express, { Request, Response } from "express"
import axios from "axios"
import { Pokemon } from "../model/pokemon_type"

const pokeRouter = express.Router()
const BASE_URL = "https://pokeapi.co/api/v2"

pokeRouter.get('/:poke', async (req: Request, res: Response) => {
    const { poke } = req.params
    const url = `${BASE_URL}/pokemon/${poke}`
    try {
        const r = await axios.get(url)
        const data = r.data as Pokemon
        console.log({ data })
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
})

export default pokeRouter
