// 

import React, { useState } from 'react';
import StatusColumn from './StatusColumn';
import { tasksData } from './tasksData';

const ProjectBoard = () => {
  const [statuses, setStatuses] = useState([
    { title: 'To Do', tasks: tasksData.filter(task => task.status === 'To Do') },
    { title: 'In Progress', tasks: tasksData.filter(task => task.status === 'In Progress') },
    { title: 'Done', tasks: tasksData.filter(task => task.status === 'Done') }
  ]);

  return (
    <div className="project-board">
      {statuses.map((status, index) => (
        <StatusColumn key={index} status={status} statuses={statuses} setStatuses={setStatuses} />
      ))}
    </div>
  );
};

export default ProjectBoard;
