var fs = require('fs');
//--------- To accept input text --------
exports.input = function(callback){
	var stdin = process.stdin; 
		//stdin.setRawMode(true);    
		stdin.resume();
		stdin.setEncoding('utf8');
		
		stdin.on('data', function (key) 
		{
		var input = key;
		input = input.substr(0,input.length-2);
		callback(input);
		});
}
//----------- To write results to the results file
exports.results = function(message){
fs.appendFile('./results.txt', '--' + message + '--\n', function (err) {
  if (err) throw err;
  console.log(message);
});

}
// ---------- To return the current date and time ---------
exports.getDate = function(callback){
  var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
	var dd = currentTime.getDate();
	var mm = currentTime.getMonth()+1; //January is 0!

	var yyyy = currentTime.getFullYear();
	if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} str = mm+'/'+dd+'/'+yyyy + ' ' +str;
    callback(str);
}
//-----pause the execution --
exports.pause = function(milliseconds,callback) {
console.log("waiting to load...");
setTimeout(callback,milliseconds);
}
//----- Maximize ---
exports.Max = function(browser,callback) {
browser.manage().window().maximize();
callback();
}
