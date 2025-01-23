import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { setActiveNote } from '../../store/journal/auth';

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
  const newTitle = title.length > 18 ? `${title.slice(0, 18)}...` : title;
  const newBody = body.length > 45 ? `${body.slice(0, 45)}...` : body;

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.number,
  imageUrls: PropTypes.array
};
