<template>
  <div class="products">
    <div class="container h-100 mb-5">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6 ">
            <h3>Tous les produits</h3>
            <p>Create, Read, Update, Delete a product.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/products.svg" alt="productssvg" class="img-fluid" />
          </div>
        </div>
      </div>
      <hr />
      <h3>Let's create a new product :</h3>
      <div class="newproduct ">
        <form>
          <div class="form-group ">
            <label for="nameProduct">Email address</label>
            <input
              type="text"
              class="form-control"
              id="nameProduct"
              placeholder="Enter a product name"
              v-model="product.name"
            />
          </div>
          <div class="form-group">
            <label for="priceProduct">Price</label>
            <input
              type="number"
              class="form-control"
              id="priceProduct"
              placeholder="10,00"
              v-model="product.price"
            />
          </div>
          <button @click="saveData" class="btn btn-primary"> Save product </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import {fb,db} from "../firebase";
export default {
  name: "Products",
  data() {
    return {
      product: {
        name: null,
        price: null
      }
    }
  },
  methods: {
    saveData() {
      db.collection("products")
          .add(this.product)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.clearData();
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
    }
  },
  clearData(){
    Object.assign(this.$data, this.$options.data.apply(this));
  }
};
</script>
