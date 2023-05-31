const password = document.getElementById("password");
const passwordCon = document.getElementById("password-c");

function confirmPass(){
    if(password.textContent===passwordCon.textContent){
    return true;
    }else{
    return false;}
}