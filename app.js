const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const skills = fs.readFileSync('./skills.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    URL = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (URL == '/') {
        res.end(home);
        
    }

    else if (URL == '/about') {
        res.end(about);
    }

    else if (URL == '/skills') {
        res.end(skills);
    }

    else if (URL == '/contact') {
        res.end(contact);
    }

    else{
        res.statusCode = 404;
        res.end("<h1/>404 not found<h1/>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });