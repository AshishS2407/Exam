let Recipe = [];
let Priority = [];

function addFun() {

    const RecipeInput = document.getElementById("recipee")
    const PriorityInput = document.getElementById("priorityy")
    const RecipeList = document.getElementById("list")

    let recipe = RecipeInput.value.trim();
    let priority = Number(PriorityInput.value.trim())

    if (recipe !== '' && !isNaN(priority) && priority >= 1 && priority <= 3) {

        Recipe.push(recipe)
        Priority.push(priority)

        const li = document.createElement("li")
        li.textContent = recipe;

        switch (priority) {
            case 1:
                li.classList.add('priority-easy')
                break;

            case 2:
                li.classList.add('priority-moderate')
                break;

            case 3:
                li.classList.add('priority-hard')
                break;
        }

        const completebutton = document.createElement("button")
        completebutton.textContent = "Complete";
        completebutton.onclick = function () {
            li.classList.toggle('completed')
        }
        li.appendChild(completebutton)
        RecipeList.appendChild(li)
        PriorityInput.value = ''
        RecipeInput.value = ''


        const editbutton = document.createElement("button")
        editbutton.textContent = "edit"
        editbutton.onclick = function () {
            const Newrecipe = prompt('New Recipe', recipe)
            if (Newrecipe !== null && Newrecipe.trim() !== '') {
                const Index = Recipe.indexOf(recipe)
                Recipe[Index] = Newrecipe
                li.firstChild.textContent = Newrecipe
                recipe = Newrecipe
            }

            const Newpriority = prompt('New Priority', priority)
            if (Newpriority !== null && Newpriority.trim() !== '') {
                const Index = Priority.indexOf(priority)
                Priority[Index] = Newpriority
                priority = Newpriority
                li.classList.remove('priority-easy', 'priority-moderate', 'priority-hard')

                switch (parseInt(Newpriority)) {
                    case 1:
                        li.classList.add('priority-easy')
                        break;

                    case 2:
                        li.classList.add('priority-moderate')
                        break;

                    case 3:
                        li.classList.add('priority-hard')
                        break;
                }
            }
        }
        li.appendChild(editbutton)

        const removebutton = document.createElement("button")
        removebutton.textContent = "remove"
        removebutton.onclick = function () {
            RecipeList.removeChild(li);
            const Index = Recipe.indexOf(recipe)
            Recipe.splice = (Index, 1)
            Priority.splice = (Index, 1)
        }
        li.appendChild(removebutton)



    } else {
        alert ('Enter a priority between 1 and 3')
    }

}
