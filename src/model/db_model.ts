import mongoose from "mongoose"
import "dotenv/config"
// import Pokemon from "./pokemon_type"

const url = process.env.MONGO_URI

if (url === undefined) {
    throw Error("dont have mongodb uri")
}
mongoose.connect(url)
    .then(() => console.log("Connected to Mongo!"))
    .catch((e) => console.log(e))

// TODO: Create schema
const pokeSchema = new mongoose.Schema({
    id: { type: Number },
})

const model = mongoose.model('pokemon', pokeSchema)

export default model
