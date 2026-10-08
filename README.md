# CAPO

**Real-World Reinforcement Learning for VLA via Corrective Adjoint Policy Optimization**

[Project website](https://fvl-repo.github.io/CAPO-Website/)

This repository hosts the CAPO research project website. It is owned by
[FVL-Repo](https://github.com/FVL-Repo) and maintained by [zgj77](https://github.com/zgj77).
It contains the project page and its media assets. The research implementation is available in [FVL-Repo/CAPO](https://github.com/FVL-Repo/CAPO).

## Local preview

No package installation or build step is required. From the repository root, run:

```bash
python3 -m http.server 8765
```

Open http://localhost:8765/ in a browser.

## Repository structure

```text
index.html                 Paper information and project content
assets/
  style.css                Layout and responsive styles
  fonts.css                Local font declarations
  main.js                  Video controls and citation copying
  favicon.svg              Site icon
  fonts/                   Fonts and their licenses
  images/                  Web figures and social preview image
  pdf/                     Paper and full-resolution figures
  posters/                 Video preview images
  videos/                  Browser-ready demonstration videos
.github/CODEOWNERS          Default reviewer: @zgj77
CONTRIBUTING.md             Contribution and maintenance instructions
LICENSE.md                 Website license and attribution
```

The videos use H.264 MP4 with browser streaming metadata. Original camera recordings,
unused assets, local screenshots, and reference-site snapshots are excluded.

## Deployment

GitHub Pages publishes the root directory of `main` at:
https://fvl-repo.github.io/CAPO-Website/

Changes merged or pushed to `main` trigger publication. Keep `.nojekyll` to serve the files as a static site.
The site uses relative asset URLs and local fonts, with no runtime CDN dependencies.

## Publication status

The Code button links to [FVL-Repo/CAPO](https://github.com/FVL-Repo/CAPO). The Paper button remains unlinked pending the arXiv release.
The Citation section contains the CAPO BibTeX entry. Its arXiv identifier is left blank until the arXiv entry is available.

## Contributing and license

See [CONTRIBUTING.md](CONTRIBUTING.md) for the update workflow and
[LICENSE.md](LICENSE.md) for licensing and attribution.
