const mainForm = document.forms.main;
const mainFormInput = document.querySelector('.search-form__input');
const mainFormInputPlaceholder = mainFormInput.placeholder;
mainFormInput.addEventListener('focus', function(e) {
	mainFormInput.placeholder = '';
});
mainFormInput.addEventListener('blur', function(e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
	mainFormInput.classList('search-form__error').remove();
});


const iconItem = document.querySelectorAll('.icon-item');
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
	const menuList = document.querySelector('.menu__list');
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		menuList.classList.toggle('show');
		iconItem.forEach(element => {
			element.classList.toggle('_active');
		})
	});
}

const menuList = document.querySelector('.menu__list');
const menuItem = document.querySelectorAll('.menu__item:not(:last-child)');
const mql = window.matchMedia('(max-width: 767.98px)');
mql.addEventListener('change', someFunc);
mql.onchange = function () {
    console.log(mql);
  }

function someFunc() {
		// Выполняем действие, если ширина меньше 1000px
		let w = window.innerWidth;
		if (w < 767.98) {
			menuItem.forEach(item => {
				item.addEventListener('click', (e) => {
					menuList.classList.toggle('show'); 
					document.body.classList.toggle('_lock');
					iconItem.forEach(element => {
						element.classList.toggle('_active');
					})
				})
				} 
				)
		  console.log("Че-то делаем");
		} else if (w < 767.98 && menuList.classList.contains('show')) {
			iconItem.forEach(element => {
				element.classList.add('_active');
			})
		}else if (w > 767.98 && menuList.classList.contains('show')) {
			menuItem.forEach(item => {
				item.addEventListener('click', (e) => {
					menuList.classList.toggle('show'); 
					document.body.classList.toggle('_lock');
					iconItem.forEach(element => {
						element.classList.toggle('_active');
					})
				})
				} 
				)
		} else if (w > 767.98 && document.body.classList.contains('_lock')) {
			document.body.classList.remove('_lock');
		}
	}
someFunc();
window.addEventListener('resize', function() {
	console.log("Размер окна изменен");
	someFunc();
  });


// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  })
}