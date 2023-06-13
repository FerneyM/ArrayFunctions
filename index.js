const amount = 21;
const buttonsContainer = document.querySelector('.buttonsContainer');
const modal = document.querySelector('.info');
const closeModalBtn = document.querySelector('.close_modal');
const body = document.body;
const display = document.querySelector(".modal-display")
let input1 = null
let input2 = null
const modalInputs = document.querySelector('.modal-controls');
const processBtn = document.querySelector('.process');
const resetBtn = document.querySelector('.reset');
let funcName = "";
    // const arrFunctionsName = [{'name':'Map','inputs':1,},
//                         'Filter',
//                         'ForEach',
//                         'find',
//                         'sort',
//                         'some',
//                         'every',
//                         'concat',
//                         'includes',
//                         'join',
//                         'reduce',
//                         'indexof',
//                         'push',
//                         'pop',
//                         'shift',
//                         'Unshift',
//                         'slice',
//                         'reverse',
//                         'splice',
//                         'lastIndexOf',
//                         'Array.from'];

const arrFunctionsName = [{'name':'Map',
                            'inputs':1,'type':'number',
                            'content':'crea un nuevo arreglo con los elementos que fueron modificados por una función.'},
                            {'name':'Filter',
                            'inputs':1,'type':'number',
                            'content':`Permite filtrar los elementos de un arreglo según un criterio especificado. 
                            Retorna un nuevo arreglo con todos los elementos que cumplan con dicha condición.`}, 
                            {'name':'ForEach',
                            'inputs':0,'type':'',
                            'content':`Permite ejecutar una función proporcionada por cada elemento del arreglo. No retorna un nuevo arreglo, 
                            simplemente itera sobre los elementos y realiza alguna acción definida en la función pasada como argumento.`}, 
                            {'name':'Find',
                            'inputs':1,'type':'text',
                            'content':`Permite encontrar el primer elemento que cumple con una condición especificada. Retorna el valor del primer elemento 
                            encontrado o \'undefined\' si no se encuentra ningún elemento que cumpla con la condición.`}, 
                            {'name':'Sort',
                            'inputs':'','type':'',
                            'content':`Permite ordenar los elementos de un arreglo en su lugar, es decir, modifica
                            el arreglo original reordenando sus elementos.`}, 
];
let arrToProcess = [];
for(let buttonsAmount = 0; buttonsAmount < arrFunctionsName.length; buttonsAmount++){
    const newButton = document.createElement('a');
    newButton.id = 'button' + buttonsAmount;
    newButton.setAttribute('function', arrFunctionsName[buttonsAmount].name);
    newButton.classList.add('click');
    newButton.href = '#';
    newButton.textContent = arrFunctionsName[buttonsAmount].name;
    newButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior of the link
        OpenModal(e);
      });
    buttonsContainer.appendChild(newButton);
};

function OpenModal (e){
    funcName = e.srcElement.text;
    let modalTitle = document.querySelector('.modal_titulo_inf');
    let modalContent = document.querySelector('.modal_parrafo');
    
    initializeDisplay(funcName);
    const arrFunct = arrFunctionsName.find(obj => obj.name === funcName);
    modalTitle.innerHTML = funcName;
    modalContent.innerHTML = arrFunct.content;
    if(arrFunct != null &&arrFunct.inputs > 0){
        for(let i = 0; i < arrFunct.inputs; i++){
            const newInput = document.createElement('input');
            newInput.type = arrFunct.type;
            newInput.id = 'input' + i;
            modalInputs.appendChild(newInput);
        }
    }
    processBtn.addEventListener('click', () => processArray(funcName));
    resetBtn.addEventListener('click', () => initializeDisplay(funcName));
    modal.classList.add('modal--show');
}

closeModalBtn.addEventListener('click', (e) => {
    modal.classList.remove('modal--show');
    reset();
});

function createImportScript(script){
    const newScript = document.createElement('script');
    newScript.setAttribute('src', './scripts/modal_' + script + '.js');
    return newScript;
}

function processArray(funcName){
    switch(funcName){
        case 'Map':
            MapArray(arrToProcess);
        break;
        case 'Filter':
            FilterArray(arrToProcess);
            break;
        case 'ForEach':
            ForEachArray(arrToProcess);
            break;
        case 'Find':
            FindArray(arrToProcess);
        break;
        case 'Sort':
            SortArray(arrToProcess);
        break;
        default:
            break;
    }
}

function initializeDisplay(funcName){
    switch(funcName){
        case 'Map':
            MapInitialize();
        break;
        case 'Filter':
            FilterInitialize()
            break;
        case 'ForEach':
            ForEachInitialize()
        break;
        case 'Find':
            FindInitialize()
        break;
        case 'Sort':
            SortInitialize();
        break;
        default:
            break;
    }
}

function reset(){
    modalInputs.innerHTML = '';
    resetBtn.removeEventListener('click',(e) => {
        e.preventDefault();
        console.log('Button clicked!');
      });
    funcName = "";
}