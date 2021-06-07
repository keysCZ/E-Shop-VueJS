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
      </div>
      <hr />

     <h3 class="d-inline-block">Tous les produits :</h3>
      
      <hr /> <button class="btn btn-primary" @click="addNew">
        Ajouter un produit
      </button>
      <hr>
      <!-- <ejs-grid :dataSource="products" :allowPaging="true" :pageSettings='pageSettings' :commandClick='editProduct' >
        <e-columns>
          <e-column field='name' headerText='Nom du produit' textAlign='Center'></e-column>
          <e-column field='price' headerText='Prix' textAlign='Center' format="C2"></e-column>
          <e-column headerText='Commands' width=150 :commands='commands'></e-column>
        </e-columns>
      </ejs-grid> -->
      <div class="container table-responsive">
        <table class="table" id="products-table" >
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prix</th>
              <th scope="col">Modifier</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index" class="item-group">
              <td>{{ index }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              
              <button class="btn btn-primary mx-3 butn" @click="editProduct(product)">
                <b-icon icon="pen"></b-icon>
              </button>
              <button class="btn btn-danger"  @click="deleteProduct(product)">
                <b-icon icon="trash2-fill"></b-icon>
              </button>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <button @click="rows()">Data</button> -->
      <div v-if="products.length"><pagination :nbcard="nbCard"></pagination></div>

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
                      <vue-editor v-model="product.description"></vue-editor>
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
                        @keyup.188="addTag"
                        id="tagProduct"
                        placeholder="Enter a product tag"
                        v-model="tag"
                      />
                    </div>
                    <div class="form-group d-flex">
                      <div class="p-1" v-for="tag in product.tags" :key="tag.i">
                        <span>{{tag}}</span>
                      </div>
                    </div>
                    <div class="custom-file">
                      <input
                        @change="uploadImage"
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">Choisir une image</label>
                    </div>
                    <div class="form-group d-flex">
                        <div class="p-1 img-wrap"
                          v-for="(image, index) in product.images" :key="image.i"
                        >
                          <img :src="image" alt="product picture" width="80px">
                          <span class="delete-img" @click="deleteImage(image, index)"><b-icon icon="x"></b-icon></span>
                        </div>
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
                    v-if=" modal == 'new'"
                  >
                    Add this product
                  </button>
                  <button
                    @click="updateProduct()"
                    type="button"
                    class="btn btn-primary"
                    v-if=" modal == 'edit'"
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
</template>

<script>
import { VueEditor } from "vue2-editor";
// import { GridPlugin, Page, Toolbar, Edit, CommandColumn } from '@syncfusion/ej2-vue-grids';
import { fb, db } from "../../firebase";
import $ from "jquery";
export default {
  name: "Products",
  components: {
    VueEditor,
    pagination : () => import(/*webpackChunkName: "pagination"*/'@/components/Contents/Pagination.vue'),

    // GridPlugin,
    // Page
  },
  data() {
    return {
      products: [],
      // pageSettings: { pageSize: 5 },
      // commands: [{ buttonOption: { content: 'Edit', cssClass: 'e-flat' } }],
      product: {
        name: null,
        price: null,
        description: null,
        tags:[],
        images:[]
      },
      activeItem: null,
      modal: null,
      tag : null,
      
    }
  },
  // provide: {
  //   grid: [Page, Edit, Toolbar, CommandColumn]
  // },
  firestore() {
    return {
      products: db.collection("products")
    }
  },
  methods: {
    
    addTag() {
        this.product.tags.push(this.tag);
        this.tag = "";
    },
    uploadImage(e) {
      if (e.target.files[0]) {
       let file = e.target.files[0];
        var storageRef = fb.storage().ref('products/' + file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Your file isn\'t well upload',
        })
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
            this.product.images.push(downloadURL);
            console.log('File available at', downloadURL);
            Swal.fire(
              'Nice',
              'Your file is upload successfully !',
              'success'
            )
          });
        }); 
      }
    },
    deleteImage(image, index){
      let img = fb.storage().refFromURL(image);
      this.product.images.splice(index,1);
      img.delete().then(() =>{
        console.log('image deleted');
      }).catch((error)=> {
        console.log(error);
      });
    },
    reset() {
      this.product = {
        name: null,
        price: null,
        description: null,
        tags:[],
        images:[]
      }
    },
    addNew() {
      this.modal = 'new';
      this.reset();
      $("#product").modal("show");
    },

    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      Toast.fire({
          icon: 'success',
          title: 'Product updated successfully'
        })
      $("#product").modal("hide");
    },
    editProduct(product) {
      this.modal = 'edit';
      this.product = product;
      this.activeItem = product.id;
      $("#product").modal("show");
    },
    deleteProduct(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {          
          this.product = product;
          this.activeItem = product.id;
          this.$firestore.products.doc(this.product.id).delete();
          Swal.fire("Deleted!", "Le produit est supprimé.", "success");
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);
      $("#product").modal("hide");
      Toast.fire({
        icon: 'success',
        title: 'Product added successfully'
      })
    },
  },
    computed : {
      nbCard(){
        if($("#all-card")){
          $(".item-group").removeClass('d-flex');
          $(".item-group").removeClass('d-none');
        return this.products.length;
      }
    }
  },
  mounted(){
    
          $(".item-group").removeClass('d-flex');
          $(".item-group").removeClass('d-none');
  }
};
</script>
<style scoped>
/* @import '../../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css'; */
.butn{
  background: radial-gradient(circle, rgba(242,242,190,1) 0%, rgba(148,187,233,1) 100%)!important;
}
.img-wrap{
  position:relative;
}
.img-wrap span.delete-img{
  position: absolute;
  margin:1px;
}
.img-wrap span.delete-img:hover{
  cursor: pointer;
}
</style>
