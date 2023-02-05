import express from "express";
import Preview from "./Preview";
const app = express();



app.post("/preview", function(request, response){

    const preview = new Preview();
    preview.execute(input)

})
app.listen(3000);
