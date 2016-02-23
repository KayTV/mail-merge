var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merge' });
});

router.post('/', function(req, res, next){
  var subject = req.body.Subject;
  var body = req.body.Body;
  var email = req.body.Emails;
  var splitEmail = email.split('\r\n');
  for(var i = 0; i < splitEmail.length; i++) {
    splitEmail[i] = splitEmail[i].split(',');
  }
  console.log(splitEmail)
  var renderObj = {
    id: 0,
    emails: splitEmail,
    body: body,
    subject: subject,
    // changeId: function (){
    //   emails.id + 1
    // },
    title: 'Mail Merge'
  };
  console.log(renderObj);
  console.log(renderObj.changeId())
  res.render('index', renderObj);
})

module.exports = router;

//when you hit a new line, that means a new array
//somehow put it in a loop to get each email address
//once those parts are good, each one will appear in a content box in HTML
//with once on click
//define object within the loop, for in loop?
