import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import {
  checkmarkDone,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";
import euro from "../assets/euro.jpeg";

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButton slot="start">
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle>Arcel Capital</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={true} className="ion-padding">
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
            <IonCard>
          <IonCardContent>
            <form onSubmit={doRegister}>
              <IonInput
                fill="outline"
                label="Email"
                labelPlacement="floating"
                type="email"
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                fill="outline"
                label="password"
                labelPlacement="floating"
                type="password"
              ></IonInput>
              <IonButton
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                create an account
                <IonIcon icon={checkmarkDone} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

     
      </IonContent>
      <IonFooter>
        <IonToolbar>jfdffdffg</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
