import { useEffect, useMemo, useState } from 'react';
import { capitalize, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import RouterLink from './RouterLink';

const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const GradsBreadCrumbs = () => {
  const router = useRouter();
  const [pathnames, setPathnames] = useState([]);
  const mobileOpen = useMediaQuery(({ breakpoints }) => breakpoints.down('sm'));
  const regex = useMemo(() => /[`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, []);

  useEffect(() => {
    const paths = router.asPath.split('/').filter((x) => x);
    if (router.pathname.includes('/profile')) {
      paths.pop();
    }
    setPathnames(paths);
  }, [regex, router]);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        maxItems={mobileOpen ? 2 : 8}
        sx={{ pb: 2 }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {pathnames.map((path, index) => {
          const last = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = capitalize(path.replace(regex, ' '));
          return last ? (
            <Typography
              color="text.primary"
              component="h2"
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

export default GradsBreadCrumbs;
