import React from 'react';
import NavLink from './NavLink';
import InputForm from './InputForm';

function Table(){
return(
    <div>
      <NavLink></NavLink>
      <div className="has-text-centered">
      <section class="hero is-primary">
        <div className="container">
          <h1 className="title">Post Page</h1>
          <InputForm/>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Table 