import axios from 'axios';
const TASK_API_BASE_URL = "http://localhost:8080/todo"
//full file path is http://localhost:8080/todo/alltasks
// endpoints are /tasks/{id}   /tasks/{tasks}
class TaskService {

    getTasks() {
        return axios.get(TASK_API_BASE_URL + "/alltasks");
    }

    createTask(task) {
        return axios.post(TASK_API_BASE_URL + "/addtask", task);
    }

    getTaskById(id) {
        return axios.get(TASK_API_BASE_URL + "/task/task/" + id);
    }

    updateTask(task, id) {
        return axios.put(TASK_API_BASE_URL + "/task/" + id,task);
    }

    deleteTask(id) {
        return axios.delete(TASK_API_BASE_URL + "/task/" + id);
    }

}

export default new TaskService();