import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link} from "react-router-dom";

function Navbar() {

   const [ categories, setCategories ] = useState([])

   useEffect(() => {
   axios({
   method: "GET",
   url: "http://127.0.0.1:8000/api/category/"
   }).then(response => {
       setCategories(response.data)
   })
   },[])

  return (
    <div className="App">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {categories.map( c => (
    <Link className="nav-link" to={{pathname:`/category/${c.id}/`, froDashboard:false }}>{c.name}</Link>
        ))}
      <li className="nav-item">
      </li>


    </ul>
  </div>
</nav>
    </div>
  );
}

export default Navbar;