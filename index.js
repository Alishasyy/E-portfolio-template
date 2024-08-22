let constrastToggle = false;
function toggleConstrast(){
    constrastToggle= !constrastToggle;
    if(constrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
     document.body.classList.remove("dark-theme");

    }
}