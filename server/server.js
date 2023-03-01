const path = require("path");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const BUILD_PATH = path.resolve("../client/build");

app.use(express.static(BUILD_PATH));



app.get("/where", (req, res)=> {res.send("here!");
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
})