import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(3),
    transition: theme.transitions.create('width'),
    fontSize: theme.typography.pxToRem(18),
    width: '100%',
  },
}));

const MainSearch = ({ handleSearchToggle }) => {
  return (
    <>
      <Box
        sx={{
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexGrow: 20,
        }}
      >
        <SearchIcon />
        <StyledInputBase
          type="search"
          placeholder="Search"
          autoFocus
          fullWidth
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
      <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
        <Button
          sx={{
            color: '#fff',
            '&:hover': {
              backgroundColor: ({ palette }) => alpha(palette.common.white, 0.1),
            },
          }}
          variant="text"
          onClick={() => handleSearchToggle()}
        >
          <CloseIcon />
        </Button>
      </Box>
    </>
  );
};

MainSearch.propTypes = {
  handleSearchToggle: PropTypes.func.isRequired,
};

export default MainSearch;
