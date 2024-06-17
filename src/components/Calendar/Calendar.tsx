import { useState } from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  const renderCells = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear) || 7;
    const cells = [];

    // Previous month's days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDays = daysInMonth(prevMonth, prevMonthYear);

    // Fill initial empty cells with previous month's days
    for (let i = firstDay - 2; i >= 0; i--) {
      cells.push(
        <div className={styles.cell} key={`prev-${i}`}>
          <div className={`${styles.dateNumber} ${styles.otherMonth}`}>{prevMonthDays - i}</div>
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= totalDays; day++) {
      cells.push(
        <div className={styles.cell} key={day}>
          <div className={`${styles.dateNumber} ${styles.currentMonth}`}>{day}</div>
        </div>
      );
    }

    // Fill remaining cells with next month's days
    const totalCells = cells.length;
    for (let i = 1; totalCells + i <= 35; i++) {
      cells.push(
        <div className={styles.cell} key={`next-${i}`}>
          <div className={`${styles.dateNumber} ${styles.otherMonth}`}>{i}</div>
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
        <div className={styles.arrowBack} onClick={handlePreviousMonth}></div>
        <h2 className={styles.dateText}>{monthNames[currentMonth]} {currentYear}</h2>
        <div className={styles.arrowForw} onClick={handleNextMonth}></div>
        <div className={styles.todayBtn} onClick={handleToday}>Сегодня</div>
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
