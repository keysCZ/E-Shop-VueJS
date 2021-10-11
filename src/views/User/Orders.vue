<template>
  <div class="user_orders">
    <div class="container h-100">
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6 ">
                    <h3>Mes achats</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, ipsam!</p>
                </div>
                <div class="col-md-6">
                    <img src="/img/orders.svg" alt="orderssvg" class="img-fluid"/>
                </div><hr>
 <!-- @@Orders -->
    <!-- @OrderTable -->
                <div class="container table-responsive">
      <h2>Mes commandes</h2>
      <table class="table" id="categories-table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Date</th>
            <th scope="col">Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ index }}</td>
            <td>{{ order.product_name }}</td>
            <td>{{ order.created_at }}</td>
            <td>{{ order.order_amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../../firebase";
import $ from "jquery";
export default {
    name:"UserOrders",
    data() {
      return {
        orders : [],
        order: {
          order_id : null,
          user_id : null,
          product_name : null,
          order_created_at : null,
          order_amount : null,
          shipping_to : null,
          payment_status : null,
          order_status : null
        }
      }
    },
    firestore(){
      return{
        orders : db.collections('orders')
      }
    },
    methods : {
      addOrder(){
        this.order.order_id = this.$cookies.get("order").id;
        this.order.user_id = this.$cookies.get("user").uid;
        this.order.product_name = this.$cookies.get("order").description;
        this.order.order_created_at = this.$cookies.get("order").create_time;
        this.order.order_amount = this.$cookies.get("order").amount.value;
        this.order.payment_status = this.$cookies.get("order").status;
        this.order.order_shipping_to = this.$cookies.get("order").shipping;
        this.$firestore.orders.add(this.order);
        this.orders.push(this.order);
      }
    }
}
</script>

<style>

</style>