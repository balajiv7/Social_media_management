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



// app.get('/getdata/:id', function (request, response) {
//   response.json({ "name": "Balaji" });
// });
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());



app.get('/getdata/:id', (req,res) => {
    console.log("retreived......",req.params.id);

    //all data retrieved

    // const doc = dbconnection.trainee.list().then(body => {
    //     body.rows.forEach((doc) => {
    //         console.log(doc);
    //     })
    // })

    var object = {
        selector: {
            
            "email" : req.params.id,
            "type" : "user"
        }
    }
    dbconnection.trainee.find(object).then((data => {
      
       
        console.log("firstname",data);  
        res.json(data);      
        
    }))
})

//post

app.post('/postdata', function (req,res) {
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
    });
});
app.post('/mail',(request,response,next)=>{
    console.log('mmm');
   
    var object ={
        firstname : request.body.userName,
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


