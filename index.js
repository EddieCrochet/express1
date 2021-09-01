//require express
const express = require("express");

//create express apop
const app = express();

const port = 4000;

let count = 0;

app.put("/test", function(req, res){
    console.log("PUT /test");
    //res.json("PUT Test back");
});

/***
 * this is the GET /read
 * it will respond back with the current value of the number
 */
app.get("/read", function(req, res){
    console.log("GET /read");
    console.log("responding with ", count);
    res.json(count);
    // respond back with var
});

app.post("/increment", function (req, res){
    count++;
    res.json("Number has been incremented");
    res.sendStatus(200);
    //inc var by 1
});

// this endpoint takes a word and returns translated in all caps
// PATH PARAMS
app.get("/caps/:word", function(req, res){
    console.log("GET /caps: ", req.params);
    let incomingWord = req.params.word;
    let upperWord = incomingWord.toUpperCase();
    res.json(upperWord);
});

//this is the other way to do it
// QUERY PARAMS
app.get("/otherCaps", function(req, res){
    console.log("GET /otherCaps", req.query);
    let incomWord = req.query.word;
    let upWord = incomWord.toUpperCase();
    res.json(upWord);
});

// or a BODY IN THE REQUEST
app.post("/postCaps", function(req, res){
    console.log("POST /postCaps", req.body);
    res.sendStatus(204);
})

app.listen(port, function(){
    console.log("express server started on port ", port);
})