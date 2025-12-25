import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate('/signup');
  };
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        justifyContent: 'end',
        gap: '20px',
        height: '100vh',
        padding: '20px',
        paddingY: '40px',
      }}
    >
      <Box
        width="80%"
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}
      >
        <Typography variant="h4" fontWeight="500">
          Welcome to PopX
        </Typography>
        <Typography color="#898b8e" fontSize={22}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Button
        onClick={handleCreateAccount}
        variant="contained"
        color="primary"
        size="large"
        sx={{ fontWeight: '500', fontSize: 18 }}
      >
        Create Account
      </Button>
      <Button
        onClick={handleLogin}
        variant="contained"
        color="secondary"
        size="large"
        sx={{ fontWeight: '500', fontSize: 18 }}
      >
        Already Registered? Login
      </Button>
    </Box>
  );
};

export default LandingPage;
