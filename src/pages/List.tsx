import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
  useIonViewWillEnter,
} from "@ionic/react";
import { addOutline, trashBinOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";

const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);
  useIonViewWillEnter(async () => {
    const users = await getUsers();
    console.log(users);
    setUsers(users);
    setLoading(false);
  });
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null >(null);
  const page = useRef(null);

  useEffect( () =>{
    setPresentingElement(page.current);

  }, []);


  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?result=10");
    const users = await data.json();
    setUsers(users.results);
    return users.results;
  };
  const [showAlert] = useIonAlert();
  const clearList = () => {
    showAlert({
      header: "confirm",
      message: "Are you sure you want to delete",
      buttons: [
        {
          text: "cancel",
          role: "cancel",
        },
        {
          text: "delete",
          handler: () => {
            setUsers([]);
            showToast({
              message: "All users deleted",
              duration: 3000,
              color: "danger",
            });
          },
        },
      ],
    });
  };
  const [showToast] = useIonToast();
  const doRefresh = async (event: any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
  };

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButton slot="start">
            <IonMenuButton color={"success"} />
          </IonButton>
          <IonTitle>List</IonTitle>
          <IonButton slot="end">
            <IonButton onClick={clearList}>
              {" "}
              <IonIcon icon={trashBinOutline} color="light" />{" "}
            </IonButton>
          </IonButton>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent />
        </IonRefresher>
        {loading &&
          [...Array(10)].map((_, index) => (
            <IonCard key={index}>
              <IonCardContent className="ion-no-padding">
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonSkeletonText />
                  </IonAvatar>
                  <IonLabel>
                    <IonSkeletonText animated style={{ width: "150px" }} />
                    <p>
                      <IonSkeletonText />
                    </p>
                  </IonLabel>
                  <IonChip slot="end" color="success"></IonChip>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}
        {users.map((user, index) => (
          <IonCard key={index} onClick={() => setSelectedUser(user)}>
            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.thumbnail} />
                </IonAvatar>
                <IonLabel>
                  {user.name.first} {user.name.last}
                  <p>{user.email}</p>
                </IonLabel>
                <IonChip slot="end" color="success">
                  {user.nat}
                </IonChip>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
        <IonModal
          breakpoints={[0, 0.5, 0.8]}
          initialBreakpoint={0.5}
          ref={modal}
          isOpen={selectedUser !== null}
          onIonModalDidDismiss={() => setSelectedUser(null)}
        >
          <IonHeader>
            <IonToolbar color="primary">
              <IonButton slot="start" onClick={() => modal.current?.dismiss()}>
                close
              </IonButton>
              <IonTitle>
                {selectedUser?.name.first} {selectedUser.name.last}{" "}
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>sheret</IonContent>
        </IonModal>
      </IonContent>

      <IonModal ref={cardModal} trigger="card-modal" presentingElement={presentingElement!}>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButton
              slot="start"
              onClick={() => cardModal.current?.dismiss()}
            >
              close
            </IonButton>
            <IonTitle>Card Modal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p> my modal</p>
        </IonContent>
      </IonModal>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton id="card-modal">
          <IonIcon icon={addOutline} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default List;
