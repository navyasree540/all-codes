// // document.write("hello sree from js"+"<br>");
// var a="78sree";
// var b="34reddy";
// document.write(Number(a)+Number(b));
function add(){
var details={
	name:"k.sree",
	email:"sree@gmail.com",
	experience:"5 yrs",
	courses:["web design","python"]
}
for(var i in details){
	document.write(details[i]+"<br>")
}

//for loop for object
// for (var i=0;i<details.courses.length;i++){
// 	document.writeln(details.courses[i]+"<br>")
// 	document.write(details.name);
}
add();

function change(){
	var b=document.getElementById("para").innerHtml="hellooo";
b.textContent="hello";
}

//arrow function

function sree(a,b){
	window.alert(a+b);
}
sree(99,1);

var sree=(a,b)=>{
window.alert(a-b);
}
sree(40,4);
//if function without params
()=>{
}

//differences between var,let,const

var r1=10;
var r1=40;
document.write(r1,"<br>");
{
	var r1=20;
	document.write(r1,"<br>");
}
document.write(r1,"<br>");

let r=10;
{
	let r=20;
	document.write(r,"<br>");
}
document.write(r,"<br>");


const r2=10;
{
	const r2=20;
	document.write(r2,"<br>");
}
document.write(r2,"<br>");


//example for class 
class Square{
	constructor(height,width){
		this.h=height;
		this.w=width;
	}
}
 var a=new Square("40cm","40cm")
document.write(a.h,a.w);



//Rest and spread (....paaram name)

//Rest parameter(....paramname)

//function addition(p1,p2,...s){
//	document.write(p1+p2,"<br>")
//	document.write(s[5]);
//}
//addition(1,2,3,4,5,6,6,7,8);


//spread parameter(....paramname)
const array1=[1,2,3];
const array2=[...array1];
array2.push(4,5,6,7,8);
array2.pop(8);
document.write(array2)



var n=["sai","sree","ram","reddy"]
var[name1,name2,name3,name4]=n;
document.write(name4);



var n=["n","m","o"]
var[name1,name2,name3]=n;
document.write(name3);


//interpolation
var n="i have one";
var m=`i have the number ${n}`;
document.write(m);

var n1=`iam
 good girl`;
document.write(n1);
//for-in loop

// var a="apssdc react";
// for(var i in a){
// 	document.writeln(a[i]+"<br>");
// }


//for of loop we can use only strings,arrays not in object

// for(var i of details.courses){
// 	document.writeln(i);
// }
// var s="123456"
// for(var i of s){
// 	document.write(i+"<br>");
// }

// //user defined functions

// function add(a,b){
// 	document.write(a*b);
// }
// add(13,40);