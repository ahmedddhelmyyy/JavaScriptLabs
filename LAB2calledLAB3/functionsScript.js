// function fullName(fName){
//     let fName=  nameInput.value.trim();
//     // fName.split(" ")[0];
//     let ress=fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
// return ress;
// }


function capName(fullName){
let words = fullName.toLowerCase().split(" ");
let caps=[];

for(let i=0 ; i<words.length;i++){
    let word=words[i];
    if(word){
        caps.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }
}
return caps.join(" ");
}
/////////////Example : 'Web Development Tutorial'
//Output : 'Development

function longest(sentencee){
    let wordss=sentencee.split(" ");
 
 let srtArr=wordss.sort((a , b)=>{
return b.length - a.length;
 
});
   return(srtArr[0]);
}

///////////////////////QUESTION 3===========
//Example : javascript
//Output : aacijprstv

function sortAlpha(sent){
let word=sent.split("");

let sorted=word.sort();
return word.join("");
}


////////////////////QUESTION 4
//Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].

function common(arr1,arr2){

    let com=[];

    for(let i=0 ; i<arr1.length ; i++){
       for(let j=0 ; j<arr2.length ; j++ ){
if(arr1[i]==arr2[j]){
    com.push(arr1[i]);
    break;
}
       }
        
        }
        return com;
}

////////////Question 5============
function dups(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
  
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;}
      }
  
      
      if (count === 1) {
        result.push(arr[i]);
}
    }
  
    return result;
  }
  