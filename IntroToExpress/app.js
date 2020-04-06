var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("Hi there, Welcome to this basic express app!");
});

app.get("/speak/:animal", function(req, res){
    let animal = req.params.animal;
    let animal_sound = {
        "pig": "Oink",
        "cow": "Moo",
        "dog": "Woof Woof!"
    }
    if (animal_sound[animal] === undefined) {
        res.send("ERROR");
    }
    res.send("The " + animal + " says " + animal_sound[animal]);
});

app.get("/repeat/:word/:times", function (req, res) {
    let word = req.params.word;
    let len = parseInt(req.params.times, 10);
    let to_send = "";
    for (var i = 0; i < len; i++) {
        to_send += word + " ";
    }
    res.send(to_send);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found");
});

app.listen(6969);