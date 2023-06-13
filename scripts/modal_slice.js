const slice_button = document.querySelector("#slice_button")
const slice_restart = document.querySelector("#slice_restart")
const slice_result = document.querySelector("#slice_result")

const slice_input_start = document.querySelector("#slice_input_start")
const slice_input_end = document.querySelector("#slice_input_end")

let slice_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
    "Mandarina", "Naranja", "Tamarindo", "Melon", "Maracuya", "Fresa", "Coco", "Durazno", "Limon"
]
display(slice_result, slice_array)

slice_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = [...slice_array].slice(slice_input_start.value, slice_input_end.value)
    display(slice_result, result)
})

slice_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(slice_result, slice_array)
})