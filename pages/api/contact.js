import * as fs from "fs";


export default async function handler(req, res) {
    if (req.method === "POST") {

        if (req.body) {



            try {
                var global_data = fs.readFileSync("contactdata/data.json").toString();

                const parsed = JSON.parse(global_data);
                parsed.push(req.body)

                fs.promises.writeFile("contactdata/data.json", JSON.stringify(parsed), () => { })
                res.status(200).send("Done");


            } catch (e) {

                res.status(400).send("Internal Server Error");

            }
        }
    }
    else {
        res.status(400).send("Internal Server Error.")
    }



}