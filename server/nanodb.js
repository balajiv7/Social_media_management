const nano = require('nano');
const url = "https://apikey-v2-380rhhqzbqk6eifbn30gvuevzk9903pdrrsd7f8ipknj:ee0e39016c30dc0fc4fd04d12a420174@5804af1c-53d6-4cc1-b0eb-5219a1cc5775-bluemix.cloudant.com";
const nanodb = nano(process.env.COUCHDB_URL || url);
const trainee = nanodb.use('balaji_trainee'); 

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
        to:params,
        subject:'node email',
        text:'Hello everyone'
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
module.exports = {nano,trainee};
