import InfoIcon from '@mui/icons-material/Info';
import { Avatar, Card, CardActionArea, CardActions, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useUtil } from '../context/UtilContext';
import Icons from './Icons';

function preventDefault(event) {
  event.preventDefault();
}

export default function QPTile() {
  const { handleDrawerToggle } = useUtil();

  return (
    <Card sx={{ overflow: 'hidden' }}>
      <CardActionArea>
        <CardMedia>
          <Avatar
            variant="square"
            sx={{
              width: '100%',
              height: 130,
              margin: '0 auto',
              backgroundColor: '#fff',
            }}
          >
            <Icons.ImgAlt
              sx={{ height: 110, width: 130, color: 'rgb(229, 231, 235)' }}
            />
          </Avatar>
        </CardMedia>
      </CardActionArea>
      <CardActions
        onClick={() => handleDrawerToggle('details')}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
          },
        }}
      >
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          15 March, 2019
        </Typography>
        <InfoIcon sx={{ color: '#dadbdd' }} />
      </CardActions>
    </Card>
  );
}
