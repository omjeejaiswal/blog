import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((userData) => {
//           if(userData) {
//             dispatch(login({userData}))
//           } else{
//             dispatch(logout())
//           }
//       })
//       .finally(() => setLoading(false))
//   },[])

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        dispatch(logout()); // Logout if an error occurs
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> 
      <div className='w-full block'>
        <Header />
        <main>
          {/* Router outlet or dynamic content */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}


export default App


