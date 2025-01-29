export const fileUpload = async (file) => {
  if (!file) throw new Error('No tenemos ningún archivo para subir');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dqaa92adf/upload';

  const formData = new FormData();

  formData.append('upload_preset', 'course-react-udemy');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });

    if (!resp.ok) throw new Error('Error al subir la imagen');

    const cloudResponse = await resp.json();
    return cloudResponse.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
