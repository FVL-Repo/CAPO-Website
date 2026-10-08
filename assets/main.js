'use strict';
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.video-hero');
const backgrounds = Array.from(document.querySelectorAll('.hero-tile'));
const heroToggle = document.getElementById('hero-toggle');
let backgroundRequested = !reducedMotion.matches;
let heroVisible = true;
function syncBackgrounds() {
  const shouldPlay = backgroundRequested && heroVisible && !document.hidden;
  backgrounds.forEach(video => {
    if (shouldPlay) {
      if (!video.getAttribute('src')) {video.src = video.dataset.src; video.load();}
      video.play().catch(() => {});
    } else video.pause();
  });
  heroToggle.textContent = backgroundRequested ? 'Pause videos' : 'Play videos';
  heroToggle.setAttribute('aria-label', `${backgroundRequested ? 'Pause' : 'Play'} background videos`);
}
heroToggle.addEventListener('click', () => {backgroundRequested = !backgroundRequested; syncBackgrounds();});
reducedMotion.addEventListener('change', event => {backgroundRequested = !event.matches; syncBackgrounds();});
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {heroVisible = entries[0].isIntersecting; syncBackgrounds();}, {threshold: .05}).observe(hero);
  const demoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {if (!entry.isIntersecting) entry.target.pause();});
  }, {threshold: .05});
  document.querySelectorAll('.demo-video').forEach(video => demoObserver.observe(video));
} else syncBackgrounds();
document.addEventListener('visibilitychange', () => {
  syncBackgrounds();
  if (document.hidden) document.querySelectorAll('.demo-video').forEach(video => video.pause());
});
const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex').textContent;
  const status = document.getElementById('copy-status');
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(citation);
    else {
      const textarea = document.createElement('textarea');
      textarea.value = citation; textarea.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(textarea); textarea.select();
      const success = document.execCommand('copy'); textarea.remove();
      if (!success) throw new Error('Copy unavailable');
    }
    status.textContent = 'BibTeX copied to clipboard.';
    copyButton.textContent = 'Copied!';
    setTimeout(() => {copyButton.textContent = 'Copy';}, 2400);
  } catch {status.textContent = 'Select the citation and copy it with Ctrl+C or ⌘C.';}
});
