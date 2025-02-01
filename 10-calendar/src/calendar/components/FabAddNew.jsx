import { useCalendarStore, useUiStore } from '../../hooks';
import { addHours } from 'date-fns';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      _id: new Date().getTime(),
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgcolor: '#fafafa',
      user: {
        _id: '123',
        name: 'Jhon'
      }
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" type="button" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
