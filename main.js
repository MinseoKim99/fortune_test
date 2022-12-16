const db = require("./models");

const express = require("express"),
    app = express(),
    // firstController = require("./controllers/firstController"),
    homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 80);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.get("/", firstController.showFirst);
app.get("/fortune", homeController.showFortune);

app.listen(app.get("port"), () => {
    console.log(`listen port num: ${app.get("port")}`);
});