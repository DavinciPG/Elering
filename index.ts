import express, { Express, Request, Response } from "express";

import nordController from "./controllers/nordpool"

const app: Express = express();

// I have an issue where my node cannot find CORS. It says I have it but keep getting the same error, so I made a workaround.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3006');
    next();
});


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', nordController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});