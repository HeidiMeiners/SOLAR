import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    };
    fetchUser();
  }, []);

  // Registro de usuario
  const register = (username, password, name) => {
    const newUser = { username, password, name };  // Agregar nombre completo
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find((user) => user.username === username)) {
      return false; 
    }
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); 
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); 
    return true;
  };

  // Inicio de sesión
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find((user) => user.username === username && user.password === password);
    if (foundUser) {
      setUser(foundUser);  // Aquí se establece el usuario con su nombre
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  // Cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;