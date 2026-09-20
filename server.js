const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;
const db = new sqlite3.Database("./data/webshop.db");

app.use(express.json());
app.use(express.static("public"));

// Alle producten tonen of zoeken op naam.
app.get("/api/producten", (req, res) => {
    const zoekterm = req.query.zoekterm;

    const sql = zoekterm
        ? `SELECT id, naam, prijs, beschrijving, beschikbaar, categorie_id
           FROM producten
           WHERE naam LIKE ?
           ORDER BY naam;`
        : `SELECT id, naam, prijs, beschrijving, beschikbaar, categorie_id
           FROM producten
           ORDER BY naam;`;

    const waarden = zoekterm ? [`%${zoekterm}%`] : [];

    db.all(sql, waarden, (fout, producten) => {
        if (fout) {
            return res.status(500).json({ bericht: "Databasefout" });
        }

        res.json(producten);
    });
});

// Eén product tonen.
app.get("/api/producten/:id", (req, res) => {
    const id = req.params.id;

    const sql = `
        SELECT id, naam, prijs, beschrijving, beschikbaar, categorie_id
        FROM producten
        WHERE id = ?;
    `;

    db.get(sql, [id], (fout, product) => {
        if (fout) {
            return res.status(500).json({ bericht: "Databasefout" });
        }

        if (!product) {
            return res.status(404).json({ bericht: "Product niet gevonden" });
        }

        res.json(product);
    });
});

// LES 5: schrijf hier zelf de POST-route voor /api/producten.
// LES 6: schrijf hier zelf de GET-route voor /api/categorieen en breid
//        de productroute uit met filteren op categorie.

app.listen(port, () => {
    console.log(`Server draait op poort ${port}`);
});
