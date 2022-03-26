import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper
} from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

export default function QPTile() {
  return (
    <Card sx={{ overflow: 'hidden', pb: 1 }}>
      <CardMedia>
        <Avatar
          variant="square"
          sx={{ width: '100%', height: 130, boxShadow: 1, margin: '0 auto' }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            whiteSpace: 'nowrap'
          }}
          gutterBottom
        >
          SCI Technopreneurshippreneurship
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          on 15 March, 2019
        </Typography>
      </CardContent>
      <CardActions>
        <Link color="primary" href="#" onClick={preventDefault}>
          View
        </Link>
      </CardActions>
    </Card>
  );
}
