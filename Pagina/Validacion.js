const formulario = document.getElementById("formulario");
const user = document.getElementById("usuario");
const password = document.getElementById("contrasena");

formulario.addEventListener("submit", () => {

    if (user.value === "admin" && password.value === "1234") {
        alert("Se ha iniciado correctamente");
        window.location.href = "/Pagina/PaginaPrincipal.html";
    } else {
        alert("Credenciales incorrectas");
    }
});