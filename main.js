import 'virtual:windi.css'

let counter = 0

const renderCount = () => {
    count.innerHTML = counter
}
renderCount()

button.addEventListener('click', () => {
    counter = counter + 1
    renderCount()
})
