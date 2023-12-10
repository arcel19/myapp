import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Setting: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButton slot="start">
            <IonMenuButton color={'success'} />
          </IonButton>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default Setting;
