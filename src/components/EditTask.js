import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


function EditTask(args) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [status, setStatus] = useState(args.task.status)
    const [name, setName] = useState(args.task.name)
    const [priority, setPriority] = useState(args.task.priority)
    const [description, setDescription] = useState(args.task.description)

    const onUpdateTask = () => {
        const updateTask={status, name, priority, description}
        args.editTask(args.task._id, updateTask)
       toggle()
    }
    return (
        <div>
            <ul className="list-group list-group-flush">
                <button type="button"
                onClick={toggle}
               className="btn btn-outline-warning">Edit</button></ul>

            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input
                            value={name}
                            onChange={event => setName(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Your goal"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                        <input
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="describe goal, please"/>
                    </div>

                    <select value={priority}
                            onChange={event => setPriority(event.target.value)}
                        className="form-select form-select-sm" aria-label=".form-select-sm example">

                            {args.priorities.map((el, ind)=>
                        <option key={ind} value={el}>

                            {el}
                        </option>
                            )}
                    </select>
                    <select value={status}
                            onChange={event => setStatus(event.target.value)}
                        className="form-select form-select-sm" aria-label=".form-select-sm example">

                            {args.statuses.map((el)=>
                        <option key={el._id} value={el.title}>
                            {el.title}
                        </option>
                            )}
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onUpdateTask}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditTask;