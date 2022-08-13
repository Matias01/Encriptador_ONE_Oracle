function encriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    if (validarTexto(texto) && texto!="") {
        let encriptado = texto.replaceAll("e", "enter")
                                .replaceAll("i", "imes")
                                .replaceAll("o", "ober")
                                .replaceAll("a", "ai")
                                .replaceAll("u", "ufat");
        document.getElementById("copy").style = "display: inline;";
        document.querySelector("#text1").innerHTML = encriptado;
        document.getElementById("imagen").style = "display: none"
        document.getElementById("text2").style = "display: none"
        document.getElementById("text1").style = "margin-top: 50px"
    }
}

function desencriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    if (validarTexto(texto) && texto!="") {
    let desencriptado = texto.replaceAll("enter", "e")
                                .replaceAll("imes", "i")
                                .replaceAll("ober", "o")
                                .replaceAll("ai", "a")
                                .replaceAll("ufat", "u");
    document.getElementById("copy").style = "display: inline;";
    document.getElementById("text2").style = "display: none"
    document.getElementById("imagen").style = "display: none"
    document.querySelector("#text1").innerHTML = desencriptado;
    }
}

function copiar() {
    let texto = document.querySelector("#text1").textContent;
    navigator.clipboard.writeText(texto);
}

function validarTexto(texto) {
    var valor = /([^a-z\ñ\s])/;
    if (valor.test(texto) === false) {
        return true;
    } else {
        return false;
    }
}

