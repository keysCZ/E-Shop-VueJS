<template>
  <div class="user_purchases">
    <div class="container h-100">
      <div class="intro h-100 mb-5">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Mes achats</h3>
            <p>Consultez vos achats ici.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/orders.svg" alt="profilesvg" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="section">
        <!-- @@Orders -->
        <!-- @OrderTable -->
        <div>
          <button  class="btn btn-secondary btn-lg btn-outline" @click="addOrder">Je veux voir mes achats</button>
        </div>
        <div class="container table-responsive table_order">
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
                <td>{{ order.order_created_at }}</td>
                <td>{{ order.order_amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../../firebase";
import $ from "jquery";
export default {
    name:"UserPurchases",
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
        orders : db.collection('orders')
      }
    },
    methods : {
      addOrder(){
        // var user = fb.auth().currentUser;
        
        // if (user.uid == this.orders) {
          
        // }


        console.log(this.$cookies.get("order"));
        this.order.order_id = this.$cookies.get("order").id;
        this.order.user_id = this.$cookies.get("user").uid;
        this.order.product_name = this.$cookies.get("order").purchase_units[0].description;
        this.order.order_created_at = this.$cookies.get("order").create_time;
        this.order.order_amount = this.$cookies.get("order").purchase_units[0].amount.value;
        this.order.payment_status = this.$cookies.get("order").status;
        this.order.order_shipping_to = this.$cookies.get("order").purchase_units[0].shipping;
        
        
        for (let i = 0; i < this.orders.length; i++) {
          const e = this.orders[0];
          if (this.order.order_id != e.order_id) 
          {
            //this.orders.push(this.order);
            this.$firestore.orders.add(this.order);
          } else{
            // this.orders[i].splice();
          }
        }
         
        console.log(this.orders);
        console.log(this.order);
      }
    }
}
</script>

<style>
label {
  margin-right: 30px;
}
</style>