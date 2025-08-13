'use client'
import React from 'react'
import MyButton from '../components/MyButton';

const EventHandling = () => {

    const previewImage =(e) =>{
      const file = e.target.files[0];
      const reader = new FileReader();

       reader.onload = (data) => {
        const img = document.createElement('img');
        img.src = data.target.result;
        document.body.appendChild(img);
       }
            reader.readAsDataURL(file);
    }
  return (
    <div className='container mx-auto py-5 min-h-screen '
     onMouseMove={(e) => {
      const circle = document.getElementById('target');
      circle.style.left = e.clientX -20 + 'px';
      circle.style.top = e.clientY -10 + 'px';
    }}>
      {/* <div className='-z-1 size-10 bg-blue-800 rounded-full absolute' id='target'></div> */}
      <img className='-z-1 h-10 absolute' id='target' src="https://image.pngaaa.com/663/1226663-middle.png" alt="" />

    <button
     onClick = {() => {alert('button was clicked');}} 
      className = 'bg-blue-500 text-white p-4'>
      Click Event
    </button>
    <input type = "text"
            className = 'border p-3 block mt-5'
            onChange ={(e)  =>  {console.log(e-target.value);} }
         />
         <input type ="color"
         className='block mt-5'
         onChange = {(e) => { document.body.style.backgroundColor = e.target.value}}
         />

         <input type = "text"
          className = "border p-3 block mt-5"
          onKeyDown ={(e) => {
             console.log(e.code);
             
          }}
          />
        <input type ="file" className = 'block mt-5'
         onChange = {previewImage}
         accept = 'image/*'
         multiple 
        />

    </div>
  )
}

export default EventHandling;