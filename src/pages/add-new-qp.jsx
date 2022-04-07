import React, { useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  inputBaseClasses
} from '@mui/material';
import { query, collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import StyledInput from '../components/StyledInput';
import MainLayout from '../layouts/MainLayout';
import Icons from '../components/Icons';
import AsyncAutocomplete from '../components/AsyncAutoComplete';

const AddNewQp = () => {
  const [errorFile, setErrorFile] = useState(false);
  const [options, setOptions] = React.useState([]);
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    const uniRef = collection(db, 'universities');
    const q = query(uniRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOptions(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  const handleChange = (event) => {
    const allowedType = ['application/pdf'];
    const { name, value, files } = event.target;

    if (files && files[0]) {
      if (allowedType.includes(files[0].type)) {
        setErrorFile(false);
        setFormData({ ...formData, [name]: files[0] });
      } else {
        setErrorFile(true);
      }
    }
    if (name) {
      setFormData({ ...formData, [name]: value?.trim() });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.classList.add('validate');
    if (event.target.checkValidity() && !errorFile) {
      const paperRef = collection(db, 'papers');
      await addDoc(paperRef, formData);
    }
    event.target.reset();
    event.target.classList.remove('validate');
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="true"
      spellCheck="true"
      onSubmit={handleSubmit}
      sx={{
        '&.validate': {
          [`& .${inputBaseClasses.input}`]: {
            '&:invalid + fieldset, &:invalid + div + fieldset': {
              borderColor: 'error.main'
            }
          }
        }
      }}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ pb: 2 }}>
        <Typography variant="h6">Add New Paper</Typography>
        <span>
          <Button variant="contained" type="submit">
            Submit
          </Button>
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
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'capitalize'
              }
            }}
            type="file"
            onChange={handleChange}
            accept="application/pdf"
            error={errorFile}
            helperText="Please upload PDFs only!"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AsyncAutocomplete
            options={options}
            onChange={(_event, { name }) => {
              handleChange({ target: { name: 'university', value: name } });
            }}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'capitalize'
              }
            }}
            renderOption={(renderProps, { logoUrl, name }) => (
              <Stack flexDirection="row" sx={{ px: 2, py: 1 }} {...renderProps}>
                <Avatar
                  variant="rounded"
                  src={logoUrl}
                  sx={{
                    backgroundColor: 'common.white',
                    height: 30,
                    width: 30
                  }}
                >
                  <Icons.ImgAlt
                    sx={{
                      height: '100%',
                      width: '100%',
                      color: '#e5e7eb'
                    }}
                  />
                </Avatar>
                <Typography variant="body1" noWrap sx={{ ml: 1 }}>
                  {name}
                </Typography>
              </Stack>
            )}
            placeholder="School or College/University"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            fullWidth
            label="Course name"
            aria-labelledby="course-name"
            id="course-name"
            name="course-name"
            onChange={handleChange}
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'capitalize'
              }
            }}
            inputProps={{
              pattern: '[a-zA-Z ]{4,}'
            }}
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
            onChange={handleChange}
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'capitalize'
              }
            }}
            inputProps={{
              pattern: '[a-zA-Z ]{4,}'
            }}
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
            inputProps={{
              maxLength: 7,
              pattern: '[a-zA-Z]{3}[0-9]{4}'
            }}
            onChange={handleChange}
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'uppercase'
              }
            }}
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
            onChange={handleChange}
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'capitalize'
              }
            }}
            inputProps={{
              pattern: '[a-zA-Z ]{4,}'
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledInput
            id="paper-written"
            name="paper-written"
            label="Year Written"
            onChange={handleChange}
            sx={{
              [`& .${inputBaseClasses.input}`]: {
                textTransform: 'uppercase'
              }
            }}
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
};

AddNewQp.propTypes = {};
AddNewQp.Layout = MainLayout;

export default AddNewQp;
