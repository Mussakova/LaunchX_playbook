const explorerController = require('./controllers/explorerController')
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});


