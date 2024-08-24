 'use client'
import React, { useState } from 'react';
import TaskTable from '../tasktable/page';
import TaskForm from '../taskform/page';

const tasksData = [
  { name: 'Task 1', status: 'Approved' },
  { name: 'Task 2', status: 'Pending' },
  { name: 'Task 3', status: 'Submit Task' },
];

export default function Home() {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSubmitClick = (task:any) => {
    setSelectedTask(task);
  };

  const handleFormSubmit = (submittedTask:any) => {
    console.log('Submitted Task:', submittedTask);
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4 text-center m-6 p-6">Assignment Submission</h1>
      <TaskTable tasks={tasks} onSubmitClick={handleSubmitClick} />
      {selectedTask && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Submit Your Task</h2>
          <TaskForm task={selectedTask} onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
}




