import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Column from "./components/Column";
import axios from 'axios';
import {useEffect, useState} from "react";
import CreateTask from "./components/CreateTask";


function App() {
    const [statuses, setStatuses] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tasks, setTasks] = useState([])
    const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    const getStatuses = () => {
        axios.get(`https://expressjs-server.vercel.app/statuses`)
            .then((res) =>
                setStatuses(res.data))
            .catch((err) =>
                alert("Site is failed"))
    }

    useEffect(() => {
        getStatuses()
    }, [])
    const getTasks = () => {
        axios.get(`https://expressjs-server.vercel.app/tasks`)
            .then((res) =>
                setTasks(res.data))
            .catch((err) =>
                alert("Site does not work"))
    }
    useEffect(() => {
        getTasks()
    }, [])
    const onChangePriority = (id, priority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {priority})
            .then((res) =>
                getTasks())
            .catch((err) =>
                alert('can not change priority'))
    }
    const onDeleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res =>
                getTasks())
            .catch(err =>
                alert('did not delete'))
    }

    const createTask = (createTasks) => {
        axios.post(`https://expressjs-server.vercel.app/tasks`, createTasks)
            .then(res =>
                getTasks())
            .catch(err =>
                alert('did not create'))
    }

    const editTask = (id, updateTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, updateTask)
            .then(res =>
                getTasks())
            .catch(err =>
                alert('did not update'))
    }
// const updateTask = (id) => {
//       const newStatus={status:"done"}
//       axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,
//           newStatus).then((res)=>{
//         console.log(res)
//       })
//           .catch((err)=>{
//             alert('server kaput')
//           })
//     }
    const onMoveTask = (id, oldStatus, direction) => {
        const newStatuses = statuses.map(status => status.title)
        const oldStatusIndex = newStatuses.indexOf(oldStatus)
const newStatusIndex = oldStatusIndex + direction
        const newStatus = newStatuses[newStatusIndex]
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,{status:newStatus})
            .then((res)=>
            getTasks())
            .catch(err=>
            alert('did not move status'))
    }
    return (
        <div className="App">
            <h1>Kanban</h1>
            <div className="container  style={{border:'2px solid blue'}}">
                <div className="row align-items-start ">
                    <CreateTask
                        createTask={createTask}
                        priorities={priorities}
                        tasks={tasks}
                        statuses={statuses}
                    />
                    {statuses.map(status =>
                        < Column
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            setTasks={setTasks}
                            onChangePriority={onChangePriority}
                            priorities={priorities}
                            onDeleteTask={onDeleteTask}
                            setStatuses={setStatuses}
                            statuses={statuses}
                            editTask={editTask}
                            onMoveTask={onMoveTask}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default App;
