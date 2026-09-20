const express = require("express");
const { DatabaseSync } = require("node:sqlite");

const app = express();
const port = 3000;

const db = new DatabaseSync("./data/webshop.db");

app.use(express.json());
app.use(express.static("public"));

// Alle producten tonen of zoeken op naam.
app.get("/api/producten", (req, res) => {
    const zoekterm = req.query.zoekterm;

    try {
        const sql = zoekterm
            ? `SELECT id, naam, prijs, beschrijving, beschikbaar, categorie_id
               FROM producten
               WHERE naam LIKE ?
               ORDER BY naam;`
            : `SELECT id, naam, prijs, beschrijving, beschikbaar, categorie_id
               FROM producten
               ORDER BY naam;`;

        const statement = db.prepare(sql);

        const producten = zoekterm
            ? statement.all(`%${zoekterm}%`)
            : statement.all();

        res.json(producten);
    } catch (fout) {
        console.error(fout);
        res.status(500).json({ bericht: "Databasefout" });
    }
});

// Eén product tonen.
app.get("/api/producten/:id", (req, res) => {
    const id = req.params.id;

    try {
        const sql = `
            SELECT id, naam, prijs, beschrijving, beschikbaar, categorie_id
            FROM producten
            WHERE id = ?;
        `;

        const product = db.prepare(sql).get(id);

        if (!product) {
            return res.status(404).json({ bericht: "Product niet gevonden" });
        }

        res.json(product);
    } catch (fout) {
        console.error(fout);
        res.status(500).json({ bericht: "Databasefout" });
    }
});

// LES 5: schrijf hier zelf de POST-route voor /api/producten.
// LES 6: schrijf hier zelf de GET-route voor /api/categorieen en breid
//        de productroute uit met filteren op categorie.

app.listen(port, () => {
    console.log(`Server draait op poort ${port}`);
});