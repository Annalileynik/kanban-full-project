import React from 'react';
import { Button, Modal, ModalHeader,  ModalFooter } from 'reactstrap';

function DeleteTask(props) {

    const onDelete = () => {
props.toggle()
props.onDeleteTask(props.task._id)
    }


    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
                <ModalHeader toggle={props.toggle}>Do you want delete {props.task.name}?</ModalHeader>
                <ModalFooter>
                    <Button className="btn btn-danger" onClick={onDelete}>
                        Delete task
                    </Button>{' '}
                    <Button className="btn btn-secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteTask;