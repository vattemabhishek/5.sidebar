const togglebtn = document.querySelector('.sidebar-toggle');
const closebtn= document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');


togglebtn.addEventListener("click",function(){
   if(sideBar.classList.contains('show-sidebar'))
   {
    sideBar.classList.toggle("show-sidebar");
   }
});

closebtn.addEventListener("click",function(){
    if(sideBar.classList.contains('show-sidebar'))
    {
     sideBar.classList.remove("show-sidebar");
    }
    console.log("close close");
 });