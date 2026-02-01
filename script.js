document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }
});

// FUNÇÃO DO TEMA (Fica sozinha)
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeBtn");

    body.classList.toggle("dark");

    if (!btn) return;

    if (body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}

// FUNÇÃO DE COPIAR (Fica fora, para o HTML encontrar)
function copiarEndereco(event) {
    if (event) event.preventDefault();

    const texto = "São Mateus - Zona Leste - SP";

    navigator.clipboard.writeText(texto).then(() => {
        // Criar o aviso
        const aviso = document.createElement("div");
        aviso.innerText = "Endereço copiado!";

        Object.assign(aviso.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#222",
            color: "white",
            padding: "20px 40px",
            borderRadius: "10px",
            zIndex: "10000",
            fontFamily: "sans-serif",
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            textAlign: "center"
        });

        document.body.appendChild(aviso);

        setTimeout(() => {
            aviso.remove();
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}


function copiarTelefone(event) {
    if (event) event.preventDefault();

    const texto = "11971582528";

    navigator.clipboard.writeText(texto).then(() => {
        // Criar o aviso
        const aviso = document.createElement("div");
        aviso.innerText = "Número copiado!";

        Object.assign(aviso.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#222",
            color: "white",
            padding: "20px 40px",
            borderRadius: "10px",
            zIndex: "10000",
            fontFamily: "sans-serif",
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            textAlign: "center"
        });

        document.body.appendChild(aviso);

        setTimeout(() => {
            aviso.remove();
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}


function copiarEmail(event) {
    if (event) event.preventDefault();

    const texto = "marcell3764@gmail.com";

    navigator.clipboard.writeText(texto).then(() => {
        // Criar o aviso
        const aviso = document.createElement("div");
        aviso.innerText = "E-mail copiado!";

        Object.assign(aviso.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#222",
            color: "white",
            padding: "20px 40px",
            borderRadius: "10px",
            zIndex: "10000",
            fontFamily: "sans-serif",
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            textAlign: "center"
        });

        document.body.appendChild(aviso);

        setTimeout(() => {
            aviso.remove();
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}