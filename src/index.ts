import express, { Response } from "express";
import pokeRouter from "./routes/pokemon";
import mongoose from "mongoose"
import "dotenv/config"

const app = express();
const port = 3000;

async function main() {
    // setup
    app.get("/test", (_, res: Response) => {
        console.log("Hello world from app.get");
        res.send("Hello world");
    });

    app.use('/poke', pokeRouter)

    app.use('/testdb', () => {
        const url = process.env.MONGO_URI
        if (url === undefined) {
            throw Error("dont have mongodb uri")
        }
        mongoose.connect(url)
            .then(() => console.log("Connected to Mongo!"))
            .catch((e) => console.log(e))
    })

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

main()

