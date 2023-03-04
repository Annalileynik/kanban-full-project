import React from 'react';
import GetTask from "./GetTask";

const Column = ({onMoveTask, status,tasks,onChangePriority,priorities, onDeleteTask,toggle, modal, statuses, editTask,onChangeStatusImprove,onChangeStatusWorsen}) => {

    return (
        <div className="col">
            {status.title}<hr/>
            {tasks.filter(task=>
            task.status===status.title)
                .map(task=>
                <GetTask
                key={task._id}
                task={task}
                tasks={tasks}
                onChangePriority={onChangePriority}
                priorities={priorities}
                onDeleteTask={onDeleteTask}
                toggle={toggle}
                modal={modal}
                statuses={statuses}
                editTask={editTask}
                onMoveTask={onMoveTask}

                />
                )}

        </div>
    );
};

export default Column;