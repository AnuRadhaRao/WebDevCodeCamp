# WebDevCodeCamp

Two small front-end exercises I built in 2020 while working through a web
development bootcamp. Both are plain HTML, CSS and JavaScript with no build
step.

Live demo: <https://anuradharao.github.io/WebDevCodeCamp/>

| Project | What it does | Stack |
| --- | --- | --- |
| [ColorGame](ColorGame/) | Shows an RGB value; pick the matching square. Easy mode uses 3 squares, hard mode 6. | HTML, CSS, vanilla JS (DOM events) |
| [TodoList](TodoList/) | Add a to-do with Enter, click to strike it through, hover and click the trash icon to delete it. | HTML, CSS, jQuery 3.5.1 (vendored), Font Awesome and Google Fonts from CDNs |

## Run locally

Open either `index.html` in a browser, or serve the repo so relative paths
behave like a real site:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/ColorGame/ or http://localhost:8000/TodoList/
```

The to-do list keeps items in the page only, so they reset on reload.

## Checks and deployment

Every pull request and every push to `master` runs [CI](.github/workflows/ci.yml):

- **Lint:** ESLint for the JavaScript (the vendored jQuery is skipped),
  Stylelint for the CSS, and HTMLHint for the HTML.
- **Smoke tests:** Playwright opens both apps in headless Chromium and plays
  them: winning and losing the Color Game, switching to easy mode, and adding,
  completing and deleting to-dos.
- **Deploy:** on `master`, once lint and tests pass, the two apps and a small
  landing page are published to GitHub Pages.

To run the same checks locally (needs Node 22 and Python 3):

```sh
npm ci
npx playwright install chromium
npm run lint
npm test
```
