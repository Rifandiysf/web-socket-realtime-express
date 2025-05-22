import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {Card, SignInContainer} from '../utils/style.js'

const Login = () => {

  return (
    <div>
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
            <Card variant="outlined">
                <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
                    Sign in
                </Typography>
                <Box
                component="form"
                // onSubmit={handleSubmit}
                noValidate
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2,
                }}>
                    <FormControl>
                        <FormLabel htmlFor="Username">Username</FormLabel>
                            <TextField
                            // error={UsernameError}
                            // helperText={UsernameErrorMessage}
                            id="Username"
                            type="Username"
                            name="Username"
                            placeholder="Type Your Username"
                            autoComplete="Username"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            // color={emailError ? 'error' : 'primary'}
                            />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                            // error={passwordError}
                            // helperText={passwordErrorMessage}
                            name="password"
                            placeholder="Type Your Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            // color={passwordError ? 'error' : 'primary'}
                            />
                    </FormControl>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    //   onClick={validateInputs}
                    >
                        Sign in
                    </Button>
                    <center>                
                        <Link to={'/register'}>
                            Register Here!
                        </Link>
                    </center>
                </Box>
            </Card>
        </SignInContainer>
    </div>
  )
}

export default Login