import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import{ logInOutline, personCircleOutline } from 'ionicons/icons';
import euro from '../assets/euro.jpeg';
import Intro from '../components/intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    const [present,dismiss] = useIonLoading();
    useEffect(
    () => {
        const checkStorage = async () => {
            const seen = await Preferences.get({key: INTRO_KEY});
            console.log('seen', seen); 
            setIntroSeen(seen.value === 'true'); 
        }
        checkStorage();
    },[]
    )
    const doLogin = async (event:any) => {
        event.preventDefault();
        await present('Login');
        setTimeout( async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);

        

    } 
    const finishIntro = async() => {
    
        setIntroSeen(true);
        Preferences.set({key: INTRO_KEY, value: 'true'});

    }
    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({key: INTRO_KEY});
    };

    return (
        <>
        {!introSeen ? (
            <Intro onFinished={finishIntro}/>
        ) : ( 
            <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Arcel Capital</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className='ion-padding'>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <div  className='ion-text-center ion-padding'>
                    <img src={euro} alt='ffc logo' width={'50%'} />
                </div>
                        </IonCol>
                    </IonRow>

                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>

                            
                            <IonInput fill="outline" label="Email" labelPlacement='floating' type="email"></IonInput>
                            <IonInput  className='ion-margin-top' fill="outline" label="password" labelPlacement='floating' type="password"></IonInput>
                            <IonButton className='ion-margin-top' type="submit" expand="block" >
                                 Login
                               <IonIcon icon={logInOutline} slot="end" />
                            </IonButton>
                            <IonButton routerLink='/Register' className='ion-margin-top' color={'secondary'} type="button" expand="block" >
                                 SignUp
                                 <IonIcon icon={personCircleOutline} slot="end"/>
                            </IonButton>
                            <IonButton onClick={seeIntroAgain} size='small' color={'medium'} type='button' fill='clear' expand='block'>
                                See intro Again
                            </IonButton>



                        </form>
                    </IonCardContent>
                </IonCard>
                        </IonCol>
                        </IonRow>
                </IonGrid>
              
                
                
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    {/* jfdffdffg */}
                </IonToolbar>
            </IonFooter>
        </IonPage>

        )}
       
        </>
    );
};

export default Login;