// import React from 'react'
// import { createContext,useState,useEffect } from 'react'

// const AuthenticationContext = createContext();

// const useAuthentication = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [role, setRole] = useState(null);

//   // Simulate fetching user role from backend (replace with your logic)
//   useEffect(() => {
//     const handleRole = async () => {
  
//       const response = await fetch('/api/user');
//       const data = await response.json();
//       setIsAuthenticated(true);
//       setRole(data.role);
//     };
//     handleRole();
//   }, []);

//   return { isAuthenticated, role };
// };

// export { AuthenticationContext, useAuthentication };