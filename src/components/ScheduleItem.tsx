import React from 'react';
import './ScheduleItem.css';

interface ScheduleItemProps {
  time: string;
  subject: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, subject }) => {
  return (
    <div className="schedule-item">
      <div className="schedule-time">{time}</div>
      <div className="schedule-subject">{subject}</div>
    </div>
  );
};

export default ScheduleItem;