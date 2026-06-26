const toDoList = {
    tasks: [
        {
            "name": "Помыть посуду",
            id: 1,
            order: 1
        }
    ], 
    getLastId: function () {
        let lastId = -1;
        for (let task of this.tasks) {
            if (task.id > lastId) {
                lastId = task.id;
            }
        }
        lastId++;
        return lastId
    },
    addTask: function (name, order) {
        this.tasks.push({name, order, id: this.getLastId()});
    },
    deleteTask: function (id) {
        this.tasks = this.tasks.filter(el => el.id != id)
    },
    updateTask: function (id, field, value) {
        for (let task of this.tasks) {
            if (task.id == id) {
                task[field] = value;
            }
        };
    },
    sortTasks: function() {
        this.tasks.sort((a, b) => {return a.order - b.order})
    }
}

const newTask = {
    tasks: [{ 
    id: 1, 
    name: "тест", 
    description: "описание",
    order: 0
    }]
}

newTask.getLastId = toDoList.getLastId.bind(newTask);
newTask.addTask = toDoList.addTask.bind(newTask);
newTask.deleteTask = toDoList.deleteTask.bind(newTask);
newTask.updateTask = toDoList.updateTask.bind(newTask);
newTask.sortTasks = toDoList.sortTasks.bind(newTask);