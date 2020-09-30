const messages = [
    'Carolina',
    'Angie',
    'Maricela',
    'Sebastian',
    'laura',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }