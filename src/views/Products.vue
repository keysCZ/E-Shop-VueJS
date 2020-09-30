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

      <h3 class="d-inline-block">Tous les produits :</h3>
      <button class="btn btn-primary float-right" @click="addNew">
        Ajouter un produit
      </button>
      <hr />
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
              <td> {{index}} </td>
              <td> {{product.name}} </td>
              <td> {{product.description}} </td>
              <td> {{product.price}} </td>
              <button class="btn btn-primary"><i class="fas fa-pen-alt"></i></button>
              <button class="btn btn-danger" @click="deleteProduct(product)"><i class="far fa-trash-alt"></i></button>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- @ Modal -->
      <div
        class="modal fade"
        id="product"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
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
            <div class="container modal-body">
              <form id="form">
                <div class="row">
                  <div class="col">
                    <legend>Le produit</legend>
                    <hr />
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
                      <label for="descriptionProduct">Description</label>
                      <textarea
                        type="textarea"
                        class="form-control"
                        id="descriptionProduct"
                        placeholder="Huile d'avocat"
                        v-model="product.description"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col">
                    <legend>Détails du produit</legend>
                    <hr />
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
                      <label for="tagProduct">Tags</label>

                      <input
                        type="text"
                        class="form-control"
                        id="tagProduct"
                        placeholder="Enter a product tag"
                        v-model="product.tag"
                      />
                    </div>
                    <div class="custom-file">
                      <input
                        @change="uploadImage()"
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile"
                        >Choisir une image</label
                      >
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
                    @click="addProduct()"
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
      <!--  # Modal -->
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
        description: null,
        tag: null,
        image: null,
      },
      activeItem: null,
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    uploadImage() {},
    addNew() {
      $("#product").modal("show");
    },
    
    updateProduct() {
     
    },
    editProduct(product) {
    
    },
    deleteProduct(doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$firestore.products.doc(doc['.key']).delete()
          Swal.fire(
            'Deleted!',
            'Le produit est supprimé.',
            'success'
          )
        }
      })
    },
    readData() {
      
    },
    addProduct() {
      this.$firestore.products.add(this.product);
      $("#product").modal("hide");
      Toast.fire({
        icon: 'success',
        title: 'Le produit est bien ajouté'
      })
    }
  },
  created() {
    
  }
};
</script>
