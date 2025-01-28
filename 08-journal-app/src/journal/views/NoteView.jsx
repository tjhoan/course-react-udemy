import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';

import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

import { setActiveNote, startSaveNote } from '../../store/journal/auth';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState, dispatch]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSeveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files == 0) return;

    console.log('Subiendo archivos');
    // dispatch(startUploadingFiles(target.files));
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light" color="white">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />

        <IconButton
          sx={{ p: 1 }}
          component="label"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined sx={{ fontSize: 30, color: 'white' }} />
        </IconButton>

        <Button onClick={onSeveNote} disabled={isSaving} sx={{ p: 1, color: 'white' }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
            backgroundColor: '#282828',
            mb: 1
          }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
          sx={{ backgroundColor: '#282828' }}
          InputProps={{
            style: { color: 'white' }
          }}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
