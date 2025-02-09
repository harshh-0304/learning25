import React from 'react'
import "../assets/content.css"

export default function content() {var name ="harsh"
    var Age = '20'
    var isActive= false;
  return (
    <div className='content'  >
      <h1>content</h1>
        <h1>hello</h1>
    <h1>Name = {name}</h1>
    <h2>Age = {Age}</h2>
    <h3>Active = {isActive == true ? "Active" : "notActive"}</h3>
    </div>
  )
}
