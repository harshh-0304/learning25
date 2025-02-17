import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{textAlign:"center" ,  }}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">formdemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">FormDemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">FormDemo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">FormDemo4</Link>
      </li>
     
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">FormDemo5</Link>
      </li>
     
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">FormDemo6</Link>
      </li>
     
     
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo7">FormDemo7</Link>
      </li>
     
     
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo8">FormDemo8</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">ApiDemo1</Link>
      </li>
     
    </ul>
    
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
