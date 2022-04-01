import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material';

const AddNewQp = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.getAll());
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" justifyContent="space-between" sx={{ pb: 2 }}>
        <Typography variant="h6">Add New Paper</Typography>
        <span>
          <Button variant="contained">Submit</Button>
        </span>
      </Stack>
      <Alert severity="error" sx={{ my: 2 }}>
        Please note that Papers that are not clear will be removed
      </Alert>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Course name"
            aria-labelledby="course-name"
            id="course-name"
            name="course-name"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Course departmanet"
            aria-labelledby="course-departmanet"
            id="course-departmanet"
            name="course-departmanet"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Course code"
            aria-labelledby="course-code"
            id="course-code"
            name="course-code"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Paper Name"
            aria-labelledby="paper-name"
            id="paper-name"
            name="paper-name"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            aria-labelledby="paper-year"
            id="paper-year"
            name="paper-year"
            required
            type="file"
          />
          <FormHelperText>Please upload PDFs only!</FormHelperText>
        </Grid>
      </Grid>
    </Box>
  );
};

AddNewQp.propTypes = {};

export default AddNewQp;
