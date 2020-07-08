import React, { useMemo, useState } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

function Dashboard() {
  const [date, setDate] = useState(new Date());
  const formattedDate = useMemo(() => format(date, 'MMMM d'), [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{formattedDate}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time isPast>
          <strong>08:00</strong>
          <span>Vinicius Sousa</span>
        </Time>
        <Time isAvailable>
          <strong>09:00</strong>
          <span>Available</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Vinicius Sousa</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Vinicius Sousa</span>
        </Time>
      </ul>
    </Container>
  );
}

export default Dashboard;
