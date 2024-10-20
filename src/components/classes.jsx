import {Button, Table} from "@mantine/core";
import {useNavigate} from "../hooks/useNavigate.js";

export function Classes() {
    const {navigate} = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login')
    }

    return (
        <div className='w-10/12 mx-auto mt-5'>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Дисциплина</Table.Th>
                        <Table.Th>Дата занятия</Table.Th>
                        <Table.Th>Преподаватель</Table.Th>
                        <Table.Th className='text-center'>Ссылка на конференцию</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>Математика</Table.Td>
                        <Table.Td>20.10.2024 19:00</Table.Td>
                        <Table.Td>Гаченко М.С.</Table.Td>
                        <Table.Td className='text-center'><Button variant='outline'>Перейти</Button></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Информатика</Table.Td>
                        <Table.Td>22.10.2024 19:00</Table.Td>
                        <Table.Td>Лукьяненко А.А.</Table.Td>
                        <Table.Td className='text-center'><Button variant='outline'>Перейти</Button></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Русский язык</Table.Td>
                        <Table.Td>25.10.2024 19:00</Table.Td>
                        <Table.Td>Жигалин С.А.</Table.Td>
                        <Table.Td className='text-center'><Button variant='outline'>Перейти</Button></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Математика</Table.Td>
                        <Table.Td>27.10.2024 19:00</Table.Td>
                        <Table.Td>Гаченко М.С.</Table.Td>
                        <Table.Td className='text-center'><Button variant='outline'>Перейти</Button></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Информатика</Table.Td>
                        <Table.Td>30.10.2024 19:00</Table.Td>
                        <Table.Td>Лукьяненко А.А.</Table.Td>
                        <Table.Td className='text-center'><Button variant='outline'>Перейти</Button></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>Русский язык</Table.Td>
                        <Table.Td>02.11.2024 19:00</Table.Td>
                        <Table.Td>Жигалин С.А.</Table.Td>
                        <Table.Td className='text-center'><Button variant='outline'>Перейти</Button></Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </div>
    )
}
