import React from 'react'
import { useHistory } from 'react-router';
import { useState, useEffect, useRef } from 'react'
import TaskService from '../services/TaskService';
const ListTasks = () => {

    const [tasks,setTasks] = useState([]);
    let checkedRef=useRef()
    const history = useHistory();
    const AddTask =()=> history.push('/add-task')
    const editTask =id=> history.push(`/update-task/${id}`);
    const deleteTask =id=> history.push(`/delete-task/${id}`)
    const viewTask =id=> history.push(`/view-task/${id}`)

    useEffect(() => {
        TaskService.getTasks().then((res) => {
            setTasks(res.data);
        });
        // console.log(tasks)
    }, [])

    
    

    return (
        <div>
            <h2 className="text-center"> List of tasks</h2>
            <div>
                <button 
                className = "btn btn-primary"
                onClick={AddTask}>Add Task</button>
            </div>
            <div>
                <p></p>
            </div>
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Task Id</th>
                            <th>Task Description</th>
                            <th>Task Done</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                task =>
                                <tr key = {task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.task}</td>
                                    <td><div className="form-check">
                                    <label className="form-check-label">Task Done: </label>
                                    {task.checked?<input type = "checkbox"
                                    readOnly={true}  
                                    name="Done" 
                                    className="form-check-input"
                                    ref = {checkedRef}
                                    checked 
                                    />:<input type = "checkbox"
                                    readOnly={true}  
                                    name="Done" 
                                    className="form-check-input"
                                    ref = {checkedRef} 
                                    />}
                                    
                                    </div></td>
                                    <td>
                                        <button 
                                        onClick = {() => editTask(task.id)}
                                        className="btn btn-primary">Update</button>
                                        <button 
                                        onClick = {() => deleteTask(task.id)}
                                        className="btn btn-danger">Delete</button>
                                        <button 
                                        onClick = {() => viewTask(task.id)}
                                        className="btn btn-primary">View</button>

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default ListTasks

//     constructor(props) {
//         super(props)
//         this.state = {
//             tasks: []
//         }
//         this.addTask = this.addTask.bind(this);
//         this.editTask = this.editTask.bind(this)
//         this.deleteTask = this.deleteTask.bind(this)
//         this.viewTask = this.viewTask.bind(this)
//     }

//     componentDidMount(){
//         TaskService.getTasks().then((res) => {
//             this.setState({tasks:res.data});
//         });
//     }

//     addTask()
//     {
//         this.props.history.push('/add-task');
//     }

//     editTask(id)
//     {
//         this.props.history.push(`/update-task/${id}`);
//     }

//     deleteTask(id)
//     {
//         this.props.history.push(`/delete-task/${id}`);
//     }

//     viewTask(id)
//     {
//         this.props.history.push(`/view-task/${id}`);
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className = "text-center">To-Do List</h2>

//             </div>
//         )
//     }
// }

