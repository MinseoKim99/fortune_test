const express = require("express"),
    app = express(),
    firstController = require("./controllers/firstController");


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
app.get("/second", firstController.showSecond);

app.listen(app.get("port"), () => {
    console.log(`listen port num: ${app.get("port")}`);
});