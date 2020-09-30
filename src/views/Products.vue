<template>
  <div class="products">
    <div class="container h-100 mb-5">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
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
      <div class="newproduct">
        <form id="form">
          <div class="form-group">
            <label for="nameProduct">Nom du produit</label>
            <input
              type="text"
              class="form-control"
              id="nameProduct"
              placeholder="Enter a product name"
              v-model="product.name"
            />
          </div>
          <div class="form-group">
            <label for="priceProduct">Prix</label>
            <input
              type="number"
              class="form-control"
              id="priceProduct"
              placeholder="10"
              v-model="product.price"
            />
          </div>
          <div class="form-group">
            <label for="descriptionProduct">Description</label>
            <input
              type="text"
              class="form-control"
              id="descriptionProduct"
              placeholder="Huile d'avocat"
              v-model="product.description"
            />
          </div>
          <button
            @click.prevent="saveData"
            type="submit"
            class="btn btn-primary form-control"
          >
            Save product
          </button>
        </form>
      </div>
      <hr />
      <h3>Tous les produits :</h3>
      <br />
      <div class="container table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
              <th scope="col">Prix</th>
              <th scope="col">Modifier</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <th scope="row">{{ index }}</th>
              <td>{{ product.data().name }}</td>
              <td>{{ product.data().description }}</td>
              <td>{{ product.data().price }}</td>
              <td>
                <button
                  class="btn btn-secondary mx-3"
                  @click="editProduct(product)"
                >
                  <i class="fas fa-pen-alt"></i>
                </button>
                <button
                  class="btn btn-danger mx-3"
                  @click="deleteProduct(product.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div
        class="modal fade px-3"
        id="editModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">
                Modifier un produit :
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
            <div class="modal-body">
              <form id="form">
                <div class="form-group">
                  <label for="nameProduct">Nom du produit</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameProduct"
                    placeholder="Enter a product name"
                    v-model="product.name"
                  />
                </div>
                <div class="form-group">
                  <label for="priceProduct">Prix</label>
                  <input
                    type="number"
                    class="form-control"
                    id="priceProduct"
                    placeholder="10"
                    v-model="product.price"
                  />
                </div>
                <div class="form-group">
                  <label for="descriptionProduct">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="descriptionProduct"
                    placeholder="Huile d'avocat"
                    v-model="product.description"
                  />
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
                    @click="updateProduct()"
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
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import $ from "jquery";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
        description: null
      },
        activeItem: null,
    };
  },
  methods: {
    watcher(){
      db.collection("products").onSnapshot((querySnapshot) => {
        this.products = [];
          querySnapshot.forEach((doc) => {
              this.products.push(doc);
          });
      });
    },
    updateProduct() {
      db.collection("products").doc(this.activeItem).update(this.product)
        .then(() => {
          this.watcher();
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    editProduct(product) {
      $("#editModal").modal("show");
      this.product = product.data();
      this.activeItem = product.id;
    },
    deleteProduct(doc) {
      if (confirm("Are you sure ?")) {
        db.collection("products")
          .doc(doc)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
      } else {
      }
    },
    readData() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc);
          });
        });
    },
    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    clearData() {
      //Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
  created() {
    this.readData();
  },
};
</script>
