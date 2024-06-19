
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './CountdownTimer.module.css';

export const CountdownTimer: React.FC = () => {
  const lessons = useSelector((state: RootState) => state.calendar.lessons);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number} | null>(null);

  const getNextLessonDate = () => {
    const now = new Date();
    return lessons.find(lesson => lesson.date > now)?.date || null;
  };

  const calculateTimeLeft = (date: Date) => {
    const now = new Date();
    const difference = date.getTime() - now.getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  };

  useLayoutEffect(() => {
    const nextLessonDate = getNextLessonDate();
    if (!nextLessonDate) return;

    const updateTimer = () => {
        setTimeLeft(calculateTimeLeft(nextLessonDate));
      };
  
      updateTimer();
      const interval = setInterval(updateTimer, 1000);
  
      return () => clearInterval(interval);
    }, [lessons]);

  if (!timeLeft) return null;

  return (
    <div id={styles.timerContainer}>
      <div>Следующее занятие<br />начнется через:</div>
      <div className={styles.time}>
        <span>{timeLeft.days} д </span>
        <span>{timeLeft.hours} ч </span>
        <span>{timeLeft.minutes} мин </span>
      </div>
      <button className={styles.timeLeftBtn}>Button</button>
    </div>
  );
};
