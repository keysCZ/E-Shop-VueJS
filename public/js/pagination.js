	// this refers to window.document
	var allcard =  document.getElementById('all-card').getElementsByClassName('card-group');
	
	var numberOfItems = allcard.length;
	console.log(allcard);
	var limitPerPage = 6;
	$("#all-card .card-group:gt(" + (limitPerPage - 1) + ")").hide();
	var totalPages = Math.round(numberOfItems / limitPerPage);
	$(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");


	for (var i = 2; i <= totalPages; i++) {
		$(".pagination").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
	}

	$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>");

	$(".pagination li.current-page").on("click", function () {
		if ($(this).hasClass("active")) {
			return false;
		}else {
			var currentPage = $(this).index();
			$(".pagination li").removeClass("active");
			$(this).addClass("active");
			$("#all-card .card-group").hide();

			var grandTotal = limitPerPage * currentPage;

			for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
				$("#all-card .card-group:eq(" + i + ")").show();
			}
		}
	});

	$("#next-page").on("click", function () {
		var currentPage = $(".pagination li.active").index();

		if (currentPage === totalPages) {
			return false;
		} else {
			currentPage++;
			$(".pagination li").removeClass("active");
			$("#all-card .card-group").hide();

			var grandTotal = limitPerPage * currentPage;

			for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
				$("#all-card .card-group:eq(" + i + ")").show();
			}
			$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
		}
	});

	$("#prev-page").on("click", function () {
		var currentPage = $(".pagination li.active").index();

		if (currentPage === 1) {
			return false;
		} else {
			currentPage--;
			$(".pagination li").removeClass("active");
			$("#all-card .card-group").hide();

			var grandTotal = limitPerPage * currentPage;

			for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
				$("#all-card .card-group:eq(" + i + ")").show();
			}
			$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
		}
	});