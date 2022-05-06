import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';
// import Icons from '../../components/Icons';
import HistoryIcon from '@mui/icons-material/History';
import ListView from '../../components/ListView';
import { useUtil } from '../../context/UtilContext';

const Index = () => {
  const { context } = useUtil();

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', pb: 3 }}>
        <HistoryIcon fontSize="medium" sx={{ mr: 1 }} />
        <Typography variant="subtitle1">Recent</Typography>
      </Box>
      {context.view === 'list' ? (
        <ListView />
      ) : (
        <Box>
          <Card sx={{ overflow: 'hidden', maxWidth: 300 }}>
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
                  {/* <Icons.ImgAlt
                    sx={{ height: 110, width: 130, color: 'rgb(229, 231, 235)' }}
                  /> */}
                </Avatar>
              </CardMedia>
              <CardActions
                sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <Typography variant="body1" color="text.secondary">
                  Technopreneurship
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  15 March, 2019
                </Typography>
              </CardActions>
            </CardActionArea>
          </Card>
        </Box>
      )}
    </>
  );
};

Index.propTypes = {};

export default Index;
