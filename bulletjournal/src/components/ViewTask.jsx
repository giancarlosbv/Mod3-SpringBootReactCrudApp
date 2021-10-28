import { useState,useEffect,useRef } from "react"
import React from 'react'
import TaskService from "../services/TaskService"
import { useHistory, useParams } from "react-router"


const ViewTask = () => {
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
    
    //cancel bring us back to home
    const cancel = () => history.push('/tasks')



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">View Task</h3>
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
                                    readOnly={true}
                                    placeholder={taskItem.task} 
                                    name="Task" className="form-control"
                                    ref={taskRef} 
                                     />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">Task Done: </label>
                                    <input type = "checkbox"
                                    readOnly={true} 
                                    placeholder={taskItem.checked} 
                                    name="Done" 
                                    className="form-check-input"
                                    ref = {checkedRef} 
                                    />
                                </div>
                                
                                <button className="btn btn-danger" onClick={cancel}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTask
