import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { useUtil } from '../context/UtilContext';

function TransitionLeft(props) {
  return <Slide {...props} direction="up" />;
}

export default function NotiSnackBar() {
  const { context, handlSnackToggle } = useUtil();
  return (
    <Snackbar
      open={context.snackBar.open}
      onClose={() => handlSnackToggle({ open: false })}
      TransitionComponent={TransitionLeft}
      message={context.snackBar.message}
      key={TransitionLeft.name}
    />
  );
}
