import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';
interface interfaceFormInput {
	email: string;
	password: string;
}

const App: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<interfaceFormInput>();

  const formSubmitHandler: SubmitHandler<interfaceFormInput> = (data: interfaceFormInput) => {
    console.log('form data is', data);
  }

  console.log('Watch variable email', watch('email'));

	return (
		<main>
			<form onSubmit={handleSubmit(formSubmitHandler)} className='form'>
				<input type='text' defaultValue='example@text.com' {...register('email')} />
				<input type='text' {...register('password', { required: true })} />
				{errors.password && <span>This password field is required!</span>}
				<input type='submit' value='Submit' />
			</form>
		</main>
	);
};

export default App;
