import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  useEffect(() => {
    let token;
    if (typeof window !== "undefined") { token = localStorage.getItem('token') };
    if (token){
      axios.get(`/api/get-current-user`, { params: { token } })
        .then((res) => res )
        .catch(() => setIsLoggedIn(false));
    } else { setIsLoggedIn(false) };
  }, [])
  
  const modalProps = { isLoginModalOpen, setIsLoginModalOpen };
  const userProps = { isLoggedIn, setIsLoggedIn, ...currentUser, setCurrentUser };
  const contextProps = { ...modalProps, ...userProps }

  return (
    <AppContext.Provider value={contextProps}>
      {children}
    </AppContext.Provider>
  );
} 

export const useAppProvider = () => useContext(AppContext)