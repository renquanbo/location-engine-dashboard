import Image from 'next/image';
import { Button, Card, CardContent, Container, Divider, Input, Link, TextField, Typography, useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from 'next/dist/client/router';
import { LoginRequest } from '../lib/model/login';
import authService from '../lib/services/authService';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const StyledField = styled(TextField)`
  & fieldset {
    border-radius: 16px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    border-radius: 16px;
  }
  margin: 16px 0px 8px;
  width: 100%;
`

const Logo = styled.div`
    height: 32px;
    margin: 16px;
`;


export default function LoginPage() {
  const notMobileDevices = useMediaQuery('(min-width:600px)');
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 64 characters'),
  });
  const { control, handleSubmit, formState: { errors } } = useForm<LoginRequest>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    const loginSuccess = await authService.login(data);
    if (loginSuccess) {
      router.push('/dashboard');
    }
  };
  return (
    <Box sx={{
      backgroundColor: "background.default",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      color: 'text.primary',
    }}>
      <Container maxWidth="sm" sx={{ padding: "11vh 24px 8px" }}>
        <Typography variant={notMobileDevices ? "h3" : "h5"} sx={{ textAlign: "center" }}>Location Engine System</Typography>
        <Card sx={{ minWidth: 275, mt: "8vh", borderRadius: "16px" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", p: 4 }}>
            <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography variant="h4" gutterBottom>
                  Log in
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Log in on the internal platform
                </Typography>
              </div>
              <Logo>
                <Image src="/images/bcd-logo-blue-small.png" alt="logo" width={72} height={48} ></Image>
              </Logo>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 2 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input style={{ display: "none" }} type="password" name="fakepassword" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) =>
                    <StyledField {...field}
                      label="Email address"
                      type="text"
                      inputProps={{
                        autoComplete: "disabled",
                      }}
                      error={errors.email ? true : false}
                      helperText={errors.email?.message}
                    />}
                ></Controller>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) =>
                    <StyledField {...field}
                      label="Password"
                      type="password"
                      inputProps={{
                        autoComplete: "new-password",
                      }}
                      error={errors.password ? true : false}
                      helperText={errors.password?.message}
                    />}
                ></Controller>
                <Button variant="contained" type="submit" sx={{ width: "100%", mt: 2, borderRadius: "16px", p: "8px 22px", textTransform: 'none' }}>Log in</Button>
              </form>
            </Box>
            <Divider sx={{ m: "24px 0px" }} />
            <Link href="/signup" underline="hover" variant="body2" color="textSecondary">
              Create new account
            </Link>
            <Link href="#" underline="hover" variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Forget password
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}