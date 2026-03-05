# 📚 ShelfSpark

### Search books fast, preview them, and build a saved reading shelf that actually feels nice to use.

ShelfSpark is a full-stack Google Books app built with React, Express, and MongoDB. It lets you search the Google Books API, preview titles, and save your favorite finds into a personal shelf you can manage later.

---

## ✨ Features

| | Feature | What It Does |
|---|---|---|
| 🔎 | Smart book search | Search Google Books by title, topic, or author from a clean UI |
| 🧾 | Rich result cards | Shows title, subtitle, authors, cover, description, and preview link |
| 💾 | Save to shelf | Save books to MongoDB with one click |
| 🗑️ | Shelf management | Remove books from your saved collection anytime |
| ✅ | Feedback alerts | Clear success/error messages for save/delete/search actions |
| 🎨 | Polished UI | Responsive layout, carousel hero, and light/dark theme toggle |

---

<p align="center">
  <img
    src="./client/public/images/google-books.webp"
    alt="ShelfSpark Google Books search and saved shelf interface"
    width="520"
    style="border-radius: 12px; box-shadow: 0 10px 28px rgba(16, 24, 40, 0.18); object-position: top;"
  />
</p>

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
![Google%20Books%20API](https://img.shields.io/badge/Google%20Books%20API-4285F4?style=flat-square&logo=google&logoColor=white)

---

## 🧩 Project Snapshot

- MERN-style app with an Express API + React client (`client/`) and MongoDB persistence for saved books
- API routes include Google Books proxy search (`/api/Google_API/:query`) and saved books CRUD (`/api/books`)
- Backend uses `dotenv` for secrets and supports local MongoDB or hosted MongoDB via `MONGODB_URI`
- Frontend includes Search and Saved Shelf flows, reusable result cards, and a responsive themed UI
- Includes a seed script (`npm run seed`) for sample books if you want local starter data

---

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Shelf_Spark-22c55e?style=for-the-badge)](https://shelfspark.onrender.com/)

[![Visit Portfolio](https://img.shields.io/badge/Visit%20My%20Portfolio-jorgeguzman.dev-22c55e?style=for-the-badge)](https://portfolio.jorgeguzman.dev/)


---

## 💻 Run it locally

```bash
git clone https://github.com/jorguzman100/google-books.git
cd google-books
npm install
cp .env_example .env
npm start
```

Optional seed data (requires MongoDB running):

```bash
npm run seed
```

Local URLs:

- Frontend: `http://localhost:3000`
- API: `http://localhost:3001`

<details>
<summary>🔑 Required environment variables</summary>

```env
# .env (backend)
MONGODB_LOCAL=mongodb://127.0.0.1:27017/reactGoogleBooks
# Optional if using Atlas/hosted MongoDB:
MONGODB_URI=
GOOGLE_BOOKS_API_KEY=
PORT=3001
```

No `client/.env` file is required right now.
</details>

---

## 🤝 Contributors

- **Jorge Guzman**  ·  [@jorguzman100](https://github.com/jorguzman100)

---
