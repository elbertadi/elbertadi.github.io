let errorMsg = document.getElementById("error-msg");

let validate = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let creason = document.getElementById("creason").value;
    let message = document.getElementById("message").value;

    if(name.length < 1){
        errorMsg.innerHTML = "Name is not supposed to be empty!";
        return false;
    }
    if(!email.includes("@")){
        errorMsg.innerHTML = "Check your E-Mail!";
        return false;
    }
    if(gender == ""){
        errorMsg.innerHTML = "Choose your gender!";
        return false;
    }
    if(creason == ""){
        errorMsg.innerHTML = "Choose your contact reason!";
        return false;
    }
    if(message.length < 10){
        errorMsg.innerHTML = "Message is too short!";
        return false;
    }

    return true;
}