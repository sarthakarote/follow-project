var follow=document.querySelector("#follow");
var flag=0;
follow.addEventListener("click",function(){
  if (flag==0){
follow.innerHTML="Remove friend";
follow.style.color="red";
document.querySelector("h3").style.color="green";
document.querySelector("h3").innerHTML="followed";
flag=1;}
else{
if( flag==1){
  follow.innerHTML="Add Friend";
   follow.style.color="black";
 document.querySelector("h3").style.color="red";
 document.querySelector("h3").innerHTML="Stranger";
flag=0;}
}
 });
 // var remove=document.querySelector("#remove");
//  remove.addEventListener("click",function(){
//   follow.innerHTML="Follow";
//   follow.style.color="black";
// document.querySelector("h3").style.color="red";
// document.querySelector("h3").innerHTML="Stranger";
//  })