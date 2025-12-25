import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAuth } from '../providers/AuthProvider';

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { generateDummyToken } from '../helpers/generateToken';

const loginFormSchema = z.object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});


const LoginPage = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        try {
            const token = generateDummyToken();
            const userData = { email: values.email, token };

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/profile");
        } catch (error) {
            console.error("Login error:", error);
            return;
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                gap: '20px',
                height: '100vh',
                padding: '25px',
                paddingY: '40px',
            }}
        >
            <Box
                width="60%"
                sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}
            >
                <Typography variant="h4" fontWeight="500">
                    Signin to your PopX account
                </Typography>
                <Typography color="#898b8e" fontSize={22}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
            <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        placeholder='Enter email address'
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
                        type="password"
                        placeholder='Enter password'
                        fullWidth
                        required
                        size="medium"
                        error={!!error}
                        helperText={error?.message}
                    />
                )}
            />
            <Button
                onClick={form.handleSubmit(onSubmit)}
                variant="contained"
                color="primary"
                size="large"
                disabled={!form.formState.isValid}
                sx={{ fontWeight: '500', fontSize: 18 }}
            >
                Login
            </Button>
        </Box>
    )
}

export default LoginPage