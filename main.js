/* ── Mobile navigation ── */
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.classList.toggle('is-open', open);
  });

  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
})();

/* ── Filter chips (Events, Articles) ── */
document.querySelectorAll('.filters').forEach(bar => {
  bar.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      bar.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
    });
  });
});

/* ── Contact reason selector ── */
document.querySelectorAll('.reason').forEach(group => {
  group.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
    });
  });
});
