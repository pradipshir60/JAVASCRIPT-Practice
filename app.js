var http=require('http')

http.createServer(function (req,res) {
    res.write("Welcome Back to Node js!!")
    res.end()
    
}).listen(8080)