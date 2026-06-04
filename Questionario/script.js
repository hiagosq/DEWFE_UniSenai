function OcultarSenha() {
    var senhaInput = document.getElementById("passwordInput");
    var toggleSenha = document.getElementById("toggleSenha");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleSenha.textContent = "Esconder Senha";
    } else {
        senhaInput.type = "password";
        toggleSenha.textContent = "Mostrar Senha";
    }
}

function SenhaInvalida(){
    var senhaInput = document.getElementById("passwordInput");
    var toggleInvalido = document.getElementById("toggleInvalido");

    toggleInvalido.innerHTML = "";

    if (senhaInput.value.length < 8) {
        let novoAviso = document.createElement("p");
        novoAviso.textContent = "A senha deve conter pelo menos 8 caracteres.";
        novoAviso.style.color = "red";
        senhaInput.style.border = "2px solid red";
        senhaInput.style.outline = "none";

        toggleInvalido.appendChild(novoAviso);
        toggleInvalido.classList.remove("hidden");
    } 
    else {
        let novoAviso = document.createElement("p");
        novoAviso.textContent = "A senha contém 8 caracteres ou mais.";
        novoAviso.style.color = "green";
        senhaInput.style.border = "2px solid green";
        senhaInput.style.outline = "none";

        toggleInvalido.appendChild(novoAviso);
        toggleInvalido.classList.remove("hidden");
    }
}

function toggleEstudante() {
    var estudanteCheckbox = document.getElementById("checkbox");
    var estudanteDados = document.getElementById("estudanteDados");

    if (estudanteCheckbox.checked) {
        estudanteDados.classList.remove("hidden");
    } 
    else {
        estudanteDados.classList.add("hidden");
    }
}

var toggleSenhaButton = document.getElementById("toggleSenha");
var estudanteCheckbox = document.getElementById("checkbox");
var senhaInput = document.getElementById("passwordInput");

toggleSenhaButton.addEventListener("click", OcultarSenha);
estudanteCheckbox.addEventListener("change", toggleEstudante);
senhaInput.addEventListener("input", SenhaInvalida);
