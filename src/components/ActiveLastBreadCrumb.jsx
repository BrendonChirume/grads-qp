import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useMediaQuery from '@mui/material/useMediaQuery';
import RouterLink from '../RouterLink';
import { useRouter } from 'next/router';
import { data } from './PaperTreeView';

const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const ActiveLastBreadCrumb = () => {
  const { query } = useRouter();
  const pathnames = query.year;

  const mobileOpen = useMediaQuery(({ breakpoints }) => breakpoints.down('sm'));

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        maxItems={mobileOpen ? 2 : 8}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <RouterLink href="/" underline="hover" color="inherit">
          <Typography sx={{ textTransform: 'capitalize' }}>Informatics</Typography>
        </RouterLink>
        {Array.isArray(pathnames) &&
          pathnames.map((path, index) => {
            const last = index === pathnames.length - 1;
            const href = `/${pathnames.slice(0, index + 1).join('/')}`;
            const label = path.replace('-', ' ');
            return last ? (
              <Typography
                color="text.primary"
                key={href}
                sx={{ textTransform: 'capitalize' }}
              >
                {label}
              </Typography>
            ) : (
              <RouterLink underline="hover" color="inherit" href={href} key={href}>
                {label}
              </RouterLink>
            );
          })}
      </Breadcrumbs>
    </div>
  );
};

export default ActiveLastBreadCrumb;
