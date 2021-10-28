import {useRef } from "react"
import React from 'react'
import TaskService from "../services/TaskService"
import { useHistory } from "react-router"


const AddTask = () => {
    // let idRef=useRef()
    let taskRef=useRef()
    let checkedRef=useRef()
    const history = useHistory();

    //onSubmit uses Ref
    const saveTask = (event) => {
        event.preventDefault();

        
        let task = {
            task: taskRef.current.value,
            checked: checkedRef.current.value
        };
        console.log(task)
        TaskService.createTask(task).then(res => {
            history.push('/tasks');
        }).catch(err => {
            console.log("record not saved.")
        })
    }

    const cancel = () => history.push('/tasks')



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Task</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Task Description: </label>
                                    <input 
                                    placeholder="descript" 
                                    name="descript" 
                                    className="form-control"
                                    ref={taskRef} 
                                    // onChange={taskHandler} 

                                    />
                                </div>
                                <div className="form-group">
                                    <label>Task done: </label>
                                    <input 
                                    placeholder="Done?" 
                                    name="checked" 
                                    className="form-control"
                                    ref={checkedRef} 
                                    // onChange={checkedHandler} 

                                    />
                                </div>
                                <button className="btn btn-success" onClick={saveTask}> Save </button>
                                <button className="btn btn-danger" onClick={cancel}> Cancel </button>                    
                              

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTask

