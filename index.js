const express = require("express");
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// database
const Sequlize = require("sequelize");
const sequlize = new Sequlize("mysql://root:qwerty@localhost:3306/joga_sequelize")

sequlize
    .authenticate()
    .then(() => {
        console.log("👍 | database")
    })
    .catch(err => {
        console.error("👎 | database", err)
    })

app.get("/", (req, res) => {
    res.json({ message: "halou" })
});

app.listen(3000, () => {
    console.log("👍 | :3000")
})