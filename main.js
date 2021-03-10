let formElement = document.querySelector('.box__footer__form')
let inputElement = document.querySelector('.box__footer__form__label__input')
let messagesListElement = document.querySelector('.box__message-list')



let message = []

formElement.addEventListener('submit', event => {
    event.preventDefault()

    if(inputElement.value != ''){
        createNewMessage(inputElement.value)
    }

    formElement.reset()
    inputElement.focus()
})

function createNewMessage (value) {
    message.push(value)
    renderMessages(message)
}

function renderMessages (array) {
    inputElement.value = ""

    array.forEach((message, index) => {
        let newMessageElement = document.createElement('li')

        newMessageElement.classList.add('box__message-list__item')
        newMessageElement.textContent = message
        newMessageElement.setAttribute('id', `message${index}`)

        messagesListElement.appendChild(newMessageElement)
    })

    location.href ='#message' + (array.length - 1)
}

renderMessages(message)

