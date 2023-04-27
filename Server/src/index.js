const http = require("http");
const characters =  require("./utils/data.js");

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { url } = req;

if (url.includes("/rickandmorty/character/")) {
    const id = url.split("/").pop();
    const character = characters.find(char=>char.id === Number(id));
    res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(character)); 
}
    })
    
.listen(3001, "localhost");