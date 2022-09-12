const send=document.querySelector(".send-button")
send.addEventListener("click",()=>{
const name=document.querySelector("#name").value
const email=document.querySelector("#email").value.split("@")
const number=document.querySelector("#number")
const message=document.querySelector("textarea")
  
if(name.length<5 || email[0].length<3 ||email[1].length<5 ){
 
    console.log("kaka")
  }
})