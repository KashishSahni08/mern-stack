'use client'
import React, { useState } from 'react'
import Login from '../login/page';
import { IconTrash } from '@tabler/icons-react';

const TodoList = () => {

    // let count =  0;
    // const [count, setCount] = useState(1);

    const [taskList, setTaskList] = useState([]);

    const deleteTask = (index) => {
      console.log(index);
      const temp = taskList;
      temp.splice(index, 1);
      setTaskList([...temp]);
    }

    const addTask = (e) => {
      if(e.code === 'Enter'){
        console.log(e.target.value);
        const newTask = { text: e.target.value, completed: false, 
          date: (new Date ()).toLocaleDateString(),
          time:(new Date()).toLocaleTimeString() 
        };
        setTaskList([ newTask, ...taskList]);
        e.target.value = '';
        
      }
      
    }

  return (
    <div className='min-h-screen bg-gray-50'>
        {/* <h1 className='text-4xl'>{count}</h1>
        <button className='border block mt-4'
        onClick={()=>{ setCount(count+1); console.log(count);}}>
            Add Count</button> */}


         <h1 className='my-5 text-4xl font-bold text-center'>Todo List</h1>

         <div className='container mx-auto rounded-md shadow-md bg-white'>
          <div className='p-5'>
            <input 
            onKeyDown={addTask}
             className='border-2 p-3 rounded block w-full'
            placeholder='Add a new todo...' type="text" />
          </div>
          <div className='p-5 border-t-1'>
           {
            taskList.map((task, index) => {
              return <div 
                 key={index}
                 style={{ borderColor: task.completed ? 'green' : 'red' }}
              className='border rounded-lg p-4 mb-4 flex justify-between items-center'>
                <div className='flex gap-3'>
                  <input type="checkbox" 
                    onChange={(e) => {
                      const temp = taskList;
                      temp[index].completed = e.target.checked;
                      setTaskList([...temp]);
                    }}   
                    />
                  <p
                  style={{textDecoration:task.completed ? 'line-through':'none'}}
                  >{task.text}</p>
                </div>
                <p> {task.date}  {task.time} </p>

                <button
                onClick={() => deleteTask(index)}
                className='bg-red-500 text-white px-4 py-2 rounded-md'>
                <IconTrash/>

                </button>
              </div>
            })
           }
          </div>
         </div>

    </div>
    
  )
}

export default TodoList;