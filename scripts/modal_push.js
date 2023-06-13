const push_input = document.querySelector("#push_input")
const push_button = document.querySelector("#push_button")
const push_restart = document.querySelector("#push_restart")
const push_result = document.querySelector("#push_result")

let push_array = []
push_result.innerHTML = "<span> </span>"

push_button.addEventListener('click', (e) => {
    e.preventDefault()
    push_array.push(push_input.value)
    push_input.value = ""
    display(push_result, push_array)
})

push_restart.addEventListener('click', (e) => {
    e.preventDefault()
    push_array = []
    push_result.innerHTML = "<span> </span>"
})