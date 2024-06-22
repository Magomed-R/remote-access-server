import express from "express";
import { exec } from "child_process";
import { networkInterfaces } from "os";
import { green, red } from "chalk";

import commands from "./commands";

const os = process.platform;
const ip = networkInterfaces()["wlp3s0"]![0].address;
const port = 3000;

const app = express();

app.use(express.static("./static"));

app.get("/", (req, res) => {
    console.log(green.bold(" ------------------------ Client is in sight ------------------------ "));

    return res.sendStatus(302);
});

app.get("/sound/increase", (req, res) => {
    exec(commands[os].increaseVolume);

    return res.sendStatus(200);
});

app.get("/sound/decrease", (req, res) => {
    exec(commands[os].decreaseVolume);

    return res.sendStatus(200);
});

app.get("/bright/increase", (req, res) => {
    exec(commands[os].increaseBright);

    return res.sendStatus(200);
});

app.get("/bright/decrease", (req, res) => {
    exec(commands[os].decreaseBright);

    return res.sendStatus(200);
});

app.get("/open/url", (req, res) => {
    exec(commands[os].openUrl(req.query.url as string));

    return res.sendStatus(200);
});

app.get("/copy", (req, res) => {
    exec(commands[os].copyData(req.query.data as string));

    return res.sendStatus(200);
});

app.listen(port, () => {
    console.log(green.bold(`\n${ip}:${port}\n`));
});
