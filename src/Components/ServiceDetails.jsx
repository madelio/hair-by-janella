import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { PopupModal } from 'react-calendly';
import { CALENDLY_BASE } from '../constants';

// TODO: create a util for the minutes section
const BookingCard = ({ title, duration, price, description, bookingRoute }) => {
    const [open, setOpen] = useState(false);
    const handleModalClose = () => {
        setOpen(false);
    }
    const handleBookClick= () => {
        setOpen(true);
    }
    return (
        <>
            <PopupModal
                url={`${CALENDLY_BASE}${bookingRoute}`}
                rootElement={document.getElementById("root")}
                open={open}
                onModalClose={handleModalClose}
            />

            <Card variant="outlined">
                <CardContent>
                    <Typography><strong>{title}</strong></Typography>
                    <Typography>{duration} minutes @ ${price}</Typography>
                    <Typography>{description}</Typography>
                </CardContent>
                <CardActionArea>
                    <Button onClick={handleBookClick}>Book</Button>
                </CardActionArea>
            </Card>
        </>
    )
}

export default BookingCard;