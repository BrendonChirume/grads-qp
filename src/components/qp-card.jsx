import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia
} from '@mui/material';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

export default function QPTile() {
  return (
    <Card sx={{ overflow: 'hidden' }}>
      <CardActionArea>
        <CardMedia>
          <Avatar
            variant="square"
            sx={{ width: '100%', height: 130, boxShadow: 1, margin: '0 auto' }}
          />
        </CardMedia>
        <CardActions>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            15 March, 2019
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
