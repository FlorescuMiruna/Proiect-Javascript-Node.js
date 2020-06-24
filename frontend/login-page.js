const registerButton = document.querySelector("#register");

async function clearLocalStorage() {
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);

}

var backgroundTheme = document.querySelector("#backround-theme");
//In functie de tema de fundal aleasa in formular, schimbam imaginea de fundal
backgroundTheme.addEventListener("change", function() {

    localStorage.setItem("background-theme", backgroundTheme.value)
        //Retinem valoarea cu Local Storage ca sa putem modifica si celelalte pagini

    if (backgroundTheme.value == "Sea")
        document.body.style.backgroundImage = "url(./Imagini/sea.jpg)";

    if (backgroundTheme.value == "Pink")
        document.body.style.backgroundImage = "url(./Imagini/pink.jpg)";

    if (backgroundTheme.value == "Party")
        document.body.style.backgroundImage = "url(.Imagini/party.jpg)";


})




registerButton.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { //Asculta de Enter
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const stylee = document.querySelector('input[name="stylee"]:checked').value;

        console.log("Parola este: ", password);

        const hasUpperCase = /[A-Z]/.test(password); //big letter
        const hasLowerCase = /[a-z]/.test(password); //small letter
        const hasNumbers = /\d/.test(password); //digit
        const hasNonalphas = /\W/.test(password); // characters ex: !


        const user = {
            name,
            email,
            password,
            stylee,
        }

        if (user.name) {
            //Retinem in local storage numele userului, pe care il vom folosi in pagina principala
            localStorage.setItem("userName", user.name);
            console.log(localStorage.getItem("userName"));
        }

        //in javascript true este 1 si false este 0
        //doar in javascript boolean se pot aduna, ex: 1+1+1 sau 0+0+0
        ///Parola trebuie sa aiba cel putin 8 caractere, si sa contina cel putin 3 din
        //urmatoarele: Litera mare, litera mica, cifra, simbol

        if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 3 || password.length < 8) {
            // In caz ca parola e prea scurta sau nu respecta criteriile, arunca o alerta
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Bad Password!',

            })
        } else {
            //Daca parola e valida, ne duce pe pagina noastra
            alert(`Welcome ${user.name}. Your email account is: ${user.email}`);
            window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/read-clothes-page.html");
        }
    }
})

clearLocalStorage()