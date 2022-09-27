import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie, removeCookies } from 'cookies-next';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = getCookie('TK');
  
  useEffect(() => {
    if (token){
      axios.get(`/api/get-current-user`, { params: { token } })
        .then(() => { setIsLoggedIn(true); })
        .catch(() => { setIsLoggedIn(false); removeCookies('TK') });
    } else { setIsLoggedIn(false); removeCookies('TK') };
  }, [token])
  
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