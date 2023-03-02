const exampleList = ["Apples", "Pears", "Oranges"];
const ul = document.createElement("ul");//слздали эл
document.body.append(ul);//добавили ее в начало страницы
for (i = 0; i < exampleList.length; i++) {
    const li = document.createElement("li"); //внутри ul создали li
    ul.append(li); //это li поместили в начало ul
    li.textContent = exampleList[i];//добавили текст который был в массиве
}


//вывести в виде списка имя тире возраст
const exampleList2 = [
    { name: "bakyt", age: 18 },
    { name: "dosbol", age: 32 },
];
const ul1 = document.createElement("ul");
document.body.append(ul1);
for (i = 0; i < exampleList2.length; i++) {
    const list1 = document.createElement("li");
    ul1.append(list1);
    list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}


//ФОРМЫ
const h1 = document.querySelector("h1");
document.querySelector("#display-text").addEventListener("input",
    function () {
        h1.textContent = this.value;
    });


document.querySelector("#font-size").addEventListener("input",
 function() {
    h1.style.fontSize = this.value + "px";
});

document.querySelector("#text-color").addEventListener("input",
function(){
    h1.style.color = this.value
}
)

document.querySelector("#font-family").addEventListener("change", function(){ //change потому что это не инпут а мы выбираем
    h1.style.fontFamily = this.value;
});



document.querySelector("#text-bold").addEventListener("change",
function(){
    if(this.checked){
      h1.style.fontWeight= "bold";  
    }
    else{
     h1.style.fontWeight = "normal";
    }
})


document.querySelector("#text-italic").addEventListener("change", 
function(){
    if(this.checked){
        h1.style.fontStyle = "italic";
    }
    else {
        h1.style.fontStyle = "normal";
    }
})

document.querySelector("#text-underline").addEventListener("change", 
function(){
    if(this.checked){
        h1.style.textDecoration = "underline";
    }
    else{
     h1.style.textDecoration = "normal";
    }
})




