const form = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});

const setError = (element, message) => {
    const parent = element.parentElement;
    const messageDisplay = parent.querySelector(".error");
    messageDisplay.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

const setSuccess = element => {
    const parent = element.parentElement;
    const messageDisplay = parent.querySelector(".error");
    messageDisplay.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
}

function validateEmail(email) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
}


const checkInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ""){
        setError(username, "Username is required");
    }
    else{
        setSuccess(username)
    }

    if (emailValue === ""){
        setError(email, "Email is required");
    }
    else if(!validateEmail(emailValue)){
        setError(email, "Provide a valid email address");
    }
    else{
        setSuccess(email)
    }

    if (passwordValue === ""){
        setError(password, "Password is required");
    }
    else if(passwordValue.length < 8){
        setError(password, "Password much be more than 8 characters");
    }
    else{
        setSuccess(password)
    }

    if (password2Value === ""){
        setError(password2, "Please confirm password");
    }
    else if (passwordValue !== password2Value){
        setError(password2, "The password does not match");
    }
    else{
        setSuccess(password2);
    }
}
