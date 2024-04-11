function contadorVisitasPagina() {
    let visitas = 0;
    let ultimaVisita = "";

    const dadosVisitas = localStorage.getItem("dadosVisitas");

    if (dadosVisitas) {
        const { counter, lastVisit } = JSON.parse(dadosVisitas);
        visitas = counter;
        ultimaVisita = lastVisit;
    }

    visitas++;
    
    const dataAtual = new Date();
    ultimaVisita = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(dataAtual);

    localStorage.setItem("dadosVisitas", JSON.stringify({ counter: visitas, lastVisit: ultimaVisita }));

    return { visitas, ultimaVisita };
}

function inserirContadorVisitas() {
    const { visitas, ultimaVisita } = contadorVisitasPagina();
    const rodapePagina = document.getElementById("footer-rodape");
    const textoContador = `Esta página foi visitada ${visitas} vezes. A última visita foi: ${ultimaVisita}`;
    const elementoContador = document.createElement("p");

    elementoContador.textContent = textoContador;

    if (rodapePagina) {
        rodapePagina.appendChild(elementoContador);
    } else {
        console.error("Elemento 'footer-rodape' não encontrado.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    inserirContadorVisitas();
});
