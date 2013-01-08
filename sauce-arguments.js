//----- Link file with driver to launch web driver for different environments ---------
var webdriver = require('wd')
  , assert = require('assert');
var login = require('./lib/login.js');
var createContact_FFnC = require('./lib/createContactForFFnC.js');
var createContact_Android = require('./lib/createContactForAndroid.js');
var createContact_FFonWin8 = require('./lib/createContactForFFonWin8.js');
var readContact_Iphone = require('./lib/readContactForIphone.js');
var readContact_FFnC = require('./lib/readContactForFFnC.js');
var readContact_Android = require('./lib/readContactForAndroid.js');
var readContact_FFonWin8 = require('./lib/readContactForFFonWin8.js');
var fs = require('fs');
var time = require('./lib/utils.js');
var sldriver = webdriver.remote(
  "ondemand.saucelabs.com" 
  , 80
  , "ramyareddy" //--- Enter sauce labs account username here
  , "29ada6ba-d9c7-4fc7-952a-5abd3137d1ee" //--- Enter sauce labs account access key here
);
var browserdriver = webdriver.remote();

// Adding date and time to the firefox console and the log file
exports.starttest = function(browsername, osname, version){
try{
browserdriver.on('status', function(info){
time.getDate(function(date){
console.log(date);
fs.appendFile('./results.txt', '\n-----Script run at: ' + date + '-----\n' + info + '\n', function (err) {
  if (err) throw err;
});
console.log('\x1b[36m%s\x1b[0m', info);
})});
browserdriver.on('command', function(meth, path){
fs.appendFile('./results.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});
console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

sldriver.on('status', function(info){
time.getDate(function(date){
console.log(date);
fs.appendFile('./results.txt', '\n-----Script run at: ' + date + '-----\n' + info + '\n', function (err) {
  if (err) throw err;
});
console.log('\x1b[36m%s\x1b[0m', info);
})});

sldriver.on('command', function(meth, path){
fs.appendFile('./lib/results.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

exports.browserdetails = {
  browserName: browsername,
  osname: osname,
  browserverson : version
    
};
var caps = {
  browserName: browsername
    , tags: ["selenium test"]
, name: "Basic CRM Process flow on " + browsername + ":" + osname
};
if((osname === "Windows XP")||( osname === "Windows 7") || (osname === "Ubuntu"))
{
	caps.version = '';
	caps.platform = 'ANY';
	if((browsername === "firefox") || (browsername === "chrome"))
	{
	login.login(browserdriver, caps, function(browserdriver){
	createContact_FFnC.createContact(browserdriver,function(browserdriver){
	readContact_FFnC.readContact(browserdriver);
	});
	});
	}
}
else if((osname === "Linux") || (osname === "Mac 10.6") || (osname === "Mac 10.8") || (osname == "Windows 8"))
{
	caps.version = version;
	caps.platform = osname;
	if(browsername === "internet explorer")
	{	
		caps.version = '10';
	}
	if((osname === "Windows 8") && (browsername === "firefox"))
	{
		login.login(sldriver, caps, function(sldriver){
		createContact_FFonWin8.createContact(sldriver,function(sldriver){
		readContact_FFonWin8.readContact(sldriver);
	});
	});
	}
	else{
	if((browsername === "firefox") || ( browsername === "chrome") || (browsername === "internet explorer") || (browsername === "safari"))
	{
	login.login(sldriver, caps, function(sldriver){
	createContact_FFnC.createContact(sldriver,function(sldriver){
	readContact_FFnC.readContact(sldriver);
	});
	});
	}
	
	else if(browsername === "android")
	{
	login.login(sldriver, caps, function(sldriver){
	createContact_Android.createContact(sldriver,function(sldriver){
	readContact_Android.readContact(sldriver);
	});
	});
	}
	else if((browsername === "iphone") || (browsername === "ipad"))
	{
	login.login(sldriver, caps, function(sldriver){
	createContact_Android.createContact(sldriver,function(sldriver){
	readContact_Iphone.readContact(sldriver);
	});
	});
	}
	}
}
}
catch(e)
{
	console.log('Exception in starting test' + e);
}
}

	
