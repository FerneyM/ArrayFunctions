const indexOf_input = document.querySelector("#indexOf_input")
const indexOf_button = document.querySelector("#indexOf_button")

const indexOf_display = document.querySelector("#indexOf_display")
const indexOf_result = document.querySelector("#indexOf_result")

let indexOf_array = ["manzanas", "peras", "mangos", "bananas", "kiwi", "mandarinas", "naranjas", "melon", "maracuya"]
display(indexOf_display, indexOf_array)

indexOf_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = indexOf_array.indexOf(indexOf_input.value.toLowerCase())
    indexOf_result.innerHTML = '<span class="code">' + result.toString() + '</span>'
    display(indexOf_display, indexOf_array)
})