const registerButton = document.querySelector("#register");
//TODO: Validate form!
async function clearLocalStorage() {
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);

}
registerButton.addEventListener("click", async function() {

    let test = '123';
    console.log(test);
    //Sintaxa +'string' transforma un string intr-un int
    test = +test;
    console.log(test);
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const hobby = document.querySelector('input[name="hobby"]:checked').value;

    const hasUpperCase = /[A-Z]/.test(password); //big letter
    const hasLowerCase = /[a-z]/.test(password); //small letter
    const hasNumbers = /\d/.test(password); //digit
    const hasNonalphas = /\W/.test(password); //characters ex: !

    const user = {
        name,
        email,
        password,
        hobby,
    }
    if (user.name) {
        localStorage.setItem("userName", user.name);
        console.log(localStorage.getItem("userName"));
    }

    //in javascript true este 1 si false este 0
    //doar in javascript boolean se pot aduna, ex: 1+1+1 sau 0+0+0
    if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 3 && password.length < 8) {
        alert("bad password");
    } else {
        alert(`Welcome ${user.name}. Your email account is: ${user.email}`);
        window.location.replace("file:///C:/Users/Miruna/Desktop/web/Proiect/javascript-project/frontend/add-product-page.html");
    }
})

clearLocalStorage()