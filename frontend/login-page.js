const registerButton = document.querySelector("#register");
//TODO: Validate form!
registerButton.addEventListener("click", async function() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const hobby = document.querySelector('input[name="hobby"]:checked').value;
    console.log(password);
    const user = {
        name,
        email,
        password,
        hobby,
    }
    alert(`Welcome ${user.name}. Your email account is: ${user.email}`);
    window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/read-clothes-page.html");
})