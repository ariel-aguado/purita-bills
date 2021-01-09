<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Clasificadores</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card router-link="/tabs/clasifiers/units">
              <ion-card-header class="card__header">
                <ion-icon class="card__icon" :icon="businessOutline" />
              </ion-card-header>
              <ion-card-content class="card__content">
                <ion-label>Unidades</ion-label>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card router-link="/tabs/clasifiers/unittypes">
              <ion-card-header class="card__header">
                <ion-icon class="card__icon" :icon="gitPullRequestOutline" />
              </ion-card-header>
              <ion-card-content class="card__content">
                <ion-label>Tipo de Unidades</ion-label>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardContent
} from '@ionic/vue';
import { businessOutline, gitPullRequestOutline  } from 'ionicons/icons';

export default  {
  name: 'classifiers',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonLabel,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardContent
  },
  setup() {
    return {
      businessOutline,
      gitPullRequestOutline
    }
  }
}
</script>

<style scoped>

.card__header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__icon {
  height: 35px;
  width: 35px;
}

ion-card-content {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}

</style>
