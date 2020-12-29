<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <simple-modal :is-open="modalInfo.show" @modal-closed="handleModalClosed" />
      <ion-button @click="showModal">Show modal</ion-button>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue';
import SimpleModal from './SimpleModal.vue';
import { reactive } from 'vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: {
    // ExploreContainer,
    SimpleModal,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  },
  setup() {
    const modalInfo = reactive<{ show: boolean; data: any }>({
      show: false,
      data: null
    });

    const showModal = () => {
      modalInfo.show = true;
    };

    const handleModalClosed = (eventData: any) => {
      modalInfo.show = false;
      alert(JSON.stringify(eventData));
    }

    return {
      showModal,
      modalInfo,
      handleModalClosed
    }
  }
}
</script>
