<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Facturas</ion-title>
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
      <div v-if="bills.length == 0" class="loading-center">
        <ion-label>No se encontraron facturas</ion-label>
      </div>
      <ion-list v-else>
        <ion-item v-for="bill in bills" :key="bill.id">{{ bill.number }}</ion-item>
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
  IonLabel
} from '@ionic/vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default  {
  name: 'Bills',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSpinner,
    IonList,
    IonItem,
    IonLabel
  },

  setup() {

    const { result, loading, error } = useQuery(gql`
      query bills {
        bill {
          amount
          bonus
          delivery
          id
          number
        }
      }
    `);

    const bills = useResult(result, null, data => data.bill)

    return {
      bills,
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
