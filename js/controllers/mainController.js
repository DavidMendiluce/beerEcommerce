app.controller('mainController', function($scope, $http, $window, $interval, $timeout) {

  $scope.showCatalog = function() {
     $scope.hideMainBeer();
     $timeout(function(){
        $scope.showBackground();
      }, 100);
    $scope.showBeers();
  }

  $scope.initDataTable = function() {
    $timeout(function() {
    $('#beerTable').DataTable({
        "iDisplayLength": 4,
        "bJQueryUI": false,
        "bAutoWidth": false,
        "bDestroy": false,
        "bPaginate": true,
        "bFilter": false,
        "bInfo": false,
    "aoColumns": [
           { "sWidth": "14px" },
           { "sWidth": "30px" },
           { "sWidth": "5px" }
        ],
        "columns": [
    { "width": "25%" },
    { "width": "25%" },
    { "width": "23%" }

  ],
        "fnInitComplete": function() {

            $("#beerTable").css("width","80%");
        }
      });
    }, 200);

  };






  function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}


  $scope.initFade = function() {
        $timeout(function(){
       $('.beerMainPage').fadeTo(500, 0.5);
     }, 2000);

  }

  $scope.lightBeer = function() {
    $('.beerMainPage').removeClass('darkenme');
    $('.beerMainPage').addClass('lightme');
  }

  $scope.darkenBeer = function() {
    $('.beerMainPage').removeClass('lightme');
    $('.beerMainPage').addClass('darkenme');
  }

  $scope.lightBeerTable = function(beer,index,parentIndex) {

    var parentIndex = parentIndex + 1;
    beer.opacity = 'true';

      $("tr:eq("+parentIndex+") td:eq("+index+")").animate({
        'padding-top': '20vh'
      }, {duration: 500, queue: false}, function() {

      });
      $("tr:eq("+parentIndex+") td:eq("+index+") img").addClass('glow').delay(500);

  }

  $scope.darkenBeerTable = function(beer,index,parentIndex) {
    var parentIndex = parentIndex + 1;

    beer.opacity = 'false';
    $("tr:eq("+parentIndex+") td:eq("+index+")").animate({
      'padding-top': '25vh'
    }, {duration: 500, queue: false}, function() {

    });
    $("tr:eq("+parentIndex+") td:eq("+index+") img").removeClass('glow').delay(500);

}


  $scope.hideMainBeer = function() {
    $('.beerMainPage').fadeOut(500).animate({
      'width': '100vh',
      'height': '100vh',
    }, {duration: 500, queue: false}, function() {

    });
    $('.beerIntro').fadeOut(500);
  }

  $scope.fetchBeers = function() {
    console.log("loading");
    $http({
      method: 'GET',
      url: 'fetchBeers.php'
    }).then(function(data) {
        $scope.beers = data.data;
        $scope.chunkedData = chunk($scope.beers, 3);
    }, function(error) {
      console.log(error, 'cant get data.');
    });
  }

  $scope.showBackground = function() {

    $('#imgLogo').animate({
              'margin-top': '2vh',
              'width': '35vh',
              'height': '20vh'
            }, {duration: 3000, queue: false}, function() {

          });

    $('nav').animate({
      'background-color': 'rgba(1, 27, 28,0.8)',
      'height': '20vh'
    }, {duration: 2000, queue: false}, function() {

    });

    $('#mainNav').animate({
      'margin-top': '-2vh'
    }, {duration: 2000, queue: false}, function() {

    });
    $('html').removeClass('overflowme');
    $('html').addClass('scrollme');
    $('.backgroundCatalog').fadeIn(3000).animate({
              'width': '208vh',
              'height': '300vh',
              'left': '-0vh',
              'top': '-31vh'
            }, {duration: 3000, queue: false}, function() {

          });


  }

  $scope.showBeers = function() {
    $('#beerContainer').removeClass('hideme');
    $('#beerContainer').hide().fadeIn(5000);
    $("#beerContainer img").hide();
    $('#beerContainer img').fadeIn(3000).animate({
              'width': '50vh',
              'height': '50vh'
            }, {duration: 3000, queue: false}, function() {

          });
  }

  $scope.showBeerModal = function(beer) {
    $('#beerModal').css('left', '-30%').delay(100);
    $('#beerModal').css('display', 'none').delay(100);
    $('#beerModal').fadeIn(500).animate({
              'left': '30%'
            }, {duration: 500, queue: false}, function() {

          });
    $scope.currentBeerName = beer.name;
    $scope.currentBeerDescription = beer.description;
    $scope.currentBeerImg = beer.img;
  }



  $scope.closeModal = function() {
    $('#beerModal').css('display','none');
  }
});
