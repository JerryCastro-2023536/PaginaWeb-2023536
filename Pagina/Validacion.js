const form = document.getElementById("formulario");
const user = document.getElementById("usuario");
const pass = document.getElementById("contrasena");

form.addEventListener("submit", () => {

    if (user.value === 'admin' && pass.value === '1234') {
        alert('Login exitoso');
        window.location.href = "/Pagina/PaginaPrincipal.html";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});