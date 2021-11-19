const express=require('express');
const server=express();
const port=3000;
//to excess request data  in json formate
server.use(express.json());
//ro access request data from
server.use(express.urlencoded());

// '/'->default page/ home page
server.get('/',(req,resp)=>{
    
    resp.setHeader("Content-Type","text/html");
    resp.sendFile(__dirname+'/index.html');
});
// '/welcome'->url path using get
server.get('/welcome',(req,resp)=>{
    const firstName=req.query.firstName;
    

 resp.setHeader("Content-Type","text/html");
    resp.sendFile(__dirname+'/welcome.html');

});
//post method for welcome
server.post('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.sendFile(__dirname+'/welcome.html');
    
});
//share css file
server.get('/css/style.css',(req,resp)=>{
    resp.sendFile(__dirname+'/css/style.css');
});

//validate file attached to it
server.get('/js/validate.js',(req,resp)=>{
    resp.sendFile(__dirname+'/js/validate.js');
});
server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});


