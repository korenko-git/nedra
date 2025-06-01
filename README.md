# Nedra - Multilingual Landing Page for Well Drilling

## Description
A static multilingual website for a well drilling company. Supports Russian, English, and Ukrainian languages.

## Technologies
- HTML5, SCSS, JavaScript
- Gulp for building
- GitHub Actions for automatic deployment
- Formspree for form processing
- Bootstrap 4

## Installation and Launch

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

## Project Structure

```
src/
├── locales/          # JSON files with translations
│   ├── ru.json       # Russian
│   ├── en.json       # English
│   └── uk.json       # Ukrainian
├── template/         # HTML templates
│   ├── components/   # Components
│   └── sections/     # Page sections
├── style/           # SCSS styles
├── js/              # JavaScript
└── img/             # Images
```

## Multilingual Support
The site automatically generates versions for each language:
- `index.html` - Russian version (default)
- `index-en.html` - English version
- `index-uk.html` - Ukrainian version

## Deployment
Automatic deployment to GitHub Pages on push to the `main` branch.

## Forms
Formspree is used for form processing. Configure your endpoint in the `src/template/components/form.html` file.

## License
ISC
