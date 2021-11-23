import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';
interface interfaceFormInput {
	email: string;
	password: string;
}

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(4).max(20).required(),
});

const App: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<interfaceFormInput>({
		resolver: yupResolver(schema),
	});

	const formSubmitHandler: SubmitHandler<interfaceFormInput> = (data: interfaceFormInput) => {
		console.log('form data is', data);
	};

	console.log('Watch variable email', watch('email'));

	return (
		<main>
			<form onSubmit={handleSubmit(formSubmitHandler)} className='form'>
				<input type='text' defaultValue='example@text.com' {...register('email')} />
				<input type='text' {...register('password')} />
				{errors.password && errors.password?.message && <span>{errors.password.message}</span>}
				<input type='submit' value='Submit' />
			</form>
		</main>
	);
};

export default App;
