import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    } else {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    // Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    // Methods
    startSavingEvent,
    setActiveEvent,
    startDeletingEvent
  };
};
