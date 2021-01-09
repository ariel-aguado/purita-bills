<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Unidades</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content v-else-if="error">
      <div class="loading-center">
        <ion-label>{{ error.message }}</ion-label>
      </div>
    </ion-content>
    <ion-content v-else-if="!loading" :fullscreen="true">
      <div v-if="units.length == 0" class="loading-center">
        <ion-label>No se encontraron unidades</ion-label>
      </div>
      <ion-list v-else>
        <ion-item v-for="unit in units" :key="unit.id">{{ unit.name }}</ion-item>
      </ion-list>
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
  IonSpinner,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default  {
  name: 'Units',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSpinner,
    IonList,
    IonItem,
    IonLabel,
    IonButtons,
    IonBackButton
  },

  setup() {

    const { result, loading, error } = useQuery(gql`
      query units {
        unit {
          name
        }
      }
    `);

    const units = useResult(result, null, data => data.unit)

    return {
      units,
      loading,
      error
    }
  }
}
</script>

<style>
.loading-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px - 56px);
}

</style>
