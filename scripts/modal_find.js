function FindArray(arr) {
    let input = document.querySelector("#input0");
    arr = [arr.find(item => {
        return item.toLowerCase() == input.value.toLowerCase()
    })]
    FillDisplay(display, arr);
    arrToProcess = arr;
  }
  
  function FindInitialize() {
      let arr = [
        "Manzana", "Uva", "Piña", "Pera", "Mango", "Arándano", "Banana", "Kiwi", "Zapote", "Sandia",
        "Mandarina", "Naranja", "Melon", "Maracuya", "Fresa", "Coco", "Durazno",
    ]
    FillDisplay(display, arr);
    arrToProcess = arr;
  }
  