import { createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";


export const AuthProvider = createContext(null)

const AuthContext = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    



    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        
      };

      const logout = () => {
        setUser(null);
        localStorage.removeItem('userData');
       
      };
    
      useEffect(() => {
        // Function to load user data from local storage
        const loadUserData = () => {
          const savedUser = localStorage.getItem('userData');
          if (savedUser) {
            setUser(JSON.parse(savedUser));
          }
        };
    
        // Load user data on initial render
        loadUserData();
    
        // Set an interval to remove the data every 30 minutes
        const intervalId = setInterval(() => {
          localStorage.removeItem('userData');
          // Load user data again after removal (if needed)
          loadUserData();
        }, 30 * 60 * 1000); // 30 minutes in milliseconds
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);


    const authInfo = {
        user,
        setUser,
        loading,
        login,
        logout,
       
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;