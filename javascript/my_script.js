jQuery(document).ready(function($) {

        $('.reviews-form .button').click(function(e) {

        	e.preventDefault();

        	if ($('.reviews-form .input-text').val()!='' && $('.reviews-form .textarea').val()!='' ) {  

				var nameClient = $('.reviews-form .input-text').val();
				var reviewClient = $('.reviews-form .textarea').val();
				var date = new Date();
				var options = {
					
					day: 'numeric',
					month: 'long',
					year: 'numeric',

				};
				var reviewDate =  date.toLocaleString("ru", options);

	        	$('.reviews').append('<div class="review-item"><h4 class="review-item__name">'+nameClient+'  '+'</h4><span class="review-item__date">'+reviewDate+'</span><p class="review-item__message">'+reviewClient+'</p></div>');
	        }

        });


		 $('.list-incomes__progress-bar').each(function() {

			 var percent = $(this).attr('data-income-progress');
			 $(this).width(percent +'%');

		});

    });

