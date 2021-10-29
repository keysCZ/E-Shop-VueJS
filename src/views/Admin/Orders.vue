<template>
  <div class="admin_orders">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Les commandes</h3>
            <p>
              Retrouvez ici l'esemble des commanndes des clients. Vous aez la
              possibilité de faire évouluer l'état de la commande.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/orders.svg" alt="orderssvg" class="img-fluid" />
          </div>
          <hr />
          <!-- @@Orders -->
          <!-- @OrderTable -->
          <div class="container table-responsive">
            <h2>Toutes les commandes</h2>
            <table class="table" id="categories-table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Date</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Modifier</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ order.product_name }}</td>
                  <td>{{ order.order_created_at }}</td>
                  <td>{{ order.order_amount }}</td>
                  <td>
                    <button
                      class="btn btn-primary mx-3 butn"
                      @click="editOrder(order)"
                    >
                      <v-icon color="red">mdi-pencil-outline</v-icon>
                    </button>
                    <button class="btn btn-danger" @click="deleteOrder(order)">
                      <v-icon color="red">mdi-delete-sweep-outline</v-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- @ Modal Orders-->
    <div
      class="modal"
      id="order"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">
              Modifier une commande :
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="container modal-body">
            <form id="form2">
              <div class="row">
                <!-- <div class="col-6">
                  <legend>Détails de la commande</legend>
                  <hr />
                   <div >
                    <p >Noms des produits</p>
                    <p>
                      {{order.product_name}}
                    </p>
                  </div>
                  <div >
                    <p>Date de commande</p>
                   <p>
                      {{order.order_created_at}}
                    </p>
                  </div>
                  <div >
                    <p>Montant de commande</p>
                   <p>
                      {{order.order_amount}}
                    </p>
                  </div>    
                  <div >
                    <p>Statut du paiement de lacommande</p>
                   <p>
                      {{order.payment_status}}
                    </p>
                  </div>     
                      <div >
                    
                    <p>Nom du client</p>
                     <p>
                      {{order.order_shipping_to.name.full_name}}
                    </p>
                  <p>Adresse de livraison</p>
                   <p>
                      {{order.order_shipping_to.address.address_line_1}} 
                       {{order.order_shipping_to.address.admin_area_1}} 
                      {{order.order_shipping_to.address.admin_area_2}} 
                      {{order.order_shipping_to.address.country_code}} 
                      {{order.order_shipping_to.address.postal_code}}
                    </p>
                  </div>           
                </div>
                <div class="col-6">
                  <legend>Modifier la commande</legend>
                  <div class="form-group">
                    <label for="statusOrder">Etat de la commande</label><br>
                    <select name="statusOrder" id="" class="form-control" v-model="order.order_status">
                      <option disabled value="">Choisissez</option>
                      <option value="verification">En attente de confirmation</option>
                      <option value="expédie">Expédiée</option>
                      <option value="transit">En transit</option>
                      <option value="livree">Livrée</option>
                    </select>
                    <span>Sélectionné : {{ order.order_status }}</span>
                  </div>
                  <div class="form-group">
                    <label for="shippingnb">Numéro de suivi de livraison</label>
                    <input
                      type="text"
                      class="form-control"
                      id="shippingnb"
                      placeholder="LVGFGHBJ776VHB"
                      v-model="order.shipping_number"
                    />
                  </div>
                </div> -->
                <div>
                  <table class="table" id="categories-table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Noms des produits</th>
                        <th scope="col">Date de commande</th>
                        <th scope="col">Montant de commande</th>
                        <th scope="col">Statut du paiement de la commande</th>
                        <th scope="col">Nom du client</th>
                        <th scope="col">Adresse de livraison</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ order.product_name }}</td>
                        <td>{{ order.order_created_at }}</td>
                        <td>{{ order.order_amount }}</td>
                        <td>{{ order.payment_status }}</td>
                        <td v-if="order.order_shipping_to != null">
                          {{ order.order_shipping_to.name.full_name }}
                        </td>
                        <td v-if="order.order_shipping_to != null">
                          {{ order.order_shipping_to.address.address_line_1 }}
                          {{ order.order_shipping_to.address.admin_area_1 }}
                          {{ order.order_shipping_to.address.admin_area_2 }}
                          {{ order.order_shipping_to.address.country_code }}
                          {{ order.order_shipping_to.address.postal_code }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-12">
                  <legend>Modifier la commande</legend>
                  <div class="form-group col-md-4">
                    <label for="statusOrder">Etat de la commande</label><br />
                    <select
                      name="statusOrder"
                      id=""
                      class="form-control"
                      v-model="order.order_status"
                    >
                      <option disabled value="">Choisissez</option>
                      <option value="verification">
                        En attente de confirmation
                      </option>
                      <option value="expédie">Expédiée</option>
                      <option value="transit">En transit</option>
                      <option value="livree">Livrée</option>
                    </select>
                    <span>Sélectionné : {{ order.order_status }}</span>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="shippingnb">Numéro de suivi de livraison</label>
                    <input
                      type="text"
                      class="form-control"
                      id="shippingnb"
                      placeholder="LVGFGHBJ776VHB"
                      v-model="order.shipping_number"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="shipping_link">Lien de suivi de livraison</label>
                    <input
                      type="text"
                      class="form-control"
                      id="shipping_link"
                      placeholder="https://parcelsapp.com/fr"
                      v-model="order.shipping_link"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click="updateorder()"
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--  # Modal orders-->
  </div>
</template>

<script>
import { fb, db, ad } from "../../firebase";

import $ from "jquery";
export default {
  name: "AdminOrders",
  data() {
    return {
      orders: [],
      order: {
        order_id: null,
        user_id: null,
        product_name: null,
        order_created_at: null,
        order_amount: null,
        shipping_to: null,
        payment_status: null,
        order_status: null,
        shipping_number: null,
        shipping_link: null
      }
    };
  },
  firestore() {
    return {
      orders: db.collection("orders"),
      users: db.collection("users")
    };
  },
  methods: {
    getCUser(uid) {
      ad.auth()
        .getUser(uid)
        .then(userRecord => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        })
        .catch(error => {
          console.log("Error fetching user data:", error);
        });
    },
    updateorder() {
      this.$firestore.orders.doc(this.order.id).update(this.order);
      Toast.fire({
        icon: "success",
        title: "This order is updated successfully"
      });
      $("#order").modal("hide");
      console.log(this.order);
    },
    editOrder(order) {
      this.order = order;

      console.log(this.order.order_shipping_to.address.admin_area_1);
      $("#order").modal("show");
    },
    deleteOrder(order) {
      // Swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!"
      // }).then(result => {
      //   if (result.isConfirmed) {
      //     this.$firestore.orders.doc(order.id).delete();
      //     Swal.fire("Deleted!", "Le produit est supprimé.", "success");
      //   }
      // });
      this.getCUser(order.user_id);
      console.log(order);
    }
  }
};
</script>

<style>
</style>