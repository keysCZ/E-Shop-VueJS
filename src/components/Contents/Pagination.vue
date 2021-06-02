<template>
  <div class="pagination">
    <button @click="pagination()">Data</button>

      <nav aria-label="Page navigation example" class="">
            <ul class="pagination paginationnav pagination-lg justify-content-center">
              <li class="page-item">
                <a class="page-link" id="prev-page" href="javascript:void(0)" aria-label="Previous" >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            </ul>
          </nav>
  </div>
</template>

<script>

import $ from "jquery";
export default{
  
    name : 'pagination',
    data() {
      return {
        nbCard : $('.card-group').length,
        
      }
    },
    methods : {
      pagination() {
      var numberOfItems = $('.card-group').length;
      console.log(numberOfItems);
      var limitPerPage = 8;
      // var limit = limitPerPage - 1;
      $(".card-group:gt("+ limitPerPage - 1 +")").hide();
      var totalPages = Math.round(numberOfItems / limitPerPage);
      $(".paginationnav").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");


      for (var i = 2; i <= totalPages; i++) {
        $(".paginationnav").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
      }

      $(".paginationnav").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>");

      $(".paginationnav li.current-page").on("click", function () {
        if ($(this).hasClass("active")) {
          return false;
        }else {
          var currentPage = $(this).index();
          $(".paginationnav li").removeClass("active");
          $(this).addClass("active");
          $("#all-card .card-group").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#all-card .card-group:eq(" + i + ")").show();
          }
        }
      });

      $("#next-page").on("click", function () {
        var currentPage = $(".paginationnav li.active").index();

        if (currentPage === totalPages) {
          return false;
        } else {
          currentPage++;
          $(".paginationnav li").removeClass("active");
          $("#all-card .card-group").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#all-card .card-group:eq(" + i + ")").show();
          }
          $(".paginationnav li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        }
      });

      $("#prev-page").on("click", function () {
        var currentPage = $(".paginationnav li.active").index();

        if (currentPage === 1) {
          return false;
        } else {
          currentPage--;
          $(".paginationnav li").removeClass("active");
          $("#all-card .card-group").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#all-card .card-group:eq(" + i + ")").show();
          }
          $(".paginationnav li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        }
      });
          }
        }
  }
</script>
