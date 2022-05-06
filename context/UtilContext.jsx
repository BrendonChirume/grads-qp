import { createContext, useContext, useState } from 'react';

const drawerWidth = 250;
const drawerDetailsWidth = 200;
const UtilContext = createContext({});

export const useUtil = () => useContext(UtilContext);

const UtilProvider = ({ children }) => {
  const [context, setContext] = useState({
    drawer: {
      main: false,
      details: false,
    },
    view: 'list',
    snackBar: {
      open: false,
      message: '',
    },
  });

  const handleDrawerToggle = (drawer) => {
    setContext((prev) => ({
      ...prev,
      drawer: { ...prev.drawer, [drawer]: !prev.drawer[drawer] },
    }));
  };

  const handleViewChange = (view) => {
    setContext((prev) => ({ ...prev, view }));
  };

  const handlSnackToggle = (data) => {
    setContext((prev) => ({
      ...prev,
      snackBar: { ...prev.snackBar, ...data },
    }));
  };

  return (
    <UtilContext.Provider
      value={{
        context,
        drawerWidth,
        drawerDetailsWidth,
        handleDrawerToggle,
        handleViewChange,
        handlSnackToggle,
      }}
    >
      {children}
    </UtilContext.Provider>
  );
};

export default UtilProvider;
