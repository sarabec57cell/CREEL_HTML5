function mostrarSeccion(id) {

    document.querySelectorAll("main section").forEach(sec => {
        sec.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const id = this.getAttribute("href").substring(1);
        mostrarSeccion(id);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    mostrarSeccion("inicio");
});

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("mensaje").innerText =
        "✔ Mensaje enviado correctamente";

    this.reset();

    setTimeout(() => {
        document.getElementById("mensaje").innerText = "";
    }, 3000);
});
