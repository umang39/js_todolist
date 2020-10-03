let list = document.getElementById('list')
let task = document.getElementById('task')
let done = document.getElementById('submit')
let button

count = 1
done.onclick = function(){
    let element = document.createElement('li')
    element.innerText = task.value
    element.id = count
    button = document.createElement('button')
    button.innerText = 'delete' 
    element.appendChild(button)
    list.appendChild(element)
    count++
    button.onclick = function(ev){
        ev.target.innerText = "hello"
        console.log(ev.target.parentElement)
        ev.target.parentElement.remove()
        
    }  
}
