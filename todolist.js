var todoList = document.getElementById('list');
var textoList = document.getElementById('texto');
var saveList = document.getElementById('btn');

var todosList=JSON.parse(localStorage.getItem('list_todos'))||[];

function mostrarTudo() {

    todoList.innerHTML="";
    for (um of todosList) {
       var listItem = document.createElement('li');
       var texto = document.createTextNode(um);
       var link=document.createElement('a');
       link.setAttribute('href','#');
       var linkText=document.createTextNode('excluir');

       var pos=todosList.indexOf(um)
       link.setAttribute('onclick','deleteTodo('+pos+')');
    
       listItem.appendChild(texto);
       todoList.appendChild(listItem);
       link.appendChild(linkText); 
       listItem.appendChild(link); 
      
    }
}
mostrarTudo();


function addTodo(){
    var texto=textoList.value;
    todosList.push(texto);
    textoList.value="";
    mostrarTudo();
    saveToStorage();
}

saveList.onclick=addTodo;

function deleteTodo(pos){
    todosList.splice(pos, 1);
    mostrarTudo();
    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todosList));
}