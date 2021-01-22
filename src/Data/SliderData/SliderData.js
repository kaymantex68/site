import React from 'react'
import i1 from './PicSlider/slide1.png';
import slide1_fon from './PicSlider/slide1_fon.png';
import i2 from './PicSlider/1.png';
import slide2_fon from './PicSlider/slide5_fon.jpg';
import i3 from './PicSlider/3.png';
import slide3_fon from './PicSlider/slide6_fon.jpg';
import imou_brand from './PicSlider/imou_brand.png';
import slide4_fon from './PicSlider/slide7_fon.jpg';

export const SliderData=[
    {
        title: 'Дарим предновогоднюю скидку',
        link_a: '#',
        backColor: '#78C47A',
        backPicture: slide4_fon,
        colorTitle: 'chocolate',
        colorText: '#3C475B',
        path: '',
        pic: imou_brand,
        info: {
            text1: 'На все камеры IMOU -10%',
        },
        // coast: '',
        new: false
        
    },
    {
        title: '@INSTAGRAM',
        link_a: 'https://www.instagram.com/cayman_security/',
        backColor: '#78C47A',
        backPicture: slide1_fon,
        colorTitle: '#3C475B',
        colorText: '#3C475B',
        path: '',
        pic: i1,
        info: {
            text: '',
            text1: '@cayman_security',
            text2: 'Посетите наш инстаграм.',
            text3: 'Мы будем рады ответить на все ваши вопросы.',
            
        },
        // coast: '',
        new: false
        
    },
    {
        title: 'Ranger 2',
        link_b: '/Ranger_2_white',
        backColor: '#78C47A',
        backPicture: slide3_fon,
        colorTitle: 'white',
        colorText: 'white',
        path: '/products',
        pic: i2,
        description: 'Обзор 355°, детекция людей с помощью искусственного интеллекта и режим приватности',
        info: {
            text1: ' - Детекция людей',
            text2: ' - 1080P',
            text3: ' - Обзор 355°',
            text4: ' - Встроенная сирена',
            text5: ' - Интеллектуальное отслеживание',
            text6: ' - Режим приватности',
            text7: ' - Предупреждения об аномальных звуках',
            text8: ' - Ночное видение',
            text9: ' - Двусторонняя аудиосвязь',
            text10: ' - Облако'
        },
        coast: 4390,
        new: true
    },
  
]