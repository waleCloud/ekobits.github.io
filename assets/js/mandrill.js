/**
* A mandrill setup for ekobits
*/

// A mandrill script for 
// Create a function to log the response from the Mandrill API
function log(obj) {
	var txt = JSON.stringify(obj);
    var rep1 = txt.replace('[',' ');
    var rep2 = rep1.replace(']','');
    
    var response = JSON.parse(rep2);

    if(response.status === 'sent')
    {
    	alert("Thank You for contacting us! We will get back to you shortly.");
    }
    else
    {
    	alert("Please try again! "+response.status+' '+response.message+' '+response.name);
    }
    
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('5gDDQ88QpGdKisjG3lsrzg');


// Begin function sendTheMail for Mandrill
function sendTheMail( from, subject, message) {

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email": from,
        "to":[{"email":"wale@ekobits.academy"}],
        "subject": subject,
        "html": message,
        "autotext": true 
    }
};
// Send the email!
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}
// End function sendTheMail

// function for contact us form
function getContact() {
	var fname = document.getElementById('first-name').value;
	var email = document.getElementById('email').value;
	var desc = document.getElementById('description').value;
	var message = "Name: "+fname+"<br> Email address: "+email+"<br> Message: "+desc;

	sendTheMail(email, 'Contact From Ekobits Website', message);
	//alert("Thank You for contacting us! We will get back to you shortly.");
}

// MasterClass email
function masterClassInterest() {
	var email = document.getElementById('ms_email').value;
	var interest = document.getElementById('ms_interest').value;
	var message = "Email: "+email+"<br> My interest: "+interest;

	sendTheMail(email, 'Interested in masterClass', message);
	//alert("Thank You for contacting us on MasterClass, We will get back to you shortly!");
}

// Volunteer email 
function volunteer() {
	var name = document.getElementById('v_name').value;
	var email = document.getElementById('v_email').value;
	var fone = document.getElementById('v_phone').value;
	var volunteer = document.getElementById('v_vol_as').value;
	var msg = document.getElementById('v_msg').value;

	var message = ("Name: "+name+"<br> Phone: "+fone+"<br> Volunteer as: "+volunteer+"<br> Message: "+msg); 

	sendTheMail(email, 'Volunteer', message);
	//alert("Thank You for offering your Service, we will get in-touch with you to discuss what next. We are excited to have on board.");
}