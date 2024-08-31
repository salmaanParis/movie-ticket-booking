import React, { useState } from 'react';

const BookingPage = () => {
  const initialSeats = Array(50).fill('Available'); // Simulated seat availability
  const [seats, setSeats] = useState(initialSeats);
  const [seatNumber, setSeatNumber] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');

  const handleBookTicket = (index) => {
    if (seats[index] === 'Available') {
      const updatedSeats = [...seats];
      updatedSeats[index] = 'Booked';
      setSeats(updatedSeats);
      setSeatNumber(index + 1);
      setBookingStatus('Ticket booked! Your seat number is ' + (index + 1));
    } else {
      setBookingStatus("Sorry, this seat is not available.");
    }
  };

  return (
    <div className="booking-page">
      <h1>Movie Name: "The Great Adventure"</h1>
      <h2>Price per Seat: $10</h2>
      <p>Seats Availability</p>
      <div className="screen">SCREEN</div>
      <div className="seat-grid">
        {seats.map((seat, index) => (
          <div
            key={index}
            className={`seat ${seat.toLowerCase()}`}
            onClick={() => handleBookTicket(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <p className="confirmation">{bookingStatus}</p>
      <style>
        {`
          .booking-page {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 600px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }
          .screen {
            text-align: center;
            background-color: #333;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            font-weight: bold;
          }
          .seat-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 10px;
            margin-top: 20px;
          }
          .seat {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .seat.available:hover {
            background-color: #d4edda;
          }
          .seat.fast-filling {
            background-color: #ffeeba;
          }
          .seat.booked {
            background-color: #f8d7da;
            cursor: not-allowed;
          }
          .seat.booked:hover {
            background-color: #f8d7da;
          }
          .confirmation {
            margin-top: 20px;
            font-weight: bold;
          }
          .seat-grid > div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default BookingPage;

