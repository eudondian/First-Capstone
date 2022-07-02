const speakers = [
  {
    id: '0',
    image: './images/male-one.jpg',
    name: ' Lorem ipsum dolor sit amet',
    job: 'para text-center other-color',
    description: ' Veritatis consequuntur asperiores harum. Fuga, ad libero.',
  },
  {
    id: '1',
    image: './images/male-two.jpg',
    name: ' Lorem ipsum dolor sit amet',
    job: 'para text-center other-color',
    description: ' Veritatis consequuntur asperiores harum. Fuga, ad libero.',
  },
  {
    id: '2',
    image: './images/female-one.jpg',
    name: ' Lorem ipsum dolor sit amet',
    job: 'para text-center other-color',
    description: ' Veritatis consequuntur asperiores harum. Fuga, ad libero.',
  },
  {
    id: '3',
    image: './images/female-two.jpg',
    name: ' Lorem ipsum dolor sit amet',
    job: 'para text-center other-color',
    description: ' Veritatis consequuntur asperiores harum. Fuga, ad libero.',
  },
  {
    id: '4',
    image: './images/male-three.jpg',
    name: ' Lorem ipsum dolor sit amet',
    job: 'para text-center other-color',
    description: ' Veritatis consequuntur asperiores harum. Fuga, ad libero.',
  },
  {
    id: '5',
    image: './images/female-three.jpg',
    name: ' Lorem ipsum dolor sit amet',
    job: 'para text-center other-color',
    description: ' Veritatis consequuntur asperiores harum. Fuga, ad libero.',
  },
];

const createSpeaker = () => {
  const addSpeaker = document.querySelector('#speakers');
  speakers.forEach((speaker) => {
    addSpeaker.insertAdjacentHTML(
      'beforeend',
      `
        <li id="0" class="item">
            <div class="speaker-img-div"><img class="speaker-img" src="${speaker.image}" alt=""></div>
            <div class="speaker-details">
              <p class="name">${speaker.name}</p>
              <p class="work">${speaker.job}</p>
              <div class="div-item"></div>
              <p class="work-description">${speaker.description}</p>
            </div>
          </li>
      `
    );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createSpeaker();
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.navigate').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  })
);

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  hamburger.classList.remove('active');
});
