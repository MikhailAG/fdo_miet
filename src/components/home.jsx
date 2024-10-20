import {Button} from "@mantine/core";

export function Home() {
    return (
        <div>
            <h1 className='absolute left-36 top-52 text-white text-5xl font-bold'>
                Добро пожаловать в<br/>
                онлайн-школу Universed
            </h1>
            <img className='w-full h-96 object-cover' src='banner.png' alt='banner'/>
            <div className='w-1/2 mx-auto my-5'>
                <p className='text-2xl'>Новости</p>
                <div className='flex my-7'>
                    <img className='rounded-2xl h-44 w-72 object-cover' src='opened.png'
                         alt='ai'/>
                    <div className='mx-5'>
                        <p className='text-xl font-medium'>Внедрение искусственного интеллекта для персонализации
                            обучения!</p>
                        <p className='text-md'>Мы интегрировали передовые алгоритмы ИИ в нашу платформу. Теперь система
                            будет адаптировать учебный процесс под индивидуальные потребности каждого студента, повышая
                            эффективность обучения.</p>
                        <Button className='my-5' variant="white">Перейти</Button>
                    </div>
                </div>
                <div className='flex my-7'>
                    <img className='rounded-2xl h-40 w-72 object-cover'
                         src='https://avatars.mds.yandex.net/i?id=74802592f938a545ce322f65f0213a227305de58-5016991-images-thumbs&n=13'
                         alt='harward_univeristy'/>
                    <div className='mx-5'>
                        <p className='text-xl font-medium'>Партнерство с ведущими университетами мира!</p>
                        <p className='text-md'>Наш сайт заключил соглашения о сотрудничестве с топовыми университетами,
                            включая Гарвард, Оксфорд и MIT. Теперь наши студенты смогут получить доступ к эксклюзивным
                            курсам от лучших преподавателей мира.</p>
                        <Button className='my-5' variant="white">Перейти</Button>
                    </div>
                </div>
                <div className='flex my-7'>
                    <img className='rounded-2xl h-44 w-72 object-cover'
                         src='https://avatars.dzeninfra.ru/get-zen_doc/4790423/pub_60a249db13b38951a0df61f3_60a24f0b68e89b2ef9db1ab0/scale_1200'
                         alt='we_are_opened'/>
                    <div className='mx-5'>
                        <p className='text-xl font-medium'>Запуск новой платформы интерактивного обучения!</p>
                        <p className='text-md'>Мы рады объявить о запуске нашей инновационной платформы онлайн-обучения,
                            которая предлагает интерактивные курсы по широкому спектру предметов. Наша цель - сделать
                            образование доступным и увлекательным для всех.
                        </p>
                        <Button className='my-5' variant="white">Перейти</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
