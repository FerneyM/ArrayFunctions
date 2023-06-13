function ForEachArray() {
    let forEach_started = false
    if (forEach_started == false) {
        forEach_started = true
        let elements = display.childNodes

        for (let index = 0; index <= elements.length; index++) {
            const item = elements[index];
            setTimeout(() => {
                let last = elements[index-1]
                if (last) last.classList.remove("selected")
                if (item) item.classList.add("selected")
            }, 300 * index)
        }

        setTimeout(() => {
            forEach_started = false
        }, 300 * elements.length)
    }
  }
  
  function ForEachInitialize(arr) {
    arr = ["manzanas", "peras", "mangos", "bananas", "kiwi", "mandarinas", "naranjas", "melon", "sandias", "maracuya"];
    FillDisplay(display, arr);
  }