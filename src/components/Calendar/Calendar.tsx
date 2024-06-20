
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPreviousMonth, setNextMonth, setToday, Lesson } from '../../store/slices/CalendarSlice';
import styles from './Calendar.module.css';
import { RootState } from '../../store';

const Calendar: React.FC = () => {
  const dispatch = useDispatch();
  const { lessons, currentMonth, currentYear, selectedDate } = useSelector((state: RootState) => state.calendar);

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const renderLessons = (date: Date) => {
    const today = new Date();
    return lessons
      .filter((lesson: Lesson) => lesson.date.toDateString() === date.toDateString())
      .map((lesson: Lesson, index: number) => {
        let lessonClass = '';
        if (date < today) lessonClass = styles.pastLesson;
        else if (date.toDateString() === today.toDateString()) lessonClass = styles.todayLesson;
        else lessonClass = styles.futureLesson;

        const startTime = lesson.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endTime = new Date(lesson.date.getTime() + 45 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
          <div key={index} className={`${styles.lesson} ${lessonClass}`}>
            <div>{startTime} - {endTime}</div>
            <div>{lesson.title}</div>
          </div>
        );
      });
  };

  const renderCells = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear) || 7;
    const cells = [];

    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDays = daysInMonth(prevMonth, prevMonthYear);

    for (let i = firstDay - 2; i >= 0; i--) {
      const date = new Date(prevMonthYear, prevMonth, prevMonthDays - i);
      cells.push(
        <div className={styles.cell} key={`prev-${i}`}>
          <div className={`${styles.dateNumber} ${styles.otherMonth}`}>{prevMonthDays - i}</div>
          {renderLessons(date)}
        </div>
      );
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();

      cells.push(
        <div className={`${styles.cell} ${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`} key={day}>
          <div className={`${styles.dateNumber} ${styles.currentMonth}`}>{day}</div>
          {renderLessons(date)}
        </div>
      );
    }

    const totalCells = cells.length;
    for (let i = 1; totalCells + i <= 35; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      cells.push(
        <div className={styles.cell} key={`next-${i}`}>
          <div className={`${styles.dateNumber} ${styles.otherMonth}`}>{i}</div>
          {renderLessons(date)}
        </div>
      );
    }

    return cells;
  };

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.controls}>
        <div className={styles.arrowBack} onClick={() => dispatch(setPreviousMonth())}></div>
        <h2 className={styles.dateText}>{monthNames[currentMonth]} {currentYear}</h2>
        <div className={styles.arrowForw} onClick={() => dispatch(setNextMonth())}></div>
        <div className={styles.todayBtn} onClick={() => dispatch(setToday())}>Сегодня</div>
        <div className={styles.questionBtn}></div>
      </div>
      <div className={styles.weekDays}>
        {weekDays.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className={styles.grid}>
        {renderCells()}
      </div>
    </div>
  );
};

export default Calendar;
