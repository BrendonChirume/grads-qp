import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext({});

export const useLayout = () => useContext(LayoutContext);
const drawerWidth = 250;

const LayoutProvider = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <LayoutContext.Provider value={{ mobileOpen, drawerWidth, handleDrawerToggle }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
