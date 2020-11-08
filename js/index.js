const inputData = document.querySelector("#inputData");
const wrapperAItemToDo= document.querySelector("#wrapperListToDo");

const handleAddClick = () => {
  const newItemToDo = inputData.value;

  const newListItem = document.createElement("li");
  newListItem.classList.add("listItem");

  const template = `
    <label class="itemLabel">
        <input type="checkbox" class="itemCheck"/>
        <span class="itemText"></span>
    </label>`;

   newListItem.innerHTML =  template;
   newListItem.querySelector(".itemText").innerText = newItemToDo
   wrapperAItemToDo.appendChild(newListItem);
   inputData.value  = "";
}
const handleAddEnter = (e) =>{
    if( e.keyCode == 13 ){
        handleAddClick();
    }
}
