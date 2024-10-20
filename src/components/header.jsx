import {IconBooks} from '@tabler/icons-react';
import {Button, NavLink} from '@mantine/core';
import {useNavigate} from "../hooks/useNavigate.js";

export function Header() {
    const {navigate} = useNavigate();

    return (
        <div className='w-100 bg-header py-5 flex items-center'>
            <div className='flex space-x-10 w-1/3 pl-20 text-md'>
                <Button onClick={() => navigate('/')}>Главная страница</Button>
                <Button onClick={() => navigate('/classes')}>Занятия</Button>
                <Button onClick={() => navigate('/learning')}>Обучение</Button>
            </div>
            <div className='w-1/3 flex space-x-2 items-end justify-center'>
                <Button onClick={() => navigate('/')}><IconBooks stroke={0.5} size={32}/></Button>
                <Button onClick={() => navigate('/')} className='text-2xl'>Universed</Button>
            </div>
            <div className='w-1/3 pr-20 flex flex-col items-end'>
                <NavLink
                    className='w-fit'
                    label="Личный кабинет"
                    childrenOffset={28}
                >
                    <Button className='w-fit text-md' onClick={() => navigate('/login')}>Выйти</Button>
                </NavLink>
            </div>
        </div>
    )
}
