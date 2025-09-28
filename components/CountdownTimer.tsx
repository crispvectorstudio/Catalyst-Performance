import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key] && timeLeft[key] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={key} className="text-center">
        <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white">
            {String(timeLeft[key]).padStart(2, '0')}
        </span>
        <span className="block text-xs sm:text-sm font-semibold text-sky-400 uppercase tracking-widest mt-1">
            {key}
        </span>
      </div>
    );
  });

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-black/30 rounded-lg border border-gray-700/50 backdrop-blur-sm box-glow">
        {timerComponents.length ? (
            <div className="flex justify-center gap-4 sm:gap-8">
                {timerComponents}
            </div>
        ) : (
            <span className="text-2xl font-bold text-white">The Event Has Started!</span>
        )}
    </div>
  );
};

export default CountdownTimer;