<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>Tipo de Unidades</ion-title>
        <ion-buttons slot="end">
          <ion-icon :icon="addOutline" />
        </ion-buttons>
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
      <div v-if="unitTypes.length == 0" class="loading-center">
        <ion-label>No se encontraron Tipos de Unidad</ion-label>
      </div>
      <ion-list v-else>
        <ion-item v-for="typeUnit in unitTypes" :key="typeUnit.id">{{ typeUnit.name }}</ion-item>
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
import { addOutline } from 'ionicons/icons';
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
      query unitTypes {
        unitType {
          id
          name
        }
      }
    `);

    const unitTypes = useResult(result, null, data => data.unitType)

    return {
      unitTypes,
      loading,
      error,
      addOutline
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
