import React from 'react';
import NavLink from './NavLink';
import InpuutForm from './InputForm';
import MemberList from './MemberList';

function Table(){
return(
    <div>
      <NavLink></NavLink>
      <div className="has-text-centered">
      <section class="hero is-primary">
        <div className="container">
          <h1 className="title">Post Page</h1>
        <MemberList/>
        <InpuutForm/>
        </div>

      </section>
    </div>
    </div>
  )
}

export default Table 