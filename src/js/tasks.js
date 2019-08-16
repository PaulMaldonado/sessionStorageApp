const form_data = document.getElementById('form-data');
form_data.addEventListener('submit', createTask);


function createTask(event) {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    if(name === '' || description === '' || date === '') {
        alert('Los campos no pueden estar en blanco');

        return
    }

    const task = {
        name: name,
        description: description,
        date: date
    }

    if(localStorage.getItem('addTask') === null) {
        let addTask = [];
        addTask.push(task);
        localStorage.setItem('addTask', JSON.stringify(addTask));
    } else {
        let addTask = JSON.parse(localStorage.getItem('addTask'));
        addTask.push(task);
        localStorage.setItem('addTask', JSON.stringify(addTask));
    }

    console.log(name, description, date);

    event.preventDefault();
    document.getElementById('form-data').reset();

    showTask();
}


function showTask() {
    let addTask = JSON.parse(localStorage.getItem('addTask'));
    const interface_Task = document.getElementById('interface-task');

    interface_Task.innerHTML = '';

    for(let viewTask of addTask) {
        interface_Task.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <h3>${viewTask.name}</h3>
                </div>
                <div class="card-body">
                    <p>${viewTask.description}</p>
                    <span>${viewTask.date}</span>
                    <br><br>
                    <button class="btn btn-danger" onclick="deleteTask('${viewTask.name}')">Eliminar Tarea</button>
                </div>
            </div>

        `;
    }
}


function deleteTask(name) {
    let addTask = JSON.parse(localStorage.getItem('addTask'));

    for(let i = 0; i < addTask.length; i++) {
        if(addTask[i].name === name) {
            addTask.splice(i, 1);
        }
    }

    localStorage.setItem('addTask', JSON.stringify(addTask));
    showTask();
}



showTask();