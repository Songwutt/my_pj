import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import NavLink from './NavLink';
import MemberList from './MemberList';

const Home = () => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });
  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);


  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  return (
    <div>
      {session.isLoggedIn ? (
        // หลัง loginเสร็จ
        <div>
          <NavLink></NavLink>
          <span>
            <h1>Welcome {session.currentUser && session.currentUser.email} </h1>
          </span>
          <MemberList/>
          <br></br>
          <button
            onClick={handleLogout}>logout</button>
        </div>

      ) : (
          //   ยังไม่ได้ login
          <div>
            <Login setSession={setSession} />

          </div>
        )}

    </div>
  )
}
export default Home