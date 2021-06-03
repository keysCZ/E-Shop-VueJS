<template>
<<<<<<< Updated upstream
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
=======
  <div class="pagination">
    <!-- <button @click="pagination()">Data</button> -->

    <nav aria-label="Page navigation m-3" class="">
      <ul class="pagination paginationnav pagination-lg justify-content-center">
        <li class="page-item">
          <a
            class="page-link"
            id="prev-page"
            href="javascript:void(0)"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
      </ul>
    </nav>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default{
<<<<<<< Updated upstream
    name : 'Pagination',
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
=======
  
    name : 'pagination',
    mounted () {
      // pagination() { 
      var numberOfItems = $('.card-group').length;
      console.log(numberOfItems);
      var limitPerPage = 8;
      // var limit = limitPerPage - 1;
      $(".card-group:gt(7)").addClass('d-none');
      $(".card-group:gt(7)").removeClass('d-flex');
      var totalPages = Math.round(numberOfItems / limitPerPage);
      $(".paginationnav").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");


      for (var i = 2; i <= totalPages; i++) {
        $(".paginationnav").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
>>>>>>> Stashed changes
      }
    }
  }
</script>
