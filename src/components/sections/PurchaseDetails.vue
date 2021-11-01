<template>
  <div class="PurchaseDetails">
   <b-jumbotron class="section-details">
              <template v-slot:header>
                <h4 class="m-2">
                <strong>
                  <em> Ma Commande :</em>
                </strong>
              </h4>
                <h5 class="pdtname">{{ purchase.product_name }}</h5>
              </template>
<h6> {{ purchase.order_created_at }}</h6>
              <template v-slot:lead> {{ purchase.order_amount }} €</template>
              
              <hr class="my-4" />

               <div class="details"> 
                <h6>Plus de détails</h6>
                <div id="details">
                  <div >
                    <p v-if="purchase.payment_status == 'COMPLETED'">Statut du paiment : Paiement effectué</p>
                  
                   <p v-if="purchase.order_status != null">
                      Statut de votre commande : {{ purchase.order_status }}
                    </p>
                  </div>     
                      <div >
                    
                    <p>Commande effectuée par : 
                      {{purchase.order_shipping_to.name.full_name}}
                    </p>
                  <p>Adresse de livraison : <br>
                      {{purchase.order_shipping_to.address.address_line_1}} 
                       {{purchase.order_shipping_to.address.admin_area_1}} 
                      {{purchase.order_shipping_to.address.admin_area_2}} 
                      {{purchase.order_shipping_to.address.country_code}} 
                      {{purchase.order_shipping_to.address.postal_code}}
                    </p>
                    <p  v-if="purchase.shipping_number != null"> Votre numéro de suivi de livraison : {{ purchase.shipping_number }} <br> Vous pouvez suivre votre colis via  : 
                    <a :href="`https://parcelsapp.com/fr/tracking/${purchase.shipping_number}`">ce lien</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- <b-button variant="primary" href="#">Do Something</b-button> -->
            </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
import {db} from "../../firebase";
export default {
  name: "PurchaseDetails",
  data() {
    return {
      purchase : null
    };
  },
  // firestore(){
  //     return{
  //       orders : db.collection('orders')
  //     }
  // },
  methods: {
    // getImage(images) {
    //   return images[0];
    // },
    // desc() {
    //   let description = this.order.order_description;
    //   $("#details").html(description);
    //   console.log(this.order.order_tags);
    //   console.log(this.order.order_images);
    // }
  },
  computed: {
    getpurchase() {
      // var purchase = this.firestore.doc(`orders/${this.$route.params.id}`);
      var pid = this.$route.params.id;
     db.collection('orders')
  .doc(pid)
  .get()
  .then(snapshot => {
    this.purchase = snapshot.data();
    console.log(this.purchase);
    return this.purchase;
    // do something with document
  })
    }
  },
  mounted() {
    this.getpurchase;
  }
};
</script>
<style scoped>
.container {
  font-family: "Nunito", sans-serif;
  background-color: #f2f1ef;
  /* background-position: center;
  background-attachment: fixed;
  background-size: cover; */
  /* padding: 20px; */
}
.section-details {
  /* width: 60%;
  height: 60%; */
  margin: auto;
}
.jumbotron {
  background-color: none !important;
  text-align: left;
}
#details {
  padding: 10px;
  border-left: solid 1px rgb(12, 11, 11);
  max-height: 230px;
  overflow: auto;
}
#details::-webkit-scrollbar {
  width: 10px; /* width of the entire scrollbar */
}

#details::-webkit-scrollbar-track {
  border: 1px solid lightskyblue;
  border-radius: 20px; /* roundness of the scroll thumb */
  /* color of the tracking area */
}

#details::-webkit-scrollbar-thumb {
  background-color: black; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid #e8ecef; /* creates padding around scroll thumb */
}
.pdtname {
  font-size: 22px;
}
h6 {
  color: grey;
  text-transform: uppercase;
}
</style>
