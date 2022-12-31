let symbols = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validation(){
    var form = document.getElementById("form")
    var email = document.getElementById("email").value
    var text = document.getElementById("text")

    
    if(email.match(symbols)){
        form.classList.add("valid")
        form.classList.remove("valid")
        text.innerHTML = ""
    }else if(email == ""){
        text.innerHTML = "Please enter email"
        text.style.color = "#EF4877"
    }else{
        form.classList.remove("valid")
        form.classList.add("valid")
        text.innerHTML = "Please check your email"
        text.style.color = "#EF4877"
    }
}

function validation2(){
    let input = document.getElementById("btn_input2").value
    let text1 = document.getElementById("text2")

    if(input.match(symbols)){
        text1.innerHTML = ""
    }else if(input == ""){
        text1.innerHTML = "Please enter email"
        text1.style.color = "#EF4877"
    }else{
        text1.innerHTML = "Please check  your email"
        text1.style.color = "#EF4877"
    }
}