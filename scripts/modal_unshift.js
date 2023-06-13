const unshift_input = document.querySelector("#unshift_input")
const unshift_button = document.querySelector("#unshift_button")
const unshift_restart = document.querySelector("#unshift_restart")
const unshift_result = document.querySelector("#unshift_result")

let unshift_array = []
unshift_result.innerHTML = "<span> </span>"

unshift_button.addEventListener('click', (e) => {
    e.preventDefault()
    unshift_array.unshift(unshift_input.value)
    unshift_input.value = ""
    display(unshift_result, unshift_array)
})

unshift_restart.addEventListener('click', (e) => {
    e.preventDefault()
    unshift_array = []
    unshift_result.innerHTML = "<span> </span>"
})