import React, {useState} from 'react';
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";


const GetTask = ({task, onChangePriority, priorities, onDeleteTask, statuses, editTask, onMoveTask}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    return (

        <div className="card">
            <div className="card-header">
                <span>
                    <button
                        disabled={statuses[0].title===task.name}
                        onClick={()=>onMoveTask(task._id, task.status, -1)}
                        type="button" className="btn btn-outline-info"> ←</button>
                  <u><h4> {task.status} </h4></u>
                  <button
                      disabled={statuses[statuses.length - 1].title===task.name}
                      onClick={()=>onMoveTask(task._id, task.status, +1)}
                      type="button" className="btn btn-outline-info">→ </button>
        </span>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><u><h6>Goal: </h6></u> <h5> {task.name}</h5>
                    <hr/>
                    <h6> {task.description}</h6>
                </li>
                <li className="list-group-item ">
                    <h6><u>Priority:</u> {task.priority}{' '}</h6>
                    <button
                        disabled={+task.priority === priorities[0]}
                        onClick={() => onChangePriority(task._id, +task.priority - 1)}
                        type="button"
                        className="btn btn-outline-info"> ↓
                    </button>
                    {" "}
                    <button
                        disabled={+task.priority === priorities[priorities.length - 1]}
                        onClick={() => onChangePriority(task._id, +task.priority + 1)}
                        type="button"
                        className="btn btn-outline-info">↑
                    </button>
                </li>

                <button onClick={toggle} type="button" className="btn btn-outline-danger"> Delete</button>
                <EditTask
                    task={task}
                    statuses={statuses}
                    priorities={priorities}
                    editTask={editTask}
                />
            </ul>
            <DeleteTask
                toggle={toggle}
                onDeleteTask={onDeleteTask}
                modal={modal}
                task={task}
                priorities={priorities}/>
        </div>

    );
};

export default GetTask;

