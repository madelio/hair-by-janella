import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { PopupModal } from 'react-calendly';

// TODO: create a util for the minutes section
const BookingCard = ({ title, duration, price, description, bookingUrl }) => {
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
                url={bookingUrl}
                rootElement={document.getElementById("root")}
                open={open}
                onModalClose={handleModalClose}
            />

            <Card variant="outlined">
                <CardContent>
                    <Typography><strong>{title}</strong> - <em>${price}</em></Typography>
                    {/* <Typography>{duration} minutes @ ${price}</Typography>
                    <Typography>{description}</Typography> */}
                </CardContent>
                <CardActionArea>
                    <Button onClick={handleBookClick}>Book</Button>
                </CardActionArea>
            </Card>
        </>
    )
}

export default BookingCard;