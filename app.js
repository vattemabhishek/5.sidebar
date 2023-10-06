const togglebtn = document.querySelector('.sidebar-toggle');
const closebtn= document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');


togglebtn.addEventListener("click",function(){
   if(sideBar.classList.contains('show-sidebar'))
   {
    sideBar.classList.remove("show-sidebar");
    //toggle doesnt work
    //sideBar.classList.toggle("show-sidebar");
   }
   else{
    sideBar.classList.add("show-sidebar");
   }
   console.log("toggle toggle")
});

closebtn.addEventListener("click",function(){
    if(sideBar.classList.contains('show-sidebar'))
    {
     sideBar.classList.remove("show-sidebar");
    }
    console.log("close close");
 });