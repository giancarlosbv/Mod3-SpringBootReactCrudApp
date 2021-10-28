import { useState,useEffect,useRef } from "react"
import React from 'react'
import TaskService from "../services/TaskService"
import { useHistory, useParams } from "react-router"

const UpdateTasks = () => {
    let {id} = useParams();
    let idRef=useRef()
    let taskRef=useRef()
    let checkedRef=useRef()
    const [taskItem, setTaskItem] = useState({
        id: '',
        task: '',
        checked: false
    })
    const history = useHistory();

    useEffect(() => {
        TaskService.getTaskById(id).then((res) => {
            let task = res.data;
            // if (checkedRef.current.value=='on'){
            //     setTaskItem(task,taskItem.checked==true)
            // } else setTaskItem(task,taskItem.checked==false)
            // ;
            setTaskItem(task)
            console.log(task)
        });
        
    }, [id])

    //onsubmit
    const updateTask = (event) => {
        event.preventDefault();
        
        let task = {
            id: idRef.current.value,
            task: taskRef.current.value,
            checked: checkedRef.current.value =="on"? true :false
        };
        console.log(task)
        TaskService.updateTask(task, id).then(res => {
            history.push('/tasks');
            console.log("Task is saved!")
        }).catch(err => {
            console.log("record not saved.")
        })
    }
    //cancel bring us back to home
    const cancel = () => history.push('/tasks')



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Task</h3>
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
                                    name="Task" className="form-control"
                                    ref={taskRef} 
                                     />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">Task Done: </label>

                                    
                                    {taskItem.checked?<input type = "checkbox"
                                      
                                    name="Done" 
                                    className="form-check-input"
                                    ref = {checkedRef}
                                    checked 
                                    />:<input type = "checkbox"
                                    
                                    name="Done" 
                                    className="form-check-input"
                                    ref = {checkedRef} 
                                    />}


                                </div>
                                
                                <button className="btn btn-success" onClick={updateTask}> Update </button>
                                <button className="btn btn-danger" onClick={cancel}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateTasks
