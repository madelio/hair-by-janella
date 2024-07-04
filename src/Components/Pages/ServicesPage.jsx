import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import { services } from '../../data';

const Pricing = () => {
    const navigate = useNavigate();
    return (
        <Container sx={{ height: '100vh' }}>
            <Stack alignItems='center' spacing={5} height="100%" justifyContent="center">
                <Typography variant="h1">Choose Your Service</Typography>
                <Stack direction="row" spacing={1} sx={{ width: '100%' }} justifyContent="center">
                    {
                        services.map(({ name, id }) => (

                            <Card sx={{ width: '250px', height: '250px' }}>
                                <CardHeader
                                    title={name}
                                />
                                <CardMedia />
                                <Button variant="contained" onClick={() => navigate(`/services/${id}`)}>Select</Button>
                            </Card>
                        ))
                    }
                </Stack>
            </Stack>
        </Container>
    )
}

export default Pricing;