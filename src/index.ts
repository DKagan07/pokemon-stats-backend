import express, { Response } from "express";
import pokeRouter from "./routes/pokemon";

const app = express();
const port = 3000;

async function main() {
    // setup
    app.get("/test", (_, res: Response) => {
        console.log("Hello world from app.get");
        res.send("Hello world");
    });

    app.use('/poke', pokeRouter)

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

main()

