import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Container, Typography, Alert } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { validationSchema, createFormData, FormData, stateInitials } from '../../utils/formUtils';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const formik = useFormik({
    initialValues: createFormData(),
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const { email, password, confirmPassword, ...restOfValues } = values;

      try {
        const response = await axios.post('http://localhost:3000/register', { email, password, ...restOfValues });

        if (response.status === 201 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard'); // navigate to the dashboard page once the user has successfully registered
        } else {
          console.log('Registration failed:', response.data);
          setErrorMessage(response.data.message || 'Registration failed');
        }
      } catch (error: any) {
        console.log('Error during registration:', error.response?.data || 'Server error');
        setErrorMessage(error.response?.data?.message || 'Error during registration');
      }

      setSubmitting(false);
    },
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">Sign Up</Typography>
      <form onSubmit={formik.handleSubmit}>
        {errorMessage && (
          <Alert severity="error">{errorMessage}</Alert>
        )}
        {Object.keys(formik.values).map((key) => (
          <div key={key}>
            {key !== 'state' ? (
              <TextField
                name={key}
                label={key}
                value={formik.values[key as keyof FormData]}
                onChange={formik.handleChange}
                error={formik.touched[key as keyof FormData] && Boolean(formik.errors[key as keyof FormData])}
                helperText={formik.touched[key as keyof FormData] && formik.errors[key as keyof FormData]}
              />
            ) : (
              <Autocomplete
                options={stateInitials}
                value={formik.values.state}
                onChange={(_, newValue) => formik.setFieldValue('state', newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  />
                )}
              />
            )}
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpPage;
