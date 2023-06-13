const shift_button = document.querySelector("#shift_button")
const shift_restart = document.querySelector("#shift_restart")
const shift_result = document.querySelector("#shift_result")

let shift_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
    "Mandarina", "Naranja", "Tamarindo", "Melon", "Maracuya", "Fresa", "Coco", "Durazno", "Limon"
]
display(shift_result, shift_array)

shift_button.addEventListener('click', (e) => {
    e.preventDefault()
    shift_array.shift()
    display(shift_result, shift_array)
})

shift_restart.addEventListener('click', (e) => {
    e.preventDefault()
    shift_array = [
        "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
        "Mandarina", "Naranja", "Tamarindo", "Melon", "Maracuya", "Fresa", "Coco", "Durazno", "Limon"
    ]
    display(shift_result, shift_array)
})