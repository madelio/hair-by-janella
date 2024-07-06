import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, useHistory } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <Container sx={{ height: '100vh'}}>
            <Stack alignItems='center' justifyContent="space-around" height="100%">
                <Box>
                    <Typography variant="h1">Hair by</Typography>
                    <Typography variant="h1">Janella</Typography>
                    <Typography variant="body">Stylist & Makeup Artist</Typography>
                </Box>
                <Button 
                    variant="outlined" 
                    onClick={() => navigate('/services')}
                    // onClick={() => setOpenBookingModal(true)}
                >Book Online</Button>
            </Stack>
        </Container>
    )
}

export default LandingPage;