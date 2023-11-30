// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const targetDate = new Date('December 27, 2023 15:00:00').getTime(); // Defina sua data alvo aqui
  console.log(targetDate)
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (unit) => String(unit).padStart(2, '0');

  return (
    <div className="text-4xl text-center mt-8">
      <div>{`${formatTimeUnit(timeRemaining.days)} days`}</div>
      <div>{`${formatTimeUnit(timeRemaining.hours)}:${formatTimeUnit(timeRemaining.minutes)}:${formatTimeUnit(timeRemaining.seconds)}`}</div>
    </div>
  );
};

export default Timer;
