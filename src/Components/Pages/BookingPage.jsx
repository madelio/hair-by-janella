import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ButtonGroup from '@mui/material/ButtonGroup';
import { PopupModal } from 'react-calendly';
import { hairServiceDetails, services } from '../../data';
import BookingCard from '../ServiceDetails';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { id} = useParams();
    const [ service ] = useState(() =>services.find(service => service.id === parseInt(id)));
    return (
        <Container sx={{ height: '100vh' }}>
            <Typography variant="h1">{service?.name}</Typography>
            <Grid container spacing={1}>
                {
                    service?.options?.map(({ title, durationInMinutes, price, description,route }) => (
                        <Grid item xs={6}>
                            <BookingCard
                                title={title}
                                duration={durationInMinutes}
                                price={price}
                                description={description}
                                bookingRoute={route}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Service;