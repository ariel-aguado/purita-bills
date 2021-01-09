<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="bills" href="/tabs/bills">
          <ion-icon :icon="readerOutline" />
          <ion-label>Facturas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="clasifiers" href="/tabs/clasifiers">
          <ion-icon :icon="layersOutline" />
          <ion-label>Clasificadores</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { readerOutline, layersOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      readerOutline,
      layersOutline
    }
  }
}
</script>
