const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection = require('./nanodb');
const { response } = require('express');
const { json } = require('body-parser');
const app = express();
const port = 8000;
const setmail = require('./mail');
const nodemail = require('nodemailer');




app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());



app.get('/getdata/:id', (req,res) => {
    console.log("retreived......",req.params.id);

   

    var object = {
        selector: {
            
            "email" : req.params.id,
            "type" : "user"
        }
    }
    dbconnection.trainee.find(object).then((data) => {
        console.log("firstname",data);  
        res.json(data);      
    })
    });





app.get('/getuserdata/:id', (req,res) => {
    console.log("retreived......",req.params.id);

   
    var object = {
        selector: {
            
            "type" : "post",
            "user" : req.params.id
        }
    }
    dbconnection.trainee.find(object).then((data) => {
      
       
        console.log("firstname",data);  
        res.json(data);      
    },).catch((err=>{
        console.log("err",err);
        res.status(400).send({
            message:err
        })
    }));
    
});
    



app.post('/postdata', function (req,res) {
    console.log("req",req.body.email)
    var object = {
        selector: {
            
            "type" : "user",
            "email" : req.body.email
        }
    }
    dbconnection.trainee.find(object).then((data) => {
        console.log("firstname",data);  
        if((data.docs.length<1))
            {
            var name = req.body.firstname;
            console.log(name);
            var objectnew = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : req.body.password,
                type: 'user'
            }
            console.log("data from angular",objectnew);
            dbconnection.trainee.insert(objectnew).then((data) => {
                console.log("data inserted successfully",data);
                res.send(data)
            }).catch((err=>{
            console.log("err1",err);
            res.status(400).send({
                message:err
            })
            }));
        }
}).catch((err=>{
    console.log("err2",err);
    res.status(400).send({
        message:err
    })
    }));
})




app.post('/postdata/:id', function (req,res) {
    var name = req.body.firstname;
    console.log(name);
    var objectnew = {
       
        post : req.body.post,
        date : req.body.date,
        time : req.body.time,
        type: 'post',
        user :req.body.user
    }
    console.log("data from angular",objectnew);
    dbconnection.trainee.insert(objectnew).then((data) => {
        console.log("data inserted successfully",data);
        res.send(data);
    });
});

app.post('/mail',(request,response,next)=>{
    console.log('mmm');
   
    var object ={
        firstname : request.body.firstName,
        email : request.body.email,
        password : request.body.password,
        mobile : request.body.mobile,
        post : request.body.post,
        date : request.body.Date,
        time : request.body.Time,
        image : request.body.image,
        social :request.body.social
    }
    setmail.getemail(object);
    console.log(object);
    response.send(json);

})

    
    

app.listen(port, (err) => {
    if(err) {
        return console.log('Something bad happened',err);
    }
    console.log(`server is listening on http://localhost:${port}`);
})


