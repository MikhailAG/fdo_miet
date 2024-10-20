import {Table} from "@mantine/core";
import {useState} from "react";
import {useNavigate} from "../hooks/useNavigate.js";

export function Learning() {
    const [activeLesson, setActiveLesson] = useState(0);
    const {navigate} = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login')
    }

    return (
        <div>
            <div className='w-1/2 mx-auto flex mt-10'>
                <Table className='w-1/2 mr-5' highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Дисциплина</Table.Th>
                            <Table.Th></Table.Th>
                            <Table.Th>Балл</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr className={'cursor-pointer ' + (activeLesson === 1 && 'bg-gray-100')}
                                  onClick={() => setActiveLesson(1)}>
                            <Table.Td>Математика</Table.Td>
                            <Table.Td>из 40</Table.Td>
                            <Table.Td>
                                <div
                                    className='bg-green-300 rounded-md flex items-center justify-center w-10 h-7'>
                                    30
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr className={'cursor-pointer ' + (activeLesson === 2 && 'bg-gray-100')}
                                  onClick={() => setActiveLesson(2)}>
                            <Table.Td>Информатика</Table.Td>
                            <Table.Td>из 30</Table.Td>
                            <Table.Td>
                                <div
                                    className='rounded-md bg-yellow-100 flex items-center justify-center w-10 h-7'>
                                    7
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr className={'cursor-pointer ' + (activeLesson === 3 && 'bg-gray-100')}
                                  onClick={() => setActiveLesson(3)}>
                            <Table.Td>Русский язык</Table.Td>
                            <Table.Td>из 30</Table.Td>
                            <Table.Td>
                                <div
                                    className='bg-green-100 rounded-md flex items-center justify-center w-10 h-7'>
                                    22
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
                {activeLesson !== 0 && (
                    <div className='w-1/2 pl-5 border-s-2 border-black'>
                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Мероприятие</Table.Th>
                                    <Table.Th>Полученный балл</Table.Th>
                                    <Table.Th>Максимальный балл</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            {activeLesson === 1 &&
                                <Table.Tbody>
                                    <Table.Tr>
                                        <Table.Td>КР1</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-green-300 rounded-md flex items-center justify-center w-10 h-7'>
                                                20
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>20</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td>КР2</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-yellow-100 rounded-md flex items-center justify-center w-10 h-7'>
                                                10
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>20</Table.Td>
                                    </Table.Tr>
                                </Table.Tbody>}
                            {activeLesson === 2 &&
                                <Table.Tbody>
                                    <Table.Tr>
                                        <Table.Td>КР1</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-red-100 rounded-md flex items-center justify-center w-10 h-7'>
                                                5
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>15</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td>КР2</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-red-100 rounded-md flex items-center justify-center w-10 h-7'>
                                                2
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>15</Table.Td>
                                    </Table.Tr>
                                </Table.Tbody>}
                            {activeLesson === 3 &&
                                <Table.Tbody>
                                    <Table.Tr>
                                        <Table.Td>Тест 1</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-green-300 rounded-md flex items-center justify-center w-10 h-7'>
                                                10
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>10</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td>Тест 2</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-green-300 rounded-md flex items-center justify-center w-10 h-7'>
                                                10
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>10</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td>Тест 3</Table.Td>
                                        <Table.Td>
                                            <div
                                                className='mx-auto bg-red-100 rounded-md flex items-center justify-center w-10 h-7'>
                                                2
                                            </div>
                                        </Table.Td>
                                        <Table.Td className='text-center'>10</Table.Td>
                                    </Table.Tr>
                                </Table.Tbody>}
                        </Table>
                    </div>
                )}
            </div>
            <div className='w-1/2 mx-auto mt-10 flex space-x-3 items-center'>
                <p>Общая успеваемость:</p>
                <div className='bg-yellow-100 p-1.5 rounded-md'>удовлетворительно (59 из 100)</div>
            </div>
        </div>
    )
}
