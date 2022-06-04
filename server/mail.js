
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
    subject:'Post Planner',
    text:"🎉🎉YOUR SCHEDULE INFORMATION IS HERE 🎉🎉"+ " Name 😎:"+"  "+ params.firstname +"     "+ "Email 📧:" + "  "+params.email+ "  "  +"  "+"Caption ⭐: "+params.post +"  "+"Date 📅:"+params.Date+"  "+"Sheduled Time ⏲: "+"   "+params.Time+"                     "+"  "+"Posting App: "+params.social +" "
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
