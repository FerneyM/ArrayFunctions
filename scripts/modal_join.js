const join_button = document.querySelector("#join_button")
const join_restart = document.querySelector("#join_restart")
const join_display = document.querySelector("#join_display")
const join_result = document.querySelector("#join_result")
const join_input = document.querySelector("#join_input")

let join_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Banana", "Kiwi", "Zapote", "Sandia",
    "Mandarina", "Naranja", "Melon", "Maracuya", "Fresa", "Coco", "Durazno",
]
display(join_display, join_array)

join_button.addEventListener('click', (e) => {
    e.preventDefault()
    join_result.innerHTML = join_array.join(join_input.value)
})

join_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(join_display, join_array)
    join_result.innerHTML = ''
})