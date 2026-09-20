const productenLijst = document.querySelector("#producten");
const formulier = document.querySelector("#zoekformulier");
const melding = document.querySelector("#melding");

async function laadProducten(zoekterm = "") {
    const pad = zoekterm
        ? `/api/producten?zoekterm=${encodeURIComponent(zoekterm)}`
        : "/api/producten";

    const response = await fetch(pad);
    const producten = await response.json();

    productenLijst.innerHTML = "";
    melding.hidden = producten.length !== 0;
    melding.textContent = producten.length === 0 ? "Geen producten gevonden." : "";

    for (const product of producten) {
        const kaart = document.createElement("article");
        kaart.classList.add("product");

        const titel = document.createElement("h2");
        titel.textContent = product.naam;

        const prijs = document.createElement("p");
        prijs.textContent = `€ ${Number(product.prijs).toFixed(2)}`;

        const link = document.createElement("a");
        link.href = `product.html?id=${product.id}`;
        link.textContent = "Bekijk product";

        kaart.appendChild(titel);
        kaart.appendChild(prijs);
        kaart.appendChild(link);
        productenLijst.appendChild(kaart);
    }
}

formulier.addEventListener("submit", (event) => {
    event.preventDefault();

    const zoekterm = document.querySelector("#zoekterm").value;
    laadProducten(zoekterm);
});

laadProducten();
