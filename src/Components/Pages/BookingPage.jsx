import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { services } from '../../data';
import BookingCard from '../BookingCard';
import { useParams } from 'react-router-dom';
import { buildBookingURL } from '../../utils';
import  Container from '@mui/material/Container';

const BookingPage = () => {
    const { id} = useParams();
    const [ service ] = useState(() =>services.find(service => service.id === parseInt(id)));
    return (
        <Container sx={{ height: '100vh'}}>
            <Typography variant="h1">{service?.name}</Typography>
            <Grid container spacing={1}>
                {
                    service?.options?.map(({ title, durationInMinutes, price, description }) => (
                        <Grid item xs={6}>
                            <BookingCard
                                title={title}
                                duration={durationInMinutes}
                                price={price}
                                description={description}
                                bookingUrl={buildBookingURL(service?.name, title)}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default BookingPage;