import React, { useState, useEffect } from 'react'
import './task-list-card.styles.scss'
import TaskItem from '../task-item/task-item.component'
import { useTasks } from '../../contexts/TaskContexts'
import useTask  from '../../hooks/useTask'


const TaskListCard = (props) => {

    const { tasks, addSubtask } = useTasks()
    const id = useTask()

    const handleAddSubtask = (tastTitle, taskId) => {
        console.log("clickeddd")
        

    }


    return (

        <div className="task__list__container">

            {
                tasks.map(task => (
                    <TaskItem key={task.taskId} task={task} handleAddSubtask={handleAddSubtask}></TaskItem>
                ))
            }
        </div>


    )
}

export default TaskListCard