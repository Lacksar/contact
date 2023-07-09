import * as fs from "fs";


export default async function handler(req, res) {
  

    if(req.method==="GET"){
    var global_data = fs.readFileSync("contactdata/data.json").toString();

    res.status(200).send(global_data);

    }
    else{
    res.status(400).send("internal server error");
        
    }

}