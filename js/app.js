

let changeThemeButtons = document.querySelectorAll('.change-svg'); // Помещаем кнопки смены темы в переменную

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { // К каждой добавляем обработчик событий на клик
        let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
        applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`); // Помещаем путь к файлу темы в пустой link в head
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; // Показываем все кнопки смены темы
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
}

const scrollToTopBut = document.getElementById('scrollToTop');

const handleScroll = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollToTopBut.style.display = 'block';
  } 
  else {
    scrollToTopBut.style.display = 'none';
  }
};

const scrollToTop = () => {
  const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.scrollTo(0, 0);
  }
};
document.addEventListener('scroll', handleScroll);
scrollToTopBut.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToTop();
});




const body = document.getElementById('body');
const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.page-header-nav');
const siteNav = document.querySelector('.site-navigation');
const downloadButton = document.querySelector('.btn--download');
function toggleMobileNav() {
    burgerButton.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  }
  
  function closeNav() {
    body.classList.remove('lock');
    burgerButton.classList.remove('active');
    menu.classList.remove('active');
  }
  function animateDownloadButton() {
    downloadIcon.classList.add('animate-download');
  
    setTimeout(function() {
      downloadIcon.classList.remove('animate-download');
    }, 1000);
  }
  
  burgerButton.addEventListener('click', toggleMobileNav);
  siteNav.addEventListener('click', closeNav);



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      document.querySelectorAll('.site-navigation__link').forEach((link)=> {
        link.classList.toggle(
          'site-navigation__link--active',
          link.getAttribute('href').replace('#', '') === entry.target.id
        );
      });
    }
  });
}, {
  threshold: 0.4,
});

  document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section)
  );

  document.querySelector('.header__nav').addEventListener( 'click',(event) =>{
    if(event.target.classList.contains('site-navigation__link')) {
      event.preventDefault();
      const id = event.target.getAttribute('href').replace('#', '');
      const gotoBlock = document.getElementById(id).offsetTop - document.querySelector('header').offsetHeight; 
      window.scrollTo({
        top: gotoBlock,
        behavior:'smooth',
      });
    }
  });