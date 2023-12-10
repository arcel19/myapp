import { IonButtons,IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Swiper , SwiperSlide,useSwiper} from 'swiper/react';
import 'swiper/css';
import intro1Svg from '../assets/intro/1.svg';
import intro2Svg from '../assets/intro/2.svg';
import intro3Svg from '../assets/intro/3.svg';
import './intro.css';


interface ContainerProps {
    onFinished: () => void ;
}

const SwiperButtonNext = ({children}: any) =>{
    const swiper = useSwiper();
    return <IonButton onClick ={()=> swiper.slideNext()}>{children}</IonButton>
}

const Intro: React.FC <ContainerProps> = ( {onFinished}) => {

    return (
        <Swiper>
            <SwiperSlide>
                 <img src={intro1Svg} alt='svg' />
                 <IonText> 
                    <h3> let's build a bright world</h3>
                 </IonText>
                 <SwiperButtonNext> Next</SwiperButtonNext>
             </SwiperSlide>
            <SwiperSlide>
                 <img src={intro2Svg} alt='svg' />
                 <IonText> 
                    <h3> let's build a bright world</h3>
                 </IonText>
                 <SwiperButtonNext> Next</SwiperButtonNext>
             </SwiperSlide>
            <SwiperSlide> 
                <img src={intro3Svg} alt='scg' />
                <IonText> 
                    <h3> let's build a bright world</h3>
                 </IonText>
                 <IonButton onClick={() => onFinished()} >finish</IonButton>
            </SwiperSlide>

        </Swiper>
     
    );
};

export default Intro;