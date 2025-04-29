function openWindoww(){

let myWindow=window.open("https://www.google.com","_blank" ,"Width:300 ,height=300");
if(myWindow){
myWindow.document.writeln(` you can scroll down `);
myWindow.document.close();

myWindow.scrollTo(0,myWindow.document.body.scrollHeight);
}

}
//calling function
// let timeOUTid=setTimeout(()=>{
//  openWindoww();
//  clearInterval(timeId);
// },2000);

////question 2/
//A
//default collection
console.log(document.images);

//using method 
let imglist=document.getElementsByTagName("img");
console.log(imglist);

//B
let cityL = document.getElementById('city');

  for (let i = 0; i < cityL.options.length; i++) 
    {
    console.log("City:", cityL.options[i].value);
  }
  

//C access row in table
let tables = document.getElementsByClassName('table');
console.log(tables[1].getElementsByTagName('td'));

//D
let Eleme = document.querySelectorAll('.fontBlue.BGrey');
console.log(Eleme);


//question 4
//a
setInterval(() => {
  document.title = new Date().toLocaleString();
}, 1000);


//b
window.onload = () => {
  let query = new URLSearchParams(window.location.search);
  let name = query.get("name");
  let age = query.get("age");

  if (name && age) {
    let userObj = {
      name: name,
      age: age
    };
    console.log(userObj);
  }
};
