const pop_button = document.querySelector("#pop_button")
const pop_restart = document.querySelector("#pop_restart")
const pop_result = document.querySelector("#pop_result")

let pop_array = ["Manzanas", "Peras", "Mangos", "Bananas", "Kiwi", "Mandarinas", "Naranjas", "Melon", "Maracuya"]
display(pop_result, pop_array)

pop_button.addEventListener('click', (e) => {
    e.preventDefault()
    pop_array.pop()
    display(pop_result, pop_array)
})

pop_restart.addEventListener('click', (e) => {
    e.preventDefault()
    pop_array = ["Manzanas", "Peras", "Mangos", "Bananas", "Kiwi", "Mandarinas", "Naranjas", "Melon", "Maracuya"]
    display(pop_result, pop_array)
})