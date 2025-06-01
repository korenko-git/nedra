# 💧 Nedra — Multilingual Landing Page for Well Drilling

**Nedra** is a static, multilingual landing page for a well drilling company.
It supports three languages: **English (default)**, **Ukrainian**, and **Russian**, and is designed to be fast, responsive, and easy to maintain.

## 🧰 Tech Stack

* ⚙️ HTML5, SCSS, JavaScript (ES6)
* 🎨 [**Bootstrap 4**](https://getbootstrap.com/) — responsive layout and components
* 💡 [**jQuery 3.5**](https://jquery.com/) — used for legacy plugin support
* 🖼 [**Owl Carousel 2**](https://owlcarousel2.github.io/OwlCarousel2/) — carousel/slider functionality
* 🌀 [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/) — scroll animations
* 🔧 [**Gulp**](https://gulpjs.com/) — project build system
* 🚀 [**GitHub Actions**](https://github.com/features/actions) — automated deployment to GitHub Pages
* ✉️ [**Formspree**](https://formspree.io/) — simple form submission handling

## 🛠️ Installation & Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/nedra.git
cd nedra
npm install
```

Run in development mode (with live reload):

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── js/                 # JavaScript source files
├── img/                # Images
├── style/              # SCSS styles
├── locales/            # Translation files
│   ├── en.json         # English (default)
│   ├── uk.json         # Ukrainian
│   └── ru.json         # Russian
├── template/           # HTML templates
│   ├── components/     # Reusable UI components
│   └── sections/       # Page sections
```

## 🌐 Multilingual Output

After building, the site generates:

* `index.html` — English version (default)
* `index-uk.html` — Ukrainian version
* `index-кг.html` — Russian version

Language switching logic should be handled manually or via your routing strategy (e.g., links or JS).

## 📤 Deployment

Automatic deployment is set up via **GitHub Actions**.
On each push to the `master` branch, the `./dest` folder is deployed to GitHub Pages

## 📝 Forms

Forms are handled using **Formspree**.
To activate, replace the action URL inside `src/template/components/form.html`:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
