import { useState,useEffect,useRef } from "react"
import React from 'react'
import TaskService from "../services/TaskService"
import { useHistory, useParams } from "react-router"

const DeleteTask = () => {
    let {id} = useParams();
    let idRef=useRef()
    let taskRef=useRef()
    let checkedRef=useRef()
    const [taskItem, setTaskItem] = useState({
        id: '',
        task: '',
        checked: ''
    })
    const history = useHistory();

    useEffect(() => {
        TaskService.getTaskById(id).then((res) => {
            let task = res.data;
            setTaskItem(task);
            console.log(task)
        });
        
    }, [id])

    //onsubmit
    const deleteTask = (event) => {
        event.preventDefault();

        let task = {
            id: idRef.current.value,
            task: taskRef.current.value,
            checked: checkedRef.current.value
        };
        console.log(task)
        TaskService.deleteTask(id).then(res => {
            history.push('/tasks');
            console.log("Task is deleted!")
        }).catch(err => {
            console.log("record not deleted.")
        })
    }
    //cancel bring us back to home
    const cancel = () => history.push('/tasks')



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Delete Task</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Task ID: </label>
                                    <input placeholder={taskItem.id}
                                    readOnly={true} 
                                    name="id" 
                                    className="form-control"
                                    ref={idRef} />
                                </div>
                                <div className="form-group">
                                    <label>Task Name: </label>
                                    <input 
                                    placeholder={taskItem.task}
                                    readOnly={true} 
                                    name="Task" className="form-control"
                                    ref={taskRef} 
                                     />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">Task Done: </label>
                                    <input type = "checkbox" 
                                    name="Done" 
                                    className="form-check-input"
                                    ref = {checkedRef} 
                                    />
                                </div>
                                <button className="btn btn-success" onClick={deleteTask}> Delete </button>
                                <button className="btn btn-danger" onClick={cancel}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteTask
