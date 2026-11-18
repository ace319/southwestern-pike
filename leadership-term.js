(() => {
  const hero = document.querySelector('[data-leadership-effective-date]');
  if (!hero) return;

  const startsAt = Date.parse(hero.dataset.leadershipEffectiveDate);
  if (!Number.isFinite(startsAt) || Date.now() < startsAt) return;

  hero.querySelector('h1').textContent = 'Chapter Leadership';
  hero.querySelector('[data-leadership-intro]').textContent =
    'Our officers guide chapter operations, member development, academics, service, and the Alpha Omicron experience. The newly elected officers began their terms on November 30, 2026.';
  document.title = 'Leadership — Southwestern PIKE';
})();
