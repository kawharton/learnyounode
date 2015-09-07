
var sum = 0;

var myArray = process.argv.slice(2);

for (var i = 0; i < myArray.length; i++) {
  sum += Number(myArray[i]);
};
 
 console.log(sum);