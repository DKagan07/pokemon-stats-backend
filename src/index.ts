import express, { Response } from "express";

const app = express();
const port = 3000;

app.get("/", (_, res: Response) => {
    console.log("Hello world from app.get");
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
