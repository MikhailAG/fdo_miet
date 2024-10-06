import { IconBooks } from '@tabler/icons-react';
import { NavLink } from '@mantine/core';

export function Header() {
    return (
        <div className='w-100 bg-header py-5 flex items-center'>
            <div className='flex space-x-10 w-1/3 pl-20 text-md'>
                <a href='/'>Главная страница</a>
                <a href='/classes'>Занятия</a>
                <a href='/learning'>Обучение</a>
            </div>
            <div className='w-1/3 flex space-x-2 items-end justify-center'>
                <a href='/'><IconBooks stroke={0.5} size={32}/></a>
                <a href='/' className='text-2xl'>Universed</a>
            </div>
            <div className='w-1/3 pr-20 flex flex-col items-end'>
                <NavLink
                    className='w-fit'
                    label="Личный кабинет"
                    childrenOffset={28}
                >
                    <NavLink className='w-fit text-md' href='/login' label="Выйти" />
                </NavLink>
            </div>
        </div>
    )
}
