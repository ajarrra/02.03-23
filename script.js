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
    { name : "Bakyt" , age: 18}
] 
