import mongoose from "mongoose"
import "dotenv/config"
import { buildPokemonSchema } from "./pokemon_type"

const url = process.env.MONGO_URI

if (url === undefined) {
    throw Error("dont have mongodb uri")
}

mongoose.connect(url, {
    dbName: "Pokemans",
}).then(() => console.log("Connected to Mongo!"))
    .catch((e) => console.log(e))


const pokeSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    poke: buildPokemonSchema()
})

const pokemans = mongoose.model('poke', pokeSchema)

export default pokemans
// export default mongoose.model('poke', pokeSchema)
