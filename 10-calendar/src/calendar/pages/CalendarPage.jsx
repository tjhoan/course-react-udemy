import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar } from 'react-big-calendar';

import { addHours } from 'date-fns';
import { useState } from 'react';

import { CalendarEvent, CalendarModal, Navbar } from '../';
import { localizer, getMessagesES } from '../../helpers';

const events = [
  {
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: '#fafafa',
    user: {
      _id: '123',
      name: 'Jhon'
    }
  }
];

export const CalendarPage = () => {
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    };

    return {
      style
    };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setlastView(event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />
    </>
  );
};
