import React from 'react';

const TaskTable = ({ tasks, onSubmitClick }:any) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-100">
      <thead>
        <tr>
          <th className="border border-gray-200 p-2">Task Name</th>
          <th className="border border-gray-200 p-2">Status</th>
          <th className="border border-gray-200 p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task:any, index:any) => (
          <tr key={index}>
            <td className="border border-gray-200 p-2">{task.name}</td>
            <td className="border border-gray-200 p-2">{task.status}</td>
            <td className="border border-gray-200 p-2">
              {task.status === 'Submit Task' && (
                <button 
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                  onClick={() => onSubmitClick(task)}
                >
                  Submit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;


