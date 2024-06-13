import React from 'react';
import ScheduleItem from './ScheduleItem';
import './Calendar.css';

const Calendar: React.FC = () => {
  // Example pseudo data
  const schedule = [
    { day: 1, time: '13:00-13:45', subject: 'Математика' },
    { day: 2, time: '13:00-13:45', subject: 'Математика' },
    // ... more schedule data
  ];

  return (
    <div className="calendar">
      <h1>Март 2024</h1>
      <div className="calendar-grid">
        {Array.from({ length: 31 }).map((_, index) => (
          <div className="calendar-day" key={index}>
            <div className="day-header">День {index + 1}</div>
            {schedule
              .filter(item => item.day === index + 1)
              .map(item => (
                <ScheduleItem key={item.time} time={item.time} subject={item.subject} />
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;