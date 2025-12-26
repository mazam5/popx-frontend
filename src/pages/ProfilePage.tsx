import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import womenImage from '/images/women-1.png';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const ProfilePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
        gap: '20px',
        height: '100vh',
      }}
    >
      <Box>
        <Box sx={{ backgroundColor: 'white', padding: '25px' }}>
          <Typography variant="h5" fontWeight="400">
            Account Settings
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#f7f8f9',
            paddingX: '25px',
            paddingY: '20px',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '20px',
            borderBottom: '1px dashed #e0e0e0',
          }}
        >
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Box sx={{ position: 'relative' }}>
              <Button
                sx={{
                  m: 0,
                  p: 0,
                  position: 'relative',
                  borderRadius: '50%',
                  minWidth: 'auto',
                }}
              >
                <Avatar alt="Marry Doe" src={womenImage} sx={{ width: 100, height: 100 }} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#6c63ff',
                    border: '2px solid white',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#5a52e0',
                    },
                  }}
                >
                  <CameraAltIcon sx={{ fontSize: 18, color: 'white' }} />
                </Box>
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" fontWeight="500" fontSize={15}>
                Marry Doe
              </Typography>
              <Typography fontSize={14}>
                <Link href="mailto:Marry@Gmail.com" underline="none" color="inherit">
                  Marry@Gmail.com
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography fontSize={14}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipiscing Elitr, Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: '25px', borderTop: '1px dashed #e0e0e0' }}></Box>
    </Box>
  );
};

export default ProfilePage;
