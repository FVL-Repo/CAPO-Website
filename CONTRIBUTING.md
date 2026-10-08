# Contributing

The website is maintained by [zgj77](https://github.com/zgj77). Open an issue for corrections or a pull request for proposed changes.

## Making a change

1. Create a branch from `main`.
2. Edit `index.html`, `assets/style.css`, or `assets/main.js` as needed.
3. Preview with `python3 -m http.server 8765`.
4. Check desktop and mobile layouts, links, figure loading, video playback, and BibTeX copying.
5. Submit a pull request describing the change and how it was checked.

Keep research claims consistent with the paper. Preserve author order, attribution, and licenses.
Use relative URLs for local assets. Add browser-ready media only; do not commit original camera recordings,
credentials, access tokens, local environments, or generated preview screenshots.

## Publishing

GitHub Pages deploys the repository root on `main`. Maintainers should check the Pages deployment after merging.

When the paper is released, update the Paper button and replace the placeholder
BibTeX entry in `index.html`. Keep the Open Graph and citation metadata consistent with the public URLs.
