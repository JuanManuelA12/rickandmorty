const app = require("./app");

const PORT = 3001;



app.listen (PORT, ()=> {
console.log(`Server raised in port:  ` + PORT);
});













//const http = require("http");
//const { getCharById } = require("./controllers/getCharById");

//http
  //.createServer((req, res) => {
    //res.setHeader("Access-Control-Allow-Origin", "*");
    //const { url } = req;
    //if (req.url.includes("/rickandmorty/character")) {
      //const id = req.url.split("/").at(-1);
      //getCharById(res, +id);
    //}
 // })

 // .listen(3001, "localhost");


