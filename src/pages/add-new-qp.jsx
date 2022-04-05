import React, { useState } from 'react';
import { Alert, Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';
import StyledInput from '../components/StyledInput';
import MainLayout from '../layouts/MainLayout';
import Icons from '../components/Icons';

const AddNewQp = (props) => {
  const [errorFile, setErrorFile] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.getAll());
  };

  const handleChange = (event) => {
    const allowedType = ['application/pdf'];
    const [files] = event.target.files;
    if (allowedType.includes(files.type)) {
      return setErrorFile(false);
    } else {
      return setErrorFile(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" justifyContent="space-between" sx={{ pb: 2 }}>
        <Typography variant="h6">Add New Paper</Typography>
        <span>
          <Button variant="contained">Submit</Button>
        </span>
      </Stack>
      <Alert severity="info" variant="filled" sx={{ my: 2 }}>
        Please note that Papers are reviewed and removed if not clear.
      </Alert>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            sx={{
              p: 2,
              borderRadius: 4,
              border: ({ palette }) => `1px solid ${palette.divider}`
            }}
          >
            <Avatar
              variant="square"
              sx={{
                borderRadius: 4,
                height: 120,
                width: 120
              }}
            >
              <Icons.ImgAlt sx={{ height: 120, width: 120 }} />
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <StyledInput
            fullWidth
            aria-labelledby="paper-year"
            id="paper-year"
            name="paper-year"
            required
            error={errorFile}
            type="file"
            onChange={handleChange}
            accept="application/pdf"
            helperText="Please upload PDFs only!"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            fullWidth
            label="Course name"
            aria-labelledby="course-name"
            id="course-name"
            name="course-name"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            fullWidth
            label="Course departmanet"
            aria-labelledby="course-departmanet"
            id="course-departmanet"
            name="course-departmanet"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            fullWidth
            label="Course code"
            aria-labelledby="course-code"
            id="course-code"
            name="course-code"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            fullWidth
            label="Paper Name"
            aria-labelledby="paper-name"
            id="paper-name"
            name="paper-name"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            id="date"
            label="Year Written"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

AddNewQp.propTypes = {};
AddNewQp.Layout = MainLayout;

export default AddNewQp;
