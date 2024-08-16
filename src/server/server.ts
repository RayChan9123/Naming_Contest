import express from "express";
import os from "node:os"
import config from "./config";


const server = express();

//middleware
server.use(express.static("dist"));

//use EJS templating engine for Node. js that allows you to generate HTML markup with plain JavaScript.
server.set("view engine", "ejs");


//routes
server.use("/", (req, res) => {
    res.render("index", {
        initialContent: "NAMING CONTEST REPO",
    });
})

server.listen(config.PORT, config.HOST, () => {
    console.info(
        `Listening on port ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`,
    );
})