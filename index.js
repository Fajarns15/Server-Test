// Declaration
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // request hadler goes here

  // content with plain text format
  if(req.url==="/"){
    res.writeHead(200,{
      "Content-Type":"text/plain",
    });
    res.end("ini adalah halaman utama dengan content plain text saya");
  }

  // contect with JSON format
  else if(req.url==="/content"){
    res.writeHead(200,{
      "Content-Type":"application/json"
    })
    let contacts = JSON.stringify([
      {name:"Fajar Nur Shodiq",phone:"085934151314"},
      {name:"Frey",phone:"081314315313"},
      {name:"Rey",phone:"081314315313"}
    ])
    res.end(contacts);
  }

  // content with HTML format
  else if(req.url==="/about"){
    res.writeHead(200,{
      "Content-Type":"text/html"
    })
    res.end("<h1>Ini halaman about, dengan tipe konten HTML</h1>")
  } 
  
// content with HTML file
  else if(req.url==="/products"){
    fs.readFile("./public/index.html",(err,data)=>{
      if(err){
        res.writeHead(404);
        res.write("Halaman ini tidak ditemukan");
      }else{
        res.writeHead(200);
        res.end(data);
      }
    })
  }
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});