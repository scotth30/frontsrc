import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Container, Typography, Alert, Button } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { validationSchema, createFormData, FormData, stateInitials } from '../../utils/formUtils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/SignUpPage.module.css';
import { signUpButtonStyles } from '../../theme';

const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  console.log('Backend URL:', import.meta.env.VITE_REACT_APP_BACKEND_URL);

  const formik = useFormik({
    initialValues: createFormData(),
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const { email, password, confirmPassword, ...restOfValues } = values;
      try {
        const response = await axios.post(backendURL + '/register', { email, password, ...restOfValues }); // Using the backendURL variable here
        if (response.status === 201 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        } else {
          setErrorMessage(response.data.message || 'Registration failed');
        }
      } catch (error: any) {
        console.error('Error during registration:', error);
        setErrorMessage(error.response?.data?.message || 'Error during registration');
      }
      setSubmitting(false);
    },
  });

  return (
    <Container className="container" maxWidth="sm">
      <Typography variant="h4" align="center">Sign Up</Typography>
      <form onSubmit={formik.handleSubmit}>
        {errorMessage && (
          <Alert severity="error">{errorMessage}</Alert>
        )}
        <div className="form-fields-container">
          {Object.keys(formik.values).map((key) => (
            <div key={key} className="form-field">
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
                  onBlur={() => formik.setFieldTouched('state')}
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
        </div>
        <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting} sx={signUpButtonStyles}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpPage;
