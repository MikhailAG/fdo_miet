import {IconBooks} from '@tabler/icons-react';
import {Button, NavLink} from '@mantine/core';
import {useNavigate} from "../hooks/useNavigate.js";

export function Header() {
    const {navigate} = useNavigate();

    return (
        <div className='w-100 bg-header py-5 flex items-center'>
            <div className='flex space-x-10 w-1/3 pl-20 text-md'>
                <Button variant='subtle' color="rgba(0, 0, 0, 1)" onClick={() => navigate('/')}>Главная
                    страница</Button>
                <Button variant='subtle' color="rgba(0, 0, 0, 1)" onClick={() => navigate('/classes')}>Занятия</Button>
                <Button variant='subtle' color="rgba(0, 0, 0, 1)"
                        onClick={() => navigate('/learning')}>Обучение</Button>
            </div>
            <div className='w-1/3 flex space-x-2 items-end justify-center'>
                <Button leftSection={<IconBooks size={40} strokeWidth={1}/>} variant='subtle' color="rgba(0, 0, 0, 1)"
                        onClick={() => navigate('/')}
                        className='text-2xl'>Universed</Button>
            </div>
            <div className='w-1/3 pr-20 flex flex-col items-end'>
                <NavLink
                    className='w-fit'
                    label="Личный кабинет"
                    childrenOffset={28}
                >
                    <Button variant='subtle' color="rgba(0, 0, 0, 1)" className='w-fit text-md'
                            onClick={() => navigate('/me')}>Перейти</Button>
                    <Button variant='subtle' color="rgba(0, 0, 0, 1)" className='w-fit text-md'
                            onClick={() => {
                                localStorage.removeItem('token');
                                navigate('/login');
                            }}
                    >Выйти</Button>
                </NavLink>
            </div>
        </div>
    )
}
