export const HelloWorldApp = () => {
  const getSaludo = (name) => {
    return `Hola ${name}`;
  }

  return (
    <>
      <h1>Hola Mundo</h1>
      <p>Soy un subtitulo</p>
      <p>{getSaludo('Alejandro')}</p>
    </>
  );
};