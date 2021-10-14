const emailInput = document.querySelector(".email")
const password = document.querySelector(".pwd")
const email_error = document.querySelector(".email-error")
const pwd_error = document.querySelector(".pwd-error")
const btn = document.querySelector(".btn")
const form = document.querySelector("#form")
const display = document.querySelector(".display")

let emailReg = /^([a-z0-9\.-]+)@(gmail).(com)$/;
let pwdReg = /^([a-zA-Z0-9]{7})([\!@$%^&#*]{1})$/;

let emailError = "Invalid email. It must contain the @gmail.com character"
let pwdError = "Invalid password. It must contain 8 characters and a special symbol"


btn.addEventListener("click",(e) =>{
    e.preventDefault();

    const url = "https://reqres.in/api/login";
    
    fetch(url,{
        method : "POST",
        headers : {
            Accept:"application/json,text/plain",
            "Content-Type":"application/json",
        },
        body : JSON.stringify({
            email: emailInput.value,
            password: password.value
        })
    })
    .then(response => response.json())
    .then(result =>{
        console.log()
        if(result.error){
            return display.textContent = result.error
        }
        display.textContent = "login successfully"
        window.location.href = "./rules.html"
    } ).catch((e) => console.log(e))

})
const emailValidation = (e) =>{
    let emailVal = emailInput.value;
    if (emailReg.test(emailVal)){
        email_error.innerHTML = ""
        return emailVal
    } 
    else{
        email_error.innerHTML = emailError
        e.preventDefault()
    }
}


const pwdValidation = (e) =>{
    let pwdVal = password.value;
    console.log(pwdReg.test(pwdVal), pwdVal)
    if (pwdReg.test(pwdVal)){
        pwd_error.innerHTML = ""
        return pwdVal
    } 
    else{
        pwd_error.innerHTML = pwdError
        e.preventDefault()
    }
}

btn.addEventListener("click", emailValidation)
btn.addEventListener("click", pwdValidation)