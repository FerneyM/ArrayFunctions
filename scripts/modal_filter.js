function FilterArray(arr) {
  let input = document.querySelector("#input0");
  arr = arr.filter((item) => {
    return item >= parseInt(input.value);
  });
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function FilterInitialize() {
    let arr = []
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  FillDisplay(display, arr);
  arrToProcess = arr;
}
