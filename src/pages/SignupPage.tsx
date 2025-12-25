import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router";
import { generateDummyToken } from "../helpers/generateToken";

const signupFormSchema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    companyName: z.string().optional(),
    agency: z.boolean().optional(),
})

const SignupPage = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        mode: "onChange",
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            password: "",
            companyName: "",
        },
    })

    async function onSubmit(values: z.infer<typeof signupFormSchema>) {
        try {
            const token = generateDummyToken();
            const userData = { email: values.email, token };

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/profile");
        } catch (error) {
            console.error("Signup error:", error);
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
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                marginBottom: '20px',
                overflowY: 'auto',
            }}>
                <Box
                    width="55%"
                    sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}
                >
                    <Typography variant="h4" fontWeight="500">
                        Create your PopX account
                    </Typography>
                </Box>
                <Controller
                    name="fullName"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            label="Full Name"
                            variant="outlined"
                            type="text"
                            placeholder='Enter full name'
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
                            placeholder='Enter phone number'
                            fullWidth
                            required
                            size="medium"
                            error={!!error}
                            helperText={error?.message}
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
                            required
                            placeholder='Enter password'
                            fullWidth
                            size="medium"
                            error={!!error}
                            helperText={error?.message}
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
                            placeholder='Enter company name'
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
                            <FormLabel sx={{
                                fontSize: 14,
                                color: 'black',
                                '& .MuiFormLabel-asterisk': {
                                    color: '#d32f2f',
                                },
                            }}>
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
                                    control={<Radio sx={{ color: '#6c63ff', '&.Mui-checked': { color: '#6c63ff' } }} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio sx={{ color: '#6c63ff', '&.Mui-checked': { color: '#6c63ff' } }} />}
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
    )
}

export default SignupPage