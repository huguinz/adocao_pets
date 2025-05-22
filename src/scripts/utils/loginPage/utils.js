'use strict'

export function toggleClass() {
	const loginContainer = document.getElementsByClassName('login_container')[0]
	const registerContainer = document.getElementsByClassName('register_container')[0]

	const toggleLogin = loginContainer.classList.toggle('toggle_login')
	const toggleRegister = registerContainer.classList.toggle('toggle_register')

	const loginButton = document.getElementById('register_button')

	if (toggleLogin && toggleRegister) {
		document.title = 'Cadastre-se!'
		loginButton.textContent = 'Entrar'
	} else {
		document.title = 'Entre na sua conta!!'
		loginButton.textContent = 'Cadastrar'
	}
}
