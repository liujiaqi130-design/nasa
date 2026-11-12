const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#chapter-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open chapter navigation' : 'Close chapter navigation');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open chapter navigation');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

const instruments = {
  mast: ['MASTCAM / EYES ON MARS', 'Two cameras capture color, detail, and layered panoramas of the terrain.'],
  chem: ['CHEMCAM / LASER SPECTROMETER', 'A laser studies the composition of rocks from a distance.'],
  drill: ['DRILL / SAMPLE COLLECTION', 'The drill collects powdered rock for onboard laboratory analysis.']
};
const panel = document.querySelector('.hotspot-panel');
document.querySelectorAll('.hotspot').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.hotspot').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const [heading, description] = instruments[button.dataset.hotspot];
  panel.innerHTML = `<span class="panel-kicker">${heading}</span><p>${description}</p>`;
}));

const sequenceButton = document.querySelector('#start-sequence');
const sequenceVisual = document.querySelector('#sequence-visual');
const sequenceClock = document.querySelector('#seq-clock');
const sequenceStatus = document.querySelector('#seq-status');
const phases = [
  { at: 0, label: 'ENTRY Â· ATMOSPHERIC BRAKING' },
  { at: 3, label: 'DESCENT Â· CONTROLLED APPROACH' },
  { at: 5, label: 'TOUCHDOWN Â· SIGNAL HOME' }
];
let sequenceTimer;
sequenceButton.addEventListener('click', () => {
  clearInterval(sequenceTimer);
  sequenceVisual.classList.remove('running');
  void sequenceVisual.offsetWidth;
  sequenceVisual.classList.add('running');
  sequenceButton.disabled = true;
  sequenceButton.innerHTML = 'SEQUENCE RUNNING <span>Â·Â·Â·</span>';
  let elapsed = 0;
  sequenceStatus.textContent = phases[0].label;
  sequenceClock.textContent = 'Tâˆ’ 07:00';
  sequenceTimer = setInterval(() => {
    elapsed += 1;
    const remaining = Math.max(0, 7 - elapsed);
    sequenceClock.textContent = remaining === 0 ? 'T+ 00:00' : `Tâˆ’ 00:0${remaining}`;
    const phase = [...phases].reverse().find(item => elapsed >= item.at);
    if (phase) sequenceStatus.textContent = phase.label;
    if (elapsed >= 7) {
      clearInterval(sequenceTimer);
      sequenceStatus.textContent = 'ILLUSTRATION COMPLETE Â· SIGNAL RECEIVED';
      sequenceButton.disabled = false;
      sequenceButton.innerHTML = 'RUN AGAIN <span>â†»</span>';
      sequenceVisual.classList.remove('running');
    }
  }, 1000);
});

