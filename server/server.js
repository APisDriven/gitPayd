const path = require("path");
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const BUILD_PATH = path.resolve("../client/build")
// console.log(BUILD_PATH)

app.get('/', (req, res) => {
  res.send('Hello gitPayd!')
})

app.get("/ping", (req, res)=> {res.send("pong!");
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
})