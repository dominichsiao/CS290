/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below, so we know whose code we're grading.
 *
 * name: Dominic Hsiao
 * email: hsiaod@oregonstate.edu
 */

var http = require('http')
var fs = require('fs')

console.log("reading index.html")
var html = fs.readFileSync('public/index.html')
console.log("reading style.css")
var css = fs.readFileSync('public/style.css')
console.log("reading index.js")
var javascript = fs.readFileSync('public/index.js')
console.log("reading 404.html")
var error = fs.readFileSync('public/404.html')

var server = http.createServer(function (req, res) {
    console.log("== Request Recieved")
    console.log(" -- URL:", req.url)
    console.log(" -- Method:", req.method)
    console.log(" -- headers:", req.headers)

    if(req.url == "/"){
        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
   
        res.write(html)
    }
    
    else if(req.url == "/index.html"){
        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
     
        res.write(html)

    }

    
    else if(req.url == "/index.js"){
        
        res.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        
        res.write(javascript)
    }

    else if(req.url == "/style.css"){
        
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        
        res.write(css)
    }

    else{
        
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
  
        res.write(error)
        res.statusCode = 404
    }


    res.end()


})

var port = 42096

server.listen(port, function(err){
    console.log("== Server is listening on port", port)
})