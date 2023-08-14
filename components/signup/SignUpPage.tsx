import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { Typography, Alert, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { validationSchema, createFormData, FormData, stateInitials } from '../../utils/formUtils';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, getIdToken } from 'firebase/auth'; // Updated import
import { initializeApp } from 'firebase/app';
import { ContainerStyle, ButtonContainerStyle, FormFieldsContainerStyle, FormFieldStyle, StyledTextField } from '../../styles/SignUpPage.styles';
import { firebaseConfig } from '../../firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

const SignUpPage: FC = () => {

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const formik = useFormik({
    initialValues: createFormData(),
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const { email, password, confirmPassword, ...restOfValues } = values;
      try {
        // Create user in Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Get the ID token from Firebase
        const token = await getIdToken(user);

        // Send token and other information to the backend
        const response = await axios.post(backendURL + '/register', { uid: user.uid, email, password, ...restOfValues }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.status === 201 && response.data.token) {
          localStorage.setItem('token', response.data.token);
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
    <ContainerStyle>
      <Typography variant="h4" align="center" sx={{ color: 'white' }}>Sign Up</Typography>
      <form onSubmit={formik.handleSubmit}>
        {errorMessage && (
          <Alert severity="error">{errorMessage}</Alert>
        )}
        <FormFieldsContainerStyle>
          {Object.keys(formik.values).map((key) => (
            <FormFieldStyle key={key}>
              {key !== 'state' ? (
                <StyledTextField
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
                    <StyledTextField
                      {...params}
                      error={formik.touched.state && Boolean(formik.errors.state)}
                      helperText={formik.touched.state && formik.errors.state}
                    />
                  )}
                />
              )}
            </FormFieldStyle>
          ))}
        </FormFieldsContainerStyle>
        <ButtonContainerStyle>
          <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>Sign Up</Button>
        </ButtonContainerStyle>
      </form>
    </ContainerStyle>
  );
};

export default SignUpPage;
