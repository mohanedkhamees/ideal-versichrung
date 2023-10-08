const express = require('express')
const app = express()
const csvToJson = require('convert-csv-to-json');
const cors = require('cors')
app.use(cors())

const fileInputName = 'ansprechpartner.csv';

app.get('/users', (req, res) => {
    const personen = csvToJson.supportQuotedField(true).getJsonFromCsv(fileInputName)

    res.send(personen);
});

app.listen(4000, () => {
    console.log("listen on port 4000");
})