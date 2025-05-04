document.addEventListener('DOMContentLoaded', () => {
	// Фиксированный header затемняется при скролле
	const header = document.querySelector('.sticky-header')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			header.style.backgroundColor = 'rgba(26, 26, 26, 1)'
		} else {
			header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)'
		}
	})

	// Анимация кнопки ORDER при наведении
	const orderButtons = document.querySelectorAll('button')

	orderButtons.forEach(button => {
		button.addEventListener('mouseover', () => {
			button.style.transform = 'scale(1.05)'
		})

		button.addEventListener('mouseout', () => {
			button.style.transform = 'scale(1)'
		})
	})

	// Валидация формы перед отправкой
	const form = document.querySelector('form')

	form.addEventListener('submit', event => {
		event.preventDefault() // Предотвращаем отправку, чтобы проверить данные

		const name = document.getElementById('name').value.trim()
		const email = document.getElementById('email').value.trim()
		const privacyAccepted = document.querySelector(
			"input[name='privacy']"
		).checked

		if (name === '' || email === '' || !privacyAccepted) {
			alert('Заполните все поля и примите условия Privacy Policy!')
		} else {
			alert('Форма успешно отправлена!')
			form.reset() // Очищаем форму
		}
	})

	// Плавное появление изображений при прокрутке
	const images = document.querySelectorAll(
		'.right-side img, .left-picture-side img, .form_pic, .right-side2 img'
	)

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = 1
					entry.target.style.transform = 'translateY(0)'
				}
			})
		},
		{ threshold: 0.3 }
	)

	images.forEach(img => {
		img.style.opacity = 0
		img.style.transform = 'translateY(20px)'
		img.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
		observer.observe(img)
	})
})
