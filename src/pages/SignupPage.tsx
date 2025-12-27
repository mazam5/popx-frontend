import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as z from 'zod';
import { generateDummyToken } from '../helpers/generateToken';
import { useAuth } from '../providers/AuthProvider';

const signupFormSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  companyName: z.string().optional(),
  agency: z.boolean(),
});

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      const token = generateDummyToken();
      const userData = { email: values.email, token };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/profile');
    } catch (error) {
      console.error('Signup error:', error);
      return;
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        justifyContent: 'space-between',
        gap: '20px',
        height: '100vh',
        padding: '25px',
        paddingY: '40px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          marginBottom: '20px',
          // overflowY: 'auto',
        }}
      >
        <Box width="40%" sx={{ marginBottom: '22px' }}>
          <Typography variant="h4" fontWeight="500" fontSize={28}>
            Create your PopX account
          </Typography>
        </Box>
        <Controller
          name="fullName"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              autoFocus
              label="Full Name"
              variant="outlined"
              type="text"
              placeholder="Enter full name"
              fullWidth
              required
              size="medium"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Phone Number"
              variant="outlined"
              type="tel"
              inputMode="numeric"
              placeholder="Enter phone number"
              fullWidth
              required
              size="medium"
              error={!!error}
              helperText={error?.message}
              slotProps={{
                htmlInput: { maxLength: 10 },
                input: {
                  startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                },
              }}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                field.onChange(value);
              }}
            />
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Email Address"
              variant="outlined"
              type="email"
              placeholder="Enter email address"
              fullWidth
              required
              size="medium"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Enter password"
              fullWidth
              size="medium"
              error={!!error}
              helperText={error?.message}
              slotProps={{
                input: {
                  endAdornment: field.value ? (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ) : null,
                },
              }}
            />
          )}
        />
        <Controller
          name="companyName"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Company Name"
              variant="outlined"
              type="text"
              placeholder="Enter company name"
              fullWidth
              size="medium"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="agency"
          control={form.control}
          render={({ field: { value, onChange, ...field }, fieldState: { error } }) => (
            <FormControl required error={!!error}>
              <FormLabel
                sx={{
                  fontSize: 14,
                  color: 'black',
                  '& .MuiFormLabel-asterisk': {
                    color: '#d32f2f',
                  },
                }}
              >
                Are you an Agency?
              </FormLabel>
              <RadioGroup
                {...field}
                value={value === undefined ? '' : String(value)}
                onChange={(e) => onChange(e.target.value === 'true')}
                row
                aria-labelledby="agency-radio-group-label"
              >
                <FormControlLabel
                  value="true"
                  control={
                    <Radio sx={{ color: '#6c63ff', '&.Mui-checked': { color: '#6c63ff' } }} />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={
                    <Radio sx={{ color: '#6c63ff', '&.Mui-checked': { color: '#6c63ff' } }} />
                  }
                  label="No"
                />
              </RadioGroup>
              {error && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                  {error.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
      </Box>

      <Button
        onClick={form.handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        size="large"
        disabled={!form.formState.isValid}
        sx={{ fontWeight: '500', fontSize: 18 }}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default SignupPage;
