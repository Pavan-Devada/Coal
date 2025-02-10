const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    const routes = {
        "/": "index.html",
        "/about": "about.html",
        "/contact": "contact.html",
        "/quote": "quote.html",
        "/product-detail": "product-detail.html",
        "/products": "products.html",

    }
    let filePath = routes[req.url] || "404.html";
    fs.readFile(path.join(__dirname, "views", filePath), (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("There is error loading the page");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    })


})

server.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`)
})