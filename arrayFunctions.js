function FillDisplay(result, array) {
  result.innerHTML = "<span>" + array.join("</span><span>") + "</span>";
}

//Map Function
function map_generate_array(arr) {
  arr = [];
  for (let i = 1; i <= 50; i++) {
    arr.push(i);
  }
  return arr;
}

function MapArray(arr) {
  let input = document.querySelector("#input0");
  arr = arr.map((item) => {
    return item * parseInt(input.value);
  });
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function MapInitialize() {
  let arr = [];
  arr = map_generate_array(arr);
  FillDisplay(display, arr);
  arrToProcess = arr;
}

//Filter Function
function FilterArray(arr) {
  let input = document.querySelector("#input0");
  arr = arr.filter((item) => {
    return item >= parseInt(input.value);
  });
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function FilterInitialize() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  FillDisplay(display, arr);
  arrToProcess = arr;
}

//ForEach Function
function ForEachArray() {
  let forEach_started = false;
  if (forEach_started == false) {
    forEach_started = true;
    let elements = display.childNodes;

    for (let index = 0; index <= elements.length; index++) {
      const item = elements[index];
      setTimeout(() => {
        let last = elements[index - 1];
        if (last) last.classList.remove("selected");
        if (item) item.classList.add("selected");
      }, 300 * index);
    }

    setTimeout(() => {
      forEach_started = false;
    }, 300 * elements.length);
  }
}

function ForEachInitialize(arr) {
  arr = [
    "manzanas",
    "peras",
    "mangos",
    "bananas",
    "kiwi",
    "mandarinas",
    "naranjas",
    "melon",
    "sandias",
    "maracuya",
  ];
  FillDisplay(display, arr);
}

//Find Function
function FindArray(arr) {
  let input = document.querySelector("#input0");
  if (input.value != null && input.value != "") {
    arr = [
      arr.find((item) => {
        return item.toLowerCase() == input.value.toLowerCase();
      }),
    ];
    FillDisplay(display, arr);
  } else {
    input.focus();
  }
  arrToProcess = arr;
}

function FindInitialize() {
  let arr = [
    "Manzana",
    "Uva",
    "Piña",
    "Pera",
    "Mango",
    "Arándano",
    "Banana",
    "Kiwi",
    "Zapote",
    "Sandia",
    "Mandarina",
    "Naranja",
    "Melon",
    "Maracuya",
    "Fresa",
    "Coco",
    "Durazno",
  ];
  FillDisplay(display, arr);
  arrToProcess = arr;
}

//Sort Function
function SortArray(arr) {
    arr = [...arr].sort();
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function SortInitialize() {
  let arr = [
    "Manzana",
    "Uva",
    "Piña",
    "Pera",
    "Mango",
    "Banana",
    "Kiwi",
    "Sandia",
    "Mandarina",
    "Naranja",
    "Melon",
    "Maracuya",
    "Fresa",
    "Coco",
    "Durazno",
  ];
  FillDisplay(display, arr);
  arrToProcess = arr;
}
