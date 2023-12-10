import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonRouterOutlet,
  IonItem,
  IonMenuToggle,
  IonButton,
  IonSplitPane,
  IonIcon,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import List from "./List";
import Setting from "./Setting";
import { homeOutline, logOutOutline, newspaperOutline } from "ionicons/icons";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", URL: "/app/list", icon: homeOutline },
    { name: "Setting", URL: "/app/setting", icon: newspaperOutline },
  ];
  return (
    <IonPage>
      <IonSplitPane contentId="main" when="md">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"primary"}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  routerLink={item.URL}
                  routerDirection="none"
                  key={index}
                >
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonMenuToggle autoHide={false}>
              <IonButton expand="full" routerLink="/" routerDirection="root">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/setting" component={Setting} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
