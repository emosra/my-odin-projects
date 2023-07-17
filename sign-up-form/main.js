const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', (e) => {
    
    if (password.value !== confirmPassword.value) {
        e.preventDefault()
        console.log('no match') 
        return
    }
})