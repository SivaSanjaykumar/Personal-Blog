# Personal Blog

A simple **Personal Blog application** built using **Node.js, Express.js, and EJS**.
This project allows users to write, publish, edit, and delete blog articles using a simple admin dashboard.

This project was built as part of the **roadmap.sh backend projects**.

Project Requirement:
https://roadmap.sh/projects/personal-blog

---

## 🚀 Features

### Guest Section

These pages are accessible to anyone.

* View all blog posts on the **Home Page**
* Read full blog posts on the **Article Page**

### Admin Section

These pages allow the admin to manage blog posts.

* Admin **Dashboard** to view all articles
* **Add new article**
* **Edit existing article**
* **Delete article**

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **EJS (Embedded JavaScript Templates)**
* **CSS**
* **File System (JSON files for storage)**

---

## 📂 Project Structure

```
Personal-Blog
│
├── app.js
├── package.json
├── README.md
│
├── articles
│   └── *.json
│
├── public
│   └── style.css
│
└── views
    │
    ├── index.ejs
    ├── article.ejs
    │
    └── admin
        ├── add.ejs
        ├── edit.ejs
        └── dashboard.ejs
```

---

## ⚙️ Installation & Setup

Clone the repository

```
git clone https://github.com/SivaSanjaykumar/Personal-Blog.git
```

Navigate to project folder

```
cd Personal-Blog
```

Install dependencies

```
npm install
```

Run the application

```
node app.js
```

Server will start at:

```
http://localhost:4000
```

---

## 📸 Pages

### Home Page

Displays all published articles.

### Article Page

Shows the full blog post content with publication date.

### Admin Dashboard

Allows managing blog posts.

### Add Article

Form to publish new blog articles.

### Edit Article

Update an existing blog post.

---

## 📦 Data Storage

Blog posts are stored as **JSON files** in the `articles` folder.

Example:

```
articles/
   my-first-blog-1710000000.json
```

Each article contains:

```
{
  "title": "My First Blog",
  "content": "Blog content...",
  "date": "2026-03-05"
}
```

---

## 📚 What I Learned

Through this project I practiced:

* Express routing
* Server-side rendering with EJS
* Form handling
* CRUD operations
* File system operations
* Building a simple admin dashboard

---

## 🔮 Possible Improvements

* Add authentication for admin access
* Add search functionality
* Add categories or tags
* Use a database (MongoDB / PostgreSQL)
* Improve UI with modern styling

---

## 📜 License

This project is open source and available under the **MIT License**.
