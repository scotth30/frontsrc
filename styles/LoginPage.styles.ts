import { styled } from '@mui/system';

export const LoginContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 65px)', // Reducing the height by 60px for the navbar
    background: '#f0f2f5',
    padding: '20px',

  });
  

export const LoginForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#007bff',
    padding: '30px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    width: '400px', // Fixed width
    height: '450px', // Fixed height
    marginLeft: 'auto', // Centering the form
    marginRight: 'auto',
  });

export const LoginInput = styled('input')({
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%',
});

export const LoginButton = styled('button')({
    display: 'block', // Make sure it's block-level
    margin: '10px',
    padding: '10px',
    background: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%', // Full-width
    textAlign: 'center', // Center the text
    '&:hover': {
      background: '#0056b3',
    },
  });
  

export const ErrorText = styled('p')`
  color: red;
`;

export const DividerSection = styled('div')({
    display: 'flex',
    alignItems: 'center', // Aligns children vertically
    justifyContent: 'center', // Centers children horizontally
    margin: '30px 0',
    color: '#ffff',
    width: '110%', // Full-width
  });
  
  export const DividerLine = styled('div')({
    height: '1px', // Line thickness
    background: '#fff', // Line color
    flexGrow: 1, // Allow it to expand
    alignSelf: 'center', // Center vertically in the container
  });
  
  export const SocialIcon = styled('div')({
    padding: '0 5px',
    color: '#ffff',
    margin: '0 5px', // Add some space around the icon
    display: 'flex',
    alignItems: 'center', // Center the icon vertically
  });
  

export const SocialButtonsContainer = styled('div')({
    display: 'flex', // Apply flexbox
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'center', // Center them horizontally
    alignItems: 'center', // Center them vertically
    gap: '10px', // Add some space between the buttons
  });
  

  export const SocialButton = styled('button')({
    padding: '10px',
    marginTop: '30px',
    color: '#fff',
    fontSize: '16px', // Adjust as needed
    cursor: 'pointer',
    background: '#007bff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%', // You can adjust this to your desired width
    height: '50%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      background: '#e0e2e5',
    },
  });
  