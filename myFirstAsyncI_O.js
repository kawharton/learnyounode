
var fs = require('fs');

		fs.readFile(process.argv[2], 'utf8', function (error, buffer){
			if (error) {
			console.error(error.message);
		}
			else {
				var count = buffer.split('\n').length-1;
		console.log(count);
			}

		});
		
		
	

