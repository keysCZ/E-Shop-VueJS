<template>
  <div class="products">
    <div class="container h-100 mb-5">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Gestion des articles</h3>
            <p>Ajouter, mettre à jour, supprimer un produit ou une catégorie.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/products.svg" alt="productssvg" class="img-fluid" />
          </div>
        </div>
        </div>
      </div>
      <hr />

     <h3 class="d-inline-block">Gestion des produits :</h3>
      
      <hr /> 
      <button class="btn btn-secondary m-3 p-2" @click="addNewCg">
        Ajouter une catégorie
      </button>
      <button class="btn btn-primary m-3 p-2" @click="addNew">
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
      <!-- @@Categories -->
<!-- @ProductTable -->
      <div class="container table-responsive">
        <h2>Les Catégories</h2>
        <table class="table" id="categories-table" >
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Lien</th>
              <th scope="col">Modifier</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="index" class="item-group">
              <td>{{ index }}</td>
              <td>{{ category.cname }}</td>
              <td>{{ category.clink }}</td>
              
              <button class="btn btn-primary mx-3 butn" @click="editCg(category)">
                <b-icon icon="pen"></b-icon>
              </button>
              <button class="btn btn-danger"  @click="deleteCg(category)">
                <b-icon icon="trash2-fill"></b-icon>
              </button>
            </tr>
          </tbody>
        </table>
      </div>

       <!-- @ Modal Categories-->
      <div
        class="modal fade"
        id="category"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">
                Modifier une catégorie :
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
                    <legend>La catégorie</legend>
                    <hr />
                    <div class="form-group">
                      <label for="nameCategory">Nom de la catégorie</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nameCategory"
                        placeholder="Enter a category name"
                        v-model="category.cname"
                      />
                    </div>
                    <div class="form-group">
                      <label for="descriptionCategory">Description</label>
                      
                      <textarea
                        type="text"
                        class="form-control"
                        id="descriptionCategory"
                        placeholder="Description de la catégorie"
                        v-model="category.cdescription"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col">
                    <legend>Détails de la categorie</legend>
                    <hr />
                    <div class="form-group">
                      <label for="priceProduct">Lien</label>
                      <input
                        type="text"
                        class="form-control"
                        id="priceProduct"
                        placeholder="10"
                        v-model="category.clink"
                      />
                    </div>
                    <div class="custom-file">
                      <input
                        @change="uploadBkg"
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">Choisir une image</label>
                    </div>
                    <div class="form-group d-flex">
                        
                          <img :src="category.cbackground" alt="category picture" width="80px">
                          <span class="delete-img" @click="deleteBkg(category.cbackground)"><b-icon icon="x"></b-icon></span>
                        
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
                    @click="addCg()"
                    type="button"
                    class="btn btn-primary"
                    v-if=" modal == 'new'"
                  >
                    Add this category
                  </button>
                  <button
                    @click="updateCg()"
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
      <!--  # Modal Categories-->
      <!-- ##Categories -->

      <!-- @@Products -->
      <!-- @ProductTable -->
      <div class="container table-responsive">
        <h2>Les produits</h2>
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

      <!-- @ Modal Products-->
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
      <!--  # Modal Products-->
      <!-- ##Products -->
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
      // pageSettings: { pageSize: 5 },
      // commands: [{ buttonOption: { content: 'Edit', cssClass: 'e-flat' } }],
      products: [],
      product: {
        name: null,
        price: null,
        description: null,
        tags:[],
        images:[]
      },
      categories: [],
      category: {
        cname: null,
        cdescription: null,
        cbackground: null,
        clink: null
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
      products: db.collection("products"),
      categories : db.collection("categories")
    }
  },
  methods: {
  // PRODUCTS //
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


  // CATEGORIES //


    uploadBkg(e) {
      if (e.target.files[0]) {
       let file = e.target.files[0];
        var storageRef = fb.storage().ref('categories/' + file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Votre fichier ne s\'est pas bien téléchargé',
        })
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
            this.category.cbackground = downloadURL;
            console.log('Fichier disponible à : ', downloadURL);
            Swal.fire(
              'Bien',
              'Votre fichier est téléchargé !',
              'success'
            )
          });
        }); 
      }
    },
    deleteBkg(image){
      let bkg = fb.storage().refFromURL(image);
      this.category.cbackground = ""; 
      bkg.delete().then(() =>{
        console.log('image deleted');
      }).catch((error)=> {
        console.log(error);
      });
    },
    resetCg() {
      this.category = {
        cname: null,
        cdescription: null,
        cbackground: null,
        clink: null
      }
    },
    addNewCg() {
      this.modal = 'new';
      this.resetCg();
      $("#category").modal("show");
    },

    updateCg() {
      this.$firestore.categories.doc(this.category.id).update(this.category);
      Toast.fire({
          icon: 'success',
          title: 'Category updated successfully'
        })
      $("#category").modal("hide");
    },
    editCg(category) {
      this.modal = 'edit';
      this.category = category;
      this.activeItem = category.id;
      $("#category").modal("show");
    },
    deleteCg(category) {
      Swal.fire({
        title: "Etes-vous sûre ?",
        text: "Cette action est irréversible !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprime !",
      }).then((result) => {
        if (result.isConfirmed) {          
          this.category = category;
          this.activeItem = category.id;
          this.$firestore.categories.doc(this.category.id).delete();
          Swal.fire("Supprimée !", "La catégorie est supprimée.", "success");
        }
      });
    },
    addCg() {
      this.$firestore.categories.add(this.category);
      $("#category").modal("hide");
      Toast.fire({
        icon: 'success',
        title: 'La catégorie est ajouté !'
      })
    },
  },
    computed : {
      nbCard(){
        if($("#all-card")){
        return this.products.length;
      }
    }
  },
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
