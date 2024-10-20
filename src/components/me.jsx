import {Button} from "@mantine/core";
import {useNavigate} from "../hooks/useNavigate.js";

export function Me() {
    const {navigate} = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login')
    }

    return (
        <div className='w-1/2 mx-auto my-10'>
            <div className='flex items-center space-x-10'>
                <img
                    className='rounded-full w-20 h-20 object-cover'
                    src={'https://yandex-images.clstorage.net/bz4YY9199/2790e1_Ns/sLeulIheYmBoCRSTpQgZu265j8TqF72E0dqVKigpg9CO554Dv4giNbYOT8fjdKBiq5yhCDDj4l5tX-cMZlv7Bf2m75XJdxt8aB1Fv4w4cYsu7L-x5kK14MHH8Rog3WoNQyo_33Jx2oRTJkaatjGkP4aFEKRV0rv-kJ4abKYuDmAczy6ErHYT0ByVCS_1kGmLdsy_nHLKhSWxXgzP9EE66ePyf09qUXK4Tyrqpv5t3RMmfbBVgQK7UkyausAKXu78gFMa2AReFwjsQQnPjdh5Q9pQK9jWDr0pndbYnwgR3o2Xeld7ajXCQHd2ei4KNXm_ChHE-e0Cnx7AIqpcriKS5GS3uvygxrP0eFE9M8kEnZ_ihKfYzhYl_Wku0L-gHZpdQ8KDd1JtzqQ_xhaCHvXBv0btuAWVlvvyMEK27ErmCsx41_aYbAYXaEiB0ctxgHWDznDvTEKCRT01ntSfwEHeLZsWZ0feDRo89wJKSnKFATeSBTwR6Yo7UuQmIlQi9h6AfDM-VDgOP8B00T0L1Uxlb_4Inzg69kFJvWLMU2h1HmF7Jh8_0j1uJGdypp4usW0b8gl44XHma4JcNppUxlpKMORLNpycEu9ceN3Rb8kgKR-mxKe4xkKJjaGegPe0ZYbd_8qTcyZNUuC_BuKSornJC2aBzFHR8vfOzFqCTBIO2miEh3bg1EL7RIip9T8pgB3jylwzdMrCvX2lTtBvQK0eyWe6I8uGvSIwKwKCmrI9aT_6CTS95aqPwlQivswO-qqU0DdyZMA-8wAAfYGT6ciRp_ZAV3i6cuGpEaJMB_h58iFL-g83_lGGEF8iUqYaha2fghFoyd12-8oQOg6QfgKKwIiL_kgwPktogB31z2FYbQ_aSGO0svKd-cVCmEdwyc7Nk7ILi1phdqyvTmKWwhlJj9oNCF39Fne2cEJSXMIC8gR0__b87DYHQGQBXXdliPWn9swPFPZ6sb1p2hxL_Dms'}
                    alt={'avatar'}
                />
                <p className='text-3xl'>Губанов Михаил Александрович</p>
            </div>
            <div className='mt-10'>
                <p className='text-xl'>Роль: студент</p>
            </div>
            <div className='mt-10'>
                <p className='text-2xl'>Оплата обучения:</p>
                <p className='text-xl mt-5'>Обучение оплачено до 01.07.2025 г.</p>
                <div className='space-x-5 flex'>
                    <Button onClick={() => navigate('/learning')} className='mt-5'>Учебный план</Button>
                    <Button variant="outline" className='mt-5'>Продлить</Button>
                </div>
            </div>
        </div>
    )
}
