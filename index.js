const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

        app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
        });
        app.get("/area", (req, res) => {
            res.sendFile(__dirname + "/area.html");
        });
        app.get("/circle", (req, res) => {
            res.sendFile(__dirname + "/circle.html");
        });

        app.post("/area", (req, res) => {
        const height= req.body.height;
        const width = req.body.width;
        const area=height*width
        res.send(`<h2>THE AREA IS ${area}</h2>`);
        });
        app.post("/circle", (req, res) => {
            const radius= req.body.radius;
            const circle=3.1416*radius*radius/2
            res.send(`<h2>THE AREA IS ${circle}</h2>`);
        });

        app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
        });