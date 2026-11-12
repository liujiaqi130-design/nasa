const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  navToggle.setAttribute('aria-label', open ? 'Open chapter menu' : 'Close chapter menu');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open chapter menu');
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

const progress = document.querySelector('#progress-bar');
const narratorChip = document.querySelector('.narrator-chip');
const narratorLine = document.querySelector('#narrator-line');
const chapters = [...document.querySelectorAll('[data-narrator]')];
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
    const current = chapters.filter(section => section.getBoundingClientRect().top < window.innerHeight * .55).pop();
    if (current && narratorLine.textContent !== current.dataset.narrator) {
      narratorLine.textContent = current.dataset.narrator;
      narratorChip.classList.add('visible');
    }
    if (window.scrollY < window.innerHeight * .7) narratorChip.classList.remove('visible');
    scrollTicking = false;
  });
}, { passive: true });

document.querySelectorAll('.fact-toggle').forEach(button => button.addEventListener('click', () => {
  const detail = button.nextElementSibling;
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  detail.hidden = open;
  button.innerHTML = open ? 'SHOW FACT NOTE <span>ï¼‹</span>' : 'HIDE FACT NOTE <span>âˆ’</span>';
}));

const instrumentDetails = {
  pancam: ['PANCAM / PANORAMIC CAMERA', 'Took detailed images in multiple colors and helped the team study the landscape from a distance.'],
  mini: ['MINI-TES / HEAT-SENSING SPECTROMETER', 'Measured infrared light to help identify minerals in rocks and soil.'],
  rat: ['RAT / ROCK ABRASION TOOL', 'Brushed and ground a small patch of rock so instruments could examine a fresher surface.']
};
document.querySelectorAll('.instrument-pin').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.instrument-pin').forEach(pin => pin.classList.remove('active'));
  button.classList.add('active');
  const [name, description] = instrumentDetails[button.dataset.tool];
  document.querySelector('#tool-name').textContent = name;
  document.querySelector('#tool-description').textContent = description;
}));

const introVideo = document.querySelector('.intro-video video');
introVideo.addEventListener('error', () => {
  const message = document.createElement('p');
  message.className = 'video-error';
  message.innerHTML = window.location.protocol === 'file:'
    ? 'This browser canâ€™t play the supplied MOV file inline. <a href="assets/project-intro.MOV" download>Download the project intro</a> or convert it to MP4 for easier browser playback.'
    : 'The supplied MOV is kept in the local project but is not part of this hosted copy. Add a compressed MP4 to the assets folder and update the video source to publish it.';
  introVideo.insertAdjacentElement('afterend', message);
}, { once: true });

