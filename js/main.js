$(document).ready(function () {

  $("#beerContainer img").hide();
  $('#beerContainer').addClass('hideme');
  $(".backgroundCatalog").hide();
  $(".beersTable").hide();
  $('html').addClass("overflowme");
  $('.beerMainPage').hide();
  $('#userNav').hide();

  $('.beerMainPage').fadeIn(2000).animate({
            'opacity': '0.3',
            'left': '90vh',
            'width': '90vh',
            'height': '90vh'
          }, {duration: 2000, queue: false}, function() {
            // Animation complete.

        });
      });

      $(".catalogButton").hide().fadeIn(3000);

      $("a.catalogButton").hover(function () {
         $("span.catalogButton").css("color: white");
      });
