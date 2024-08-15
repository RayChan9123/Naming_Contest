import express from "express";

const server = express();

//middleware
server.use(express.static("dist"));

//use EJS templating engine for Node. js that allows you to generate HTML markup with plain JavaScript.
server.set("view engine", "ejs");


//routes
server.use("/", (req, res) => {
    res.render("index", {
        title: "NAMING CONTEST REPO",
    });
})

server.listen("8080", "0.0.0.0", () => {
    console.info("Listening on port http://0.0.0.0:8080");
})