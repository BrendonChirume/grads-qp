import dynamic from 'next/dynamic';
import styled from '@mui/material/styles/styled';
import Toolbar from '@mui/material/Toolbar';
import { useUtil } from '../context/UtilContext';

const MainLayout = dynamic(() => import('./MainLayout'));

const Main = styled('div', {
  shouldForwardProp: (prop) => !['open', 'drawerDetailsWidth'].includes(prop),
})(({ theme, open, drawerDetailsWidth }) => ({
  width: { sm: `calc(100% - ${drawerDetailsWidth}px)` },
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: { marginRight: open ? 0 : -drawerDetailsWidth },
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

function Layout(props) {
  const { children } = props;
  const { context, drawerDetailsWidth } = useUtil();

  return (
    <Main drawerDetailsWidth={drawerDetailsWidth} open={context.drawer.details}>
      <Toolbar />
      {children}
    </Main>
  );
}

const DrawerLayout = (props) => (
  <MainLayout>
    <Layout {...props} />
  </MainLayout>
);

export default DrawerLayout;
