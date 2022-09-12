const send=document.querySelector(".send-button")
send.addEventListener("click",()=>{

const name=document.querySelector("#name").value
const email=document.querySelector("#email").value.split("@")
const number=document.querySelector("#number").value
const message=document.querySelector("textarea").value.length
const firstpartnumber=number.slice(0,4)
const textalert=document.querySelector("#textalert")
var text=""
var numtest=false
function numbertest(){
 if(firstpartnumber=="+961"){
  if(number.slice(4,6)=="70"||number.slice(4,6)=="71"||number.slice(4,6)=="78"||number.slice(4,6)=="76"||number.slice(4,6)=="79"||number.slice(4,6)=="81"){
    if(number.slice(4,12).length==8){
      numtest=false
    }
    else{
    
    
        numtest=true
      
    }
  }
  else{
      if(number.slice(4,5)=="3"){
           if(number.slice(4,11).length==7){
            numtest=false
           }
           else{
            numtest=true
           }
      }
  }
}
 else{
  numtest=true
  
 }}
numbertest()
if(name.length<5){
 text="you should enter minimun of 5 letters"
}
if(email[0].length<3 ||email[1].length<5){
  text="invalid email"
}
if( message<100){
  text="you must insert a minimun of 100 letters"
}

textalert.style.backgroundColor=" rgb(64, 170, 147)"
textalert.textContent="information saved"
if(name.length<5 || email[0].length<3 ||email[1].length<5 ||numtest || message<100){
    
    textalert.textContent=text
    textalert.style.backgroundColor="red"
   
   
    
  }
})