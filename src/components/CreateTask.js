import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function CreateTask(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setNewDescription('')
        setNewTitle('')
        setNewPriority(props.priorities[0])
        setNewStatus("todo")
    }

    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newStatus, setNewStatus] = useState("todo")
    const [newPriority, setNewPriority] = useState(props.priorities[0])

    const onCreateTask = () => {
        const createTasks={
            name:newTitle,
            description:newDescription,
            status:newStatus,
            priority:newPriority
        }
        props.createTask(createTasks)
       toggle()
    }

    return (
        <div>
            <button className="btn btn-outline-success"

                onClick={toggle}> Create Task </button>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={props.toggle}>Do you want create Task?</ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input
                            value={newTitle}
                            onChange={event => {setNewTitle(event.target.value)}}
                            type="text"
                            className="form-control"
                            id="inputPassword5"
                            placeholder="Write Task"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                        <input
                            value={newDescription}
                            onChange={(event)=>{setNewDescription(event.target.value)}}
                            type="text"
                               className="form-control"
                               id="inputPassword5"
                               placeholder="Write Description"/>
                    </div>


                    <select
                        value={newPriority}
                        onChange={(event)=>{setNewPriority(event.target.value)}}
                        className="form-select" aria-label="Default select example">
                        {props.priorities.map((el,ind)=>
                            <option key={ind}
                            value={el}>{el}</option>
                        )}

                    </select>

                    <select
                        value={newStatus}
                        onChange={(event) => setNewStatus(event.target.value)}
                        className="form-select" aria-label="Default select example">
                        {props.statuses.map(el=>
                            <option key={el._id}
                            value={el.title}>{el.title}</option>
                        )}
                    </select>

                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-success" onClick={onCreateTask}>
                        Add Task
                    </Button>{' '}
                    <Button className="btn btn-toolbar" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default CreateTask;
