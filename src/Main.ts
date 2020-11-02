import as fs from "fs";
const path = require('path');
//import * as path from "path";
const ResumeParser = require("./parser/ResumeParser");
//import {ResumeParser} from "./parser/ResumeParser";

export default class Main {
    public main() {
        let program: string = ""
        try {
            program = fs.readFileSync(path.join(__dirname, "../resources", "ResumeContent.rmd")).toString('utf-8')
        } catch (err) {
            console.log("Failed to open file!")
            return
        }
        console.log("will parse now")
        const programParsed = ResumeParser.parse(program)
        console.log("parsed")
        console.log(JSON.stringify(programParsed))
    }
}
