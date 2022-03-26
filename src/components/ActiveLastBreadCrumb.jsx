import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '../Link';

const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const ActiveLastBreadCrumb = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          href="#"
          sx={{ textTransform: 'capitalize' }}
          underline="hover"
          color="inherit"
        >
          Informatics
        </Link>
        <Link
          href="#"
          sx={{ textTransform: 'capitalize' }}
          underline="hover"
          color="inherit"
        >
          Technoprenuership
        </Link>
        <Link
          href="#"
          sx={{ textTransform: 'capitalize' }}
          underline="hover"
          color="text.primary"
        >
          SCI 2108
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default ActiveLastBreadCrumb;
