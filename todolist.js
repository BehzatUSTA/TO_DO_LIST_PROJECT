//function to take input value then display
let formDOM=document.querySelector('#formid')
formDOM.addEventListener('submit',mainfunc )

function mainfunc(prevent) {
    console.log('submitted')
    prevent.preventDefault()
    let inputid=document.querySelector('#inputid')
    addtopage(inputid.value)
    inputid.value=''

}
let ulDOM=document.querySelector('#ulid')

function addtopage(newli) {
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`${newli}`
    liDOM.classList.add('list-group-item','left','licolor') //input box classes
    ulDOM.append(liDOM)
}
//background-color
let divDOM=document.querySelector('#divid')
divDOM.classList.add('bgc','centering')
//offseting
let colDOM=document.querySelector('#colid')
colDOM.classList.add('colid')

//h1 style
let h1=document.querySelector('#h1')
h1.classList.add('h1style')
//form customizing
let form=document.querySelector('#formid')
form.classList.add('form')
//button and input styling
let  butto=document.querySelector('#buttonid')
butto.classList.add('button')
let inputDOM =document.querySelector('#inputid')
inputDOM.classList.add('input')








