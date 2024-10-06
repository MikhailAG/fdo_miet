export function Footer() {
    return (
        <div className='w-100 bg-blue-950 py-10 px-20 flex justify-between'>
            <div className='flex flex-col text-white ml-10 space-y-3 px-5 border-r-2'>
                <a href='/'>Главная страница</a>
                <a href='/classes'>Занятия</a>
                <a href='/learning'>Обучение</a>
            </div>
            <div className='text-white text-center'>
                Сайт сделан студентом университета НИУ МИЭТ<br/>
                Губановым Михаилом Александровичем группы П-42<br/>
                с использованием технологий React + Vite и Ruby on Rails<br/>
                для дисциплины «Практикум по разработке корпоративного портала»
            </div>
            <div className='flex flex-col text-right text-white ml-10 space-y-3 px-5 border-l-2'>
                <a href='mailto:questions@education.msk.ru'>questions@education.msk.ru</a>
                <a href='tel:88007659890'>8 (800) 765-98-90</a>
                <h2>ООО «УНИВЕРСЕД»</h2>
            </div>
        </div>
    )
}
