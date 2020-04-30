import React from 'react'
import { Link } from 'react-router-dom';
function NavLink() {

    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/test">
                            <li><h4 class="btn btn-danger">Member</h4></li>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Table">
                            <li><h4 class="btn btn-danger">Add</h4></li>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="About">
                            <li><h4 class="btn btn-danger" >Photo</h4></li>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    }
export default NavLink