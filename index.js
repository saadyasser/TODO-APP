/*eslint-env browser*/
const enterNameOfList = document.getElementById("name"),
  addTodoList = document.getElementById("add"),
  validateMessage = document.querySelectorAll("span"),
  ulList = document.getElementById("lists"),
  ulDoingList = document.getElementById("doing-lists"),
  ulCompletedList = document.getElementById("completed");
console.log(enterNameOfList);

var hidePlaceHolder = function () {
  "use strict";
  this.placeholder = "";
};
var showPlaceHolder = function () {
  "use strict";
  if (this.placeholder === "" || " ") {
    this.placeholder = "enter a name of list";
  }
};

enterNameOfList.addEventListener("focus", hidePlaceHolder);
enterNameOfList.addEventListener("blur", showPlaceHolder);

addTodoList.addEventListener("click", function () {
  var lists = document.createElement("li"),
    todoIcon = document.createElement("i"),
    nameOflists = document.createTextNode(enterNameOfList.value),
    moveToDoingListIcon = document.createElement("i");
  todoIcon.classList.add("fas", "fa-check");
  moveToDoingListIcon.classList.add("fas", "fa-angle-right");
  lists.classList.add("a");
  ulList.appendChild(lists);
  lists.appendChild(todoIcon);
  lists.appendChild(nameOflists);
  lists.appendChild(moveToDoingListIcon);
  var allMoveToDoingListIcon = document.getElementsByClassName(
      "fa-angle-right"
    ),
    todoLists = document.getElementsByClassName("a");
  for (let i = 0; i < allMoveToDoingListIcon.length; i++) {
    allMoveToDoingListIcon[i].onclick = function () {
      todoLists[i].style.display = "none";
      var doinglist = document.createElement("li"),
        doingIcon = document.createElement("i"),
        moveToDone = document.createElement("i");
      doinglist.classList.add("b");
      doingIcon.classList.add("fas", "fa-cog");
      moveToDone.classList.add("fas", "fa-angle-double-right");
      ulDoingList.appendChild(doinglist);
      doinglist.appendChild(doingIcon);
      doinglist.appendChild(todoLists[i].childNodes[1]);
      doinglist.appendChild(moveToDone);
      (allDoinglists = document.getElementsByClassName("b")),
        (allmoveToDoneIcon = document.getElementsByClassName(
          "fa-angle-double-right"
        ));
      for (let x = 0; x < allmoveToDoneIcon.length; x++) {
        allmoveToDoneIcon[x].onclick = function () {
          allDoinglists[x].style.display = "none";
          var doneList = document.createElement("li"),
            doneIcon = document.createElement("i"),
            removeIcon = document.createElement("i");
          doneList.classList.add("c");
          doneIcon.classList.add("fas", "fa-check");
          removeIcon.classList.add("fas", "fa-trash");
          ulCompletedList.appendChild(doneList);
          doneList.appendChild(doneIcon);
          doneList.appendChild(allDoinglists[x].childNodes[1]);
          doneList.appendChild(removeIcon);
          removeIcon.addEventListener("click", function (e) {
            e.target.parentElement.style.display = "none";
          });
        };
      }
    };
  }
});
