import React from 'react';


const Navbar = () => {
  return (

    <div>

      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Order</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/addService">Admin</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;