
import React from 'react';
import Task from './Task';

const StatusColumn = ({ status, statuses, setStatuses }) => {
  const addTask = () => {
    const newTask = { title: `Task ${status.tasks.length + 1}`, description: '' };
    const newStatuses = [...statuses];
    newStatuses[statuses.indexOf(status)].tasks.push(newTask);
    setStatuses(newStatuses);
  };

  return (
    <div className="status">
      <h2>{status.title} ({status.tasks.length})</h2>
      <button onClick={addTask}>Add Task</button>
      {status.tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

export default StatusColumn;


