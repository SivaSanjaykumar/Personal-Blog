const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const ARTICLES_DIR = path.join(__dirname, "articles");

if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR);
}

// Helper function
function getArticles() {
    const files = fs.readdirSync(ARTICLES_DIR);

    const articles = files.map(file => {
        const data = JSON.parse(
            fs.readFileSync(path.join(ARTICLES_DIR, file))
        );

        return {
            ...data,
            filename: file.replace(".json", "")
        };
    });

    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Home Page
app.get("/", (req, res) => {
    const articles = getArticles();
    res.render("index", { title: "My Personal Blog", articles });
});

// Article Page
// Article Page
app.get("/article/:filename", (req, res) => {

    const filepath = path.join(
        ARTICLES_DIR,
        req.params.filename + ".json"
    );

    if (!fs.existsSync(filepath)) {
        return res.send("Article not found");
    }

    const article = JSON.parse(fs.readFileSync(filepath));

    res.render("article", {
        title: article.title,
        article
    });

});
// Update Article
app.post("/admin/edit/:filename", (req, res) => {

    const { title, content, date } = req.body;

    const filepath = path.join(
        ARTICLES_DIR,
        req.params.filename + ".json"
    );

    const updatedArticle = { title, content, date };

    fs.writeFileSync(
        filepath,
        JSON.stringify(updatedArticle, null, 2)
    );

    res.redirect("/admin/dashboard");
});

// Admin Dashboard
app.get("/admin/dashboard", (req, res) => {
    const articles = getArticles();
    res.render("admin/dashboard", {
        title: "Admin Dashboard",
        articles
    });
});

// Add Article Page
app.get("/admin/add", (req, res) => {
    res.render("admin/add", { title: "Add Article" });
});

// Save Article
app.post("/admin/add", (req, res) => {

    const { title, content, date } = req.body;

    const safeTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-");

    const filename = `${safeTitle}-${Date.now()}.json`;

    const article = { title, content, date };

    fs.writeFileSync(
        path.join(ARTICLES_DIR, filename),
        JSON.stringify(article, null, 2)
    );

    res.redirect("/admin/dashboard");
});

// Edit Article Page
app.get("/admin/edit/:filename", (req, res) => {

    const filepath = path.join(
        ARTICLES_DIR,
        req.params.filename + ".json"
    );

    if (!fs.existsSync(filepath)) {
        return res.send("Article not found");
    }

    const article = JSON.parse(fs.readFileSync(filepath));

    res.render("admin/edit", {
        title: "Edit Article",
        article,
        filename: req.params.filename
    });
});
// Delete Article
app.post("/admin/delete/:filename", (req, res) => {

    const filepath = path.join(
        ARTICLES_DIR,
        req.params.filename + ".json"
    );

    if (!fs.existsSync(filepath)) {
        return res.send("Article not found");
    }

    fs.unlinkSync(filepath);

    res.redirect("/admin/dashboard");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});