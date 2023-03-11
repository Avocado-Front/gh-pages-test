let list = document.querySelector('.list')
let btn = document.querySelector('.btn')
let input = document.querySelector('.inp')

btn.addEventListener('click',function(){
    let newitem = document.createElement('li')
    let span = document.createElement('span')
    let i = document.createElement('i')
    let inpval = input.value

    span.innerHTML = inpval
    i.classList = 'fa fa-trash-o'

    newitem.append(i,span)
    list.append(newitem)

    input.value = ''

    i.addEventListener('click',function(event){
        event.target.parentElement.remove();
    })
    
    console.log(list);

 
})
console.log(list);