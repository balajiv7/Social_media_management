
const nodemail = require('nodemailer');

const sender = nodemail.createTransport({
  service:'gmail',
  auth:{
    user:'sweetybalaji2000@gmail.com',
    pass:'B@laji2000'
  }
})
module.exports.getemail = function(params)
{
 
  const composemail = {
    from:'sweetybalaji2000@gmail.com',
    to:params.email,
    subject:'node email',
    text: "Name:"+"  "+ params.firstname +"  "+ "email:" + " "+params.email+ "  " +"mobile:"+"  "+params.mobile
    +"  "+params.post +"  "+params.date+"   "+params.time+"   "+params.social
  }
  sender.sendMail(composemail,function(err,res){
    if(err)
    {
      console.log("Mail not sent",err);
    }
    else{
      console.log("Mail sent",res);
    }
  })
}
