const parameters = new URLSearchParams(window.location.search);
const id = parameters.get("id");

async function laadProduct() {
    const response = await fetch(`/api/producten/${id}`);

    const product = await response.json();

    document.querySelector("#naam").textContent = product.naam;
    document.querySelector("#prijs").textContent = `€ ${Number(product.prijs).toFixed(2)}`;
}

laadProduct();
