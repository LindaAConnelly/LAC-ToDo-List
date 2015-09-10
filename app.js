

//===================== Variables ===============

var form = document.getElementById("toDoForm");
var list = document.getElementById("toDoList");
var toDoArray = [];
var h1 = document.querySelector('h1');
var h2 = document.querySelector("h2");

//===================== Event listeners ===============

// listens for submit event and adds new toDoItem to list

form.addEventListener("submit", function (evt){
     evt.preventDefault();
    var toDoItem = form.toDo.value;
    form.toDo.value = "";

    toDoArray.push(toDoItem);
   makeLis();
    
    
   
});




//===================== Functions ===============

// creates DOM elements
function e(elementType, text, attributes, styles) {
        var newElement = document.createElement(elementType);
        newElement.textContent = text;

        //set the attributes on the tag
        if(attributes){
        for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i];
        newElement.setAttribute(attr[0], attr[1]);
        }
}
        // set the styles
        if(styles){
        for (var j = 0; j < styles.length; j++) {
        var style = styles[j];
        newElement.style[style[0]] = style[1];
        }
}
        return newElement;
        }

// call the form

// function showForm(){

//         h2.addEventListener("submit", function (evt){
//         evt.preventDefault();
//         this.parentElement.


//         return form;
// }




// turns arrays into lis
function makeLis() {
    list.innerHTML = "";

    for(var i = 0; i < toDoArray.length; i++ ){
        var item = toDoArray[i];
        var li = e("li");
        var checkbox = e("input", "", [["type", "checkbox"],["id", item]]);
        var span = e("span", item);
        var btnEdit = e("button", "Edit",[["class", "edBtn"]], [["display", ""]]);
        var del = e("button", "Delete", [["class", "delBtn"]]);

        

        checkbox.addEventListener("click", function(evt){
            if(this.checked){
             this.parentElement.classList.add("checked");  
             // this.getAttribute("edBtn").display:none;
         }
         else {
            this.parentElement.classList.remove("checked");
         }

        });

         // btnEdit.addEventListener("click", function(evt) {
         //    if () {
         //        var edAt = this.getAttribute("rel");
         //        var newList = this.textContent("input");
         //        var editItem = toDoArray.indexOf(edAt);
         //        toDoArray.splice(editItem, 1, newList);

         //        makeLis();     

//      }
        // else {
        //      makeLis();
        // }
// }



        del.addEventListener("click", function() {
            if (confirm("Are your sure you want to delete this?")) {
                var delAt = this.getAttribute("rel");
                var delItem = toDoArray.indexOf(delAt);
                toDoArray.splice(delItem, 1);

                makeLis();
            }
        });



        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnEdit);
        li.appendChild(del);
        list.appendChild(li);
    }
}


//===================== Execution ===============




