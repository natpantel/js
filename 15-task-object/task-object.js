const toDoList = {
    tasks: [
        {
            "title": "Помыть посуду",
            id: 1,
            priority: 1
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
    addTask: function (title, priority) {
        this.tasks.push({title, priority, id: this.getLastId()});
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
        this.tasks.sort((a, b) => {a.priority - b.priority})
    }
}