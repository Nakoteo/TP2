document.onload = function(){

    console.log("hi");
    var elmBurger = document.getElementsByClassName("boutonBurger")[0];
    var elmMenu = document.getElementsByClassName("footer-navigation")[0];
    var elmChecked = document.getElementById("chkBoutonBurger");

    elmBurger.addEventListener("click", translateMenu);

    function translateMenu(){
       if(elmChecked.checked == true){
            elmMenu.style.transform = "translateX(0%)";
        } else{
            elmMenu.style.transform = "translateX(-100%)";
        }
    }
   
}