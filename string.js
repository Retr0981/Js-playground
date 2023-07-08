///============  STRING METHODS  ================//////



///============ charAt() ================//////
var str = "Hello World";
var res = str.charAt(0);

console.log(res)
//Output H

///============ concat() ================//////
var str1 = "Hello";
var str2 = "World";
var res = str1.concat(str2)

console.log(res)
// output Hello World


///============  charcode() ================//////
var str = "HELLO WORLD"
 var res = str.charCodeAt(0)

 console.log(res)
 //output 72



///============ endsWith() ================//////
var str = "Helo world, welcome to the universe";
var res = str.endsWith("universe");

console.log(res)
//output true

///============ indexOf() ================//////
var str = "Hello world, welcome to the universe.";
var res = str.indexOf("welcome");

console.log(res)
// output 13 

///============ includes() ================//////
var str = "Hello world, welcome to the universe.";
var res = str.includes("world")

console.log(res)
// output true



///============ lastIndexOf() ================//////
var str = "Hello planet earth, you are a great planet.";
var res = str.lastIndexOf("planet");

console.log(res);
// output 36 




///============ match() ================//////
var str = "The rain in SPAIN mainly in the plain.";
var res  = str.match(/ain/g);
console.log(res)
// output ["ain", "ain", "ain",]



///============ repeat() ================//////
var strg = "Hello world!";
strg.repeat(2);

console.log(strg)
//output  Hello world!Hello world!


///============ replace() ================//////
var str = "Visit Fb";
var res = str.replace("Fb", "Google");

console.log(res)
// output  Visit Google

///============ search() ================//////
var str = "Visit Google";
var res = str.search("Google");

console.log(res)
// output 6 


///============ slice() ================//////
var str = "Hello World";
var res = str.slice(0,5)

console.log(res)
//output Hello 


///============ split() ================//////
var str = "How is David Today?";
var res = str.split(" ");


console.log(res)
// output [ 'How', 'is', 'David', 'Today?' ]


///============ startswith() ================//////
var str = "Hello, paddy, welcome to armzone";
var res = str.startsWith("Hello");


console.log(res)
// output true


///============ substr() ================//////
var str = "Hello world!"
var res =  str.substr(1,4);

console.log(res);
// output ello

///============ substring() ================//////
var str = "Hello world!"
var res =  str.substring(1,4);

console.log(res);
// output ell



///============ toLocaleLowerCase() ================//////
var str = "Hello World!";
var res = str.toLocaleLowerCase();

console.log(res)
// output hello world!


///============ toLocaleUpperCase() ================//////
var str = "Hello World!";
var res = str.toLocaleUpperCase();

console.log(res)
// output HELLO WORLD!


///============ toLowerCase() ================//////
var str = "Hello World!";
var res = str.toLowerCase();

console.log(res)
// output hello world!


///============ toUpperCase() ================//////
var str = "Hello World!";
var res = str.toUpperCase();

console.log(res)
// output HELLO WORLD!


///============ Trim() ================//////
var  strg = "   Hello world!";
console.log(strg)
// Output : "  Hello World!"

var  res = strg.trim()
console.log(res)
// Output : "Hello World!"




















