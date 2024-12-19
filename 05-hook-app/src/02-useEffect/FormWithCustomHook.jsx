import { useForm } from '../hooks/useForm';

export const FromWithCustomHook = () => {
  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange} />
      <input type="email" className="form-control mt-2" placeholder="email" name="email" value={email} onChange={onInputChange} />
      <input type="password" className="form-control mt-2" placeholder="Password" name="password" value={password} onChange={onInputChange} />
      <button onClick={onResetForm} className="btn btn-primary mt-3">
        Borrar
      </button>
    </>
  );
};
