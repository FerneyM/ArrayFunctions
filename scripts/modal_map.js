function map_generate_array(arr) {
    arr = []
    for (let i = 1; i <= 50; i++) {
        arr.push(i)
    }
    return arr;
}

function MapArray(arr){
    let input = document.querySelector("#input0")
    arr = arr.map(item => {
        return item * parseInt(input.value)
    })
    FillDisplay(display, arr)
    arrToProcess = arr
}

function MapInitialize(){
    let arr = []
    arr = map_generate_array(arr)
    FillDisplay(display, arr)
    arrToProcess = arr
}