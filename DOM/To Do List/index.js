const toinput = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const todoItemsContainer = document.getElementById('activities')
btn.addEventListener( 'click', () => {

    //take input
    const value = toinput.value;
    //check whether value is inputed or not
    if(!value ){
        return;
    }
    //create list
    const li = document.createElement('li'); //<li></li>
    li.innerText = value;
    //create delete btn
    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    // toinput.addEventListener('keypress', (e)=> {
    //     if(e === 'enter'){
    //         btn.click();
    //     }
    // })

    //append

    li.appendChild(delBtn);

    todoItemsContainer.appendChild(li);
    toinput.value='';


});