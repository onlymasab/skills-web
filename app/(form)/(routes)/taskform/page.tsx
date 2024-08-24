'use client'
import React, { useState } from 'react';
import Navbar from '@/components/navar';

const TaskForm = ({ onSubmit }:any) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit({ name, date, url });
  };

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="mt-1 block w-full p-2 border border-gray-200 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="mt-1 block w-full p-2 border border-gray-200 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Task URL</label>
        <input 
          type="url" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          className="mt-1 block w-full p-2 border border-gray-200 rounded-md"
        />
      </div>
      <button 
        type="submit" 
        className="bg-green-500 text-white py-2 px-4 rounded-md"
      >
        Submit Task
      </button>
    </form>
  );
};

export default TaskForm;



