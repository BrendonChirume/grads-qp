import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Icons from './Icons';
import { useRouter } from 'next/router';

export default function CourseCard({ coursename }) {
  const router = useRouter();
  return (
    <Card
      sx={{ maxWidth: { md: 300 } }}
      underline="none"
      onClick={() => router.push(`/courses/${coursename.replace(/\s/g, '-')}`)}
    >
      <CardActionArea sx={{ display: { xs: 'flex', sm: 'block' } }}>
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid item xs={4} sm={12}>
            <CardMedia
              height="140"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icons.ImgAlt
                sx={{ height: 110, width: 130, color: 'rgb(229, 231, 235)' }}
              />
            </CardMedia>
          </Grid>
          <Grid item xs={8} sm={12}>
            <CardContent sx={{ pb: { md: '8px!important' } }}>
              <Typography
                title={coursename}
                variant="h6"
                sx={({ typography }) => ({
                  fontWeight: 700,
                  ...typography.truncate('100%')
                })}
                component="h3"
              >
                {coursename}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Department of computer science
              </Typography>
              <Typography
                component="div"
                sx={{ textAlign: { md: 'right', fontSize: 13 } }}
                color="text.secondary"
              >
                8 File(s)
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

CourseCard.propTypes = {
  coursename: PropTypes.string.isRequired
};
