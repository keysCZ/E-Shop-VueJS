<template>
  <div class="articles">
    <div class="container h-100 mb-5">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Gestion des articles</h3>
            <p>Ajouter, mettre à jour, supprimer un article.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/new_post.svg" alt="postsvg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <hr />

    <h3 class="d-inline-block">Tous les articles :</h3>
    <v-divider></v-divider>

    <button class="btn btn-primary m-3 p-2" @click="addNew()">
      Ajouter un post
    </button>
    <v-divider></v-divider>
    <!-- @@Articles -->
    <!-- @PostTable -->
    <div class="container table-responsive">
      <h2>Les articles</h2>
      <table class="table" id="products-table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in articles" :key="index" class="item-group">
            <td>{{ index }}</td>
            <td>{{ post.title }}</td>

            <button class="btn btn-primary mx-3 butn" @click="editPost(post)">
              <v-icon color="red">mdi-pencil-outline</v-icon>
            </button>
            <button class="btn btn-danger" @click="deletePost(post)">
              <v-icon color="red">mdi-delete-sweep-outline</v-icon>
              
            </button>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <button @click="rows()">Data</button> -->
    <div v-if="articles.length"><pagination :nbcard="nbCard"></pagination></div>

    <!-- @ Modal Products-->
    <div
      class="modal"
      id="post"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">
              Modifier un article :
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
            <form id="form3">
              <div class="row">
                <div class="col">
                  <legend>L'article</legend>
                  <hr />
                  <div class="form-group">
                    <label for="namePost">Nom du post</label>
                    <input
                      type="text"
                      class="form-control"
                      id="namePost"
                      placeholder="Enter a post title"
                      v-model="post.title"
                    />
                  </div>
                  <div class="form-group">
                    <label for="descriptionPost">Description</label>
                    <vue-editor v-model="post.description"></vue-editor>
                  </div>
                </div>
                <div class="col">
                  <legend>Détails du post</legend>
                  <hr />
                  <div class="form-group">
                    <textarea
                      name="impact"
                      id="postImpact"
                      cols="30"
                      rows="5"
                      v-model="post.impact"
                      placeholder="Une phrase d'impact pour ce beau produit."
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="keywordPost">Mot-clé</label>

                    <input
                      type="text"
                      class="form-control"
                      id="keywordPost"
                      placeholder="Entrer le mot-clé de l'article. ex : 'coco' "
                      v-model="keyword"
                    />
                  </div>
                  <div class="form-group">
                    <label for="tagPost">Tags</label>

                    <input
                      type="text"
                      class="form-control"
                      @keyup.right="addTag"
                      id="tagPost"
                      placeholder="Enter a post tag"
                      v-model="tag"
                    />
                  </div>
                  <div class="form-group d-flex">
                    <div class="p-1" v-for="tag in post.tags" :key="tag.i">
                      <span>{{ tag }}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-file">
                      <input
                        @change="uploadSlide"
                        type="file"
                        class="custom-file-input"
                        id="customFile1"
                      />
                      <label class="custom-file-label" for="customFile"
                        >Choisir une slide pour le carousel</label
                      >
                    </div>
                  </div>

                  <div class="form-group d-flex">
                    <div
                      class="p-1 img-wrap"
                      v-for="(slide, index) in post.slides"
                      :key="slide.i"
                    >
                      <img :src="slide" alt="post slide" width="80px" />
                      <span
                        class="delete-img p-3"
                        @click="deleteSlide(slide, index)"
                        >x
                        <!-- <b-icon icon="x"></b-icon> -->
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-file">
                      <label class="custom-file-label" for="customFile"
                        >Choisir une image pour l'article</label
                      >
                      <input
                        @change="uploadImage"
                        type="file"
                        class="custom-file-input"
                        id="customFile2"
                      />
                    </div>
                  </div>

                  <div class="form-group d-flex">
                    <div class="p-1 img-wrap">
                      <img :src="post.image" alt="post picture" width="80px" />
                      <span
                        class="delete-img p-3"
                        @click="deleteImage(post.image)"
                        >x
                        <!-- <b-icon icon="x"></b-icon> -->
                      </span>
                    </div>
                  </div>
                </div>
                <div class="modal-footer col-md-12">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    @click="addPost()"
                    type="button"
                    class="btn btn-primary"
                    v-if="modal == 'new'"
                  >
                    Ajouter cet article
                  </button>
                  <button
                    @click="updatePost()"
                    type="button"
                    class="btn btn-primary"
                    v-if="modal == 'edit'"
                  >
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  # Modal Post-->
  <!-- ##Post -->
</template>

<script>
import { BIcon } from "bootstrap-vue";
import { VueEditor } from "vue2-editor";
// import { GridPlugin, Page, Toolbar, Edit, CommandColumn } from '@syncfusion/ej2-vue-grids';
import { fb, db } from "../../firebase";
import $ from "jquery";
export default {
  name: "Articles",
  components: {
    VueEditor,
    "b-icon": BIcon,
    pagination: () =>
      import(
        /*webpackChunkName: "pagination"*/ "@/components/Contents/Pagination.vue"
      )

    // GridPlugin,
    // Page
  },
  data() {
    return {
      // pageSettings: { pageSize: 5 },
      // commands: [{ buttonOption: { content: 'Edit', cssClass: 'e-flat' } }],
      articles: [],
      post: {
        title: null,
        description: null,
        tags: [],
        slides: [],
        image: null,
        impact: null,
        keyword: null
      },

      activeItem: null,
      modal: null,
      tag: null
    };
  },
  // provide: {
  //   grid: [Page, Edit, Toolbar, CommandColumn]
  // },
  firestore() {
    return {
      articles: db.collection("posts")
    };
  },
  methods: {
    // POSTS //
    addTag() {
      this.post.tags.push(this.tag);
      this.tag = "";
    },
    uploadSlide(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("posts/" + file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Your file isn't well upload"
            });
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.post.slides.push(downloadURL);
              console.log("File available at", downloadURL);
              Swal.fire(
                "Nice",
                "Your file is upload successfully !",
                "success"
              );
            });
          }
        );
      }
    },
    deleteSlide(slide, index) {
      let img = fb.storage().refFromURL(image);
      this.post.images.splice(index, 1);
      img
        .delete()
        .then(() => {
          console.log("image deleted");
        })
        .catch(error => {
          console.log(error);
        });
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("post/" + file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Votre fichier ne s'est pas bien téléchargé"
            });
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.post.image = downloadURL;
              console.log("Fichier disponible à : ", downloadURL);
              Swal.fire("Bien", "Votre fichier est téléchargé !", "success");
            });
          }
        );
      }
    },
    deleteImage(image) {
      let bkg = fb.storage().refFromURL(image);
      this.category.cbackground = "";
      bkg
        .delete()
        .then(() => {
          console.log("image deleted");
        })
        .catch(error => {
          console.log(error);
        });
    },

    reset() {
      this.post = {
        title: null,
        description: null,
        tags: [],
        slides: [],
        image: null,
        impact: null,
        keyword: null
      };
    },
    addNew() {
      this.modal = "new";
      console.log(this.modal);
      this.reset();
      $("#post").modal("show");
    },

    updatePost() {
      this.$firestore.articles.doc(this.post.id).update(this.post);
      Toast.fire({
        icon: "success",
        title: "Post updated successfully"
      });
      $("#post").modal("hide");
    },
    editPost(post) {
      this.modal = "edit";
      this.post = post;
      this.activeItem = post.id;
      $("#post").modal("show");
      // console.log(this.modal);
      // console.log(this.post);
      // console.log(this.activeItem);
    },
    deletePost(post) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.isConfirmed) {
          this.post = post;
          this.activeItem = post.id;
          this.$firestore.articles.doc(this.post.id).delete();
          Swal.fire("Deleted!", "Le produit est supprimé.", "success");
        }
      });
    },
    readData() {},
    addPost() {
      this.$firestore.articles.add(this.post);
      $("#post").modal("hide");
      Toast.fire({
        icon: "success",
        title: "Post added successfully"
      });
    }
  },
  computed: {
    nbCard() {
      if ($("#all-card")) {
        // return this.posts.length;
      }
    }
  }
};
</script>
<style scoped>
/* @import '../../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css'; */
.butn {
  background: radial-gradient(
    circle,
    rgba(242, 242, 190, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  ) !important;
}
.img-wrap {
  position: relative;
}
.img-wrap span.delete-img {
  position: absolute;
  margin: 1px;
}
.img-wrap span.delete-img:hover {
  cursor: pointer;
}
</style>
