var test = require('./sauce-arguments.js');
var input = require('./lib/utils.js');
var browsername = process.argv[2];
var osname = process.argv[3];
var version = ' ';
version = process.argv[4];
var requestVersion = function(callback){
	var stdin = process.stdin; 
		//stdin.setRawMode(true);    
		stdin.resume();
		stdin.setEncoding('utf8');
		process.stdout.write('Please enter the browser version: ');
		stdin.on('data', function (key) 
		{
		version = key;
		callback(version);
		});
}

var bflag = false, oflag = false;

var availbrowsers = ['firefox', 'chrome', 'internet explorer', 'safari', 'ipad', 'iphone', 'android'];
var availenvis = ['Mac 10.6', 'Mac 10.8','Linux', 'Windows XP', 'Windows 7', 'Ubuntu', 'Windows 8'];
var verifyCombination = function(bname,osname,callback)
{	var valid = false;
	var combinations = ['chrome-Windows XP', 
						'chrome-Windows 7',
						'chrome-Mac 10.6',
						'chrome-Mac 10.8',
						'chrome-Ubuntu',
						'firefox-Windows XP',
						'firefox-Windows 7',
						'firefox-Windows 8',
						'firefox-Mac 10.6',
						'firefox-Ubuntu',
						'safari-Mac 10.6',
						'internet explorer-Windows 8',
						'ipad-Mac 10.6',
						'iphone-Mac 10.6',
						'ipad-Mac 10.8',
						'iphone-Mac 10.8',
						'android-Linux'];
	var ccombination = bname + '-' + osname;
	for(var i=0;i<combinations.length;i++)
	{
		if(ccombination == combinations[i])
		{
			valid = true;
			callback(valid);
		}
		
	}
	if(valid == false)
	{
		console.log("\x1b[31mPlease enter a valid Browser - OS combination. \nPress '1' to see the valid Browser-OS combinations or any other key to exit\x1b[0m");
		
		var stdin = process.stdin; 
		//stdin.setRawMode(true);    
		stdin.resume();
		stdin.setEncoding('utf8');
		stdin.on('data', function (key) {
		if( key == 1)
		{
		for(var j=0;j<combinations.length;j++)
		{
			process.stdout.write(combinations[j]+'\n');
		}
		process.exit();
		}
		else process.exit();
		
		});
	};
			
					
		};

try{
for(var i=0; i<availbrowsers.length; i++)
{
	if(availbrowsers[i] == browsername)
		{	
			bflag = true; //-- flag for valid browser name
			for(var j=0; j<availenvis.length; j++)
			{
				if(availenvis[j] == osname)
				{
					oflag = true; //---flag for valid osname
					if(((osname == "Mac 10.6") || (osname == "Mac 10.8") || (osname == "Linux")) && (version == ' '))
					{	
						console.log('Please enter the browser version: ');
						input.input(function(version){
						
						verifyCombination(browsername,osname,function(valid){
						
						if(valid)
						{ 	
							test.starttest(browsername,osname,version);
							}
						});
					});
					}
					else
					{
						verifyCombination(browsername,osname,function(valid){
						
						if(valid)
						{ 	
							test.starttest(browsername,osname,version);
						}
						});
					}
					break;
				}
									
			}
		}
}
if(!bflag)
	throw "Please enter a valid browser name";
if(!oflag)
	throw "Please enter a valid OS name";
}
catch(e)
{
	console.log(e);
};
