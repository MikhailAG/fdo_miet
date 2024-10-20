import {Button, PasswordInput, TextInput} from '@mantine/core';
import {useState} from "react";
import {useNavigate} from "../hooks/useNavigate.js";

export function Login() {
    const [login, setLogin] = useState('');
    const [errors, setErrors] = useState();
    const [password, setPassword] = useState('');
    const valid = password !== '' && login !== ''
    const {navigate} = useNavigate();

    const submit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'email': login, 'password': password}),
            });

            if (!response.ok) {
                throw new Error('Неверный логин или пароль');
            }

            const result = await response.json();
            localStorage.setItem('token', result.token);
            navigate('/me')
        } catch (error) {
            setErrors(error.message);
        }
    };

    return (
        <div className='w-1/4 mx-auto my-10 space-y-5'>
            {errors && (
                <p>{errors}</p>
            )}
            <TextInput value={login} onChange={(event) => setLogin(event.currentTarget.value)} radius='md'
                       label='Логин'/>
            <PasswordInput value={password} onChange={(event) => setPassword(event.currentTarget.value)} radius='md'
                           label='Пароль'/>
            <Button color="#01183a" onClick={submit} data-disabled={!valid}>Войти</Button>
        </div>
    );
}
