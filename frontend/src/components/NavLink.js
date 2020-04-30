import React from 'react'
import { Link } from 'react-router-dom';
function NavLink() {

    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/Home">
                            <li><h4 class="btn btn-danger">Home</h4></li>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Table">
                            <li><h4 class="btn btn-danger">Table</h4></li>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="About">
                            <li><h4 class="btn btn-danger" >About</h4></li>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    }
export default NavLink