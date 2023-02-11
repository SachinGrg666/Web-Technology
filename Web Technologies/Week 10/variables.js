var name= "Sachin";
name = "Hari";

let name1= "Rundup";
name1= "Ram";
name3= 4;

const name2= "Norge";
//name2= "Sita"
console.log(typeof name);
console.log(typeof name1);
console.log(typeof name2);
console.log(typeof name3);

let number=prompt("Enter any Number You like: ");
console.log(number);
if(number==7){
    console.log("Welcome")
}

/* document.getElementsByClassName("paragraph")[0].style.backgroundColor="blue"; */
//Changing the css style by DOM
document.getElementsByClassName("paragraph")[2].style.cssText="background:blue; color=white; font-size:60px";
//Overwriting the content of HTML by DOM
document.getElementsByClassName("paragraph")[2].innerHTML="<p>Hi this is week 10<p>";
document.getElementsByTagName("h1")[1].innerHTML="DOM getElementsByTagName Example";  
