# 🌍 Rest Countries API with Theme Switcher

A sleek and responsive country explorer built with **React + Vite**, featuring region filtering, dark mode toggle, live search, and clickable border country navigation.

[🔗 Live Site](https://parthadey5.github.io/rest-countries-api-with-color-theme-switcher-master)  
[📁 GitHub Repo](https://github.com/ParthaDey5/rest-countries-api-with-color-theme-switcher-master)

---

## 📌 Features

- 🔍 **Search** countries by name
- 🌐 **Filter** countries by region
- 🌓 **Dark/Light mode** toggle
- 🧭 **Navigate** to border countries via linkable chips
- 📱 **Responsive layout** across all screen sizes
- 🚀 **Deployed via GitHub Pages** using Vite’s `gh-pages` setup

---

## ⚙️ Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [REST Countries API data](https://restcountries.com/)
- Context API for theme management

---

## 🗂️ Project Structure

```bash
├── public/
│   └── data.json           # Country data (provided by Frontend Mentor)
├── src/
│   ├── components/         # UI components
│   ├── ThemeContext.jsx    # Dark mode context
│   ├── App.jsx             # Homepage with search & filter
│   ├── CountryDetails.jsx  # Details page for each country
│   └── main.jsx            # Entry point
├── vite.config.js          # Vite setup with base URL
└── package.json            # Scripts and deployment config
