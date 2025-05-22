import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {CardRegister, SignInContainer} from '../utils/style.js'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

const Register = () => {

  return (
        <div>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <CardRegister variant="outlined">
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
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="firstname">First Name</FormLabel>
                                        <TextField
                                        // error={nameError}
                                        // helperText={nameErrorMessage}
                                        id="firstname"
                                        type="text"
                                        name="name"
                                        placeholder="Type Your Name"
                                        autoComplete="name"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        // color={emailError ? 'error' : 'primary'}
                                        />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="lastname">Last Name</FormLabel>
                                    <TextField
                                    // error={nameError}
                                    // helperText={nameErrorMessage}
                                    id="lastname"
                                    type="text"
                                    name="name"
                                    placeholder="Type Your Name"
                                    autoComplete="name"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    // color={emailError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="username">Username</FormLabel>
                                        <TextField
                                        // error={nameError}
                                        // helperText={nameErrorMessage}
                                        id="username"
                                        type="text"
                                        name="name"
                                        placeholder="Type Your Name"
                                        autoComplete="name"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        // color={emailError ? 'error' : 'primary'}
                                        />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <TextField
                                    // error={emailError}
                                    // helperText={emailErrorMessage}
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Type Your Email"
                                    autoComplete="email"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    // color={emailError ? 'error' : 'primary'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth style={{marginTop: 23}}>
                                    <InputLabel id="demo-simple-select-label">Classes</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    //   value={age}
                                    label="Classes"
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={'X'}>X</MenuItem>
                                        <MenuItem value={'XI'}>XI</MenuItem>
                                        <MenuItem value={'XII'}>XII</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth style={{marginTop: 23}}>
                                    <InputLabel id="demo-simple-select-label">Major</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    //   value={age}
                                    label="major"
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={'PPLG'}>PPLG</MenuItem>
                                        <MenuItem value={'TJKT'}>TJKT</MenuItem>
                                        <MenuItem value={'DKV'}>DKV</MenuItem>
                                        <MenuItem value={'TKRO'}>TKRO</MenuItem>
                                        <MenuItem value={'TBSM'}>TBSM</MenuItem>
                                        <MenuItem value={'TMP'}>TMP</MenuItem>
                                        <MenuItem value={'HR'}>HR</MenuItem>
                                        <MenuItem value={'MPLB'}>MPLB</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth style={{marginTop: 23}}>
                                    <InputLabel id="demo-simple-select-label">Gander</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    //   value={age}
                                    label="gander"
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={'M'}>Male</MenuItem>
                                        <MenuItem value={'F'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
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
                            </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        //   onClick={validateInputs}
                        >
                            Sign Up
                        </Button>
                        <center>                
                            <Link to={'/login'}>
                                Have Account?
                            </Link>
                        </center>
                    </Box>
                </CardRegister>
            </SignInContainer>
        </div>
    )
}

export default Register