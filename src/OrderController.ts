import express from "express";
import Preview from "./application/Preview";
const app = express();



app.post("/preview", function(request, response){

    const preview = new Preview();
    preview.execute(input)
    response.json(total);

});

app.post("/checkout", function(request, response){

    const preview = new Checkout();
    checkout.execute(input)
    response.end()

});

app.listen(3000);