const http = require('http')

http.createServer((req,res) => {
    res.write(" I am alive 1")
    res.end()
}).listen(8080)
