<?php

require 'inc/nav.php'

 ?>

 <div class="beerIntro">
  <div class="beerMainContainer">
    <img class="beerMainPage" src="img/weiCropStraight.png"/>
  </div>

  <div class="catalogButton">
    <p>This is your beer cave where you can find all kinds of beers from all over the world,
    we have IPAs, Blondes, Darks, Gaudes, Toasted, and more. Please check our catalog in the link
    below</b>
    <a ng-mouseleave="darkenBeer()" ng-mouseover="lightBeer()" ng-click="showCatalog()"><span>Catalog</span></a>
  </div>
</div>
  <div id="catalogContainer">
    <img class="backgroundCatalog" src="img/catalogPageProjectFixedCrop.jpg"/>

    <div id="beerContainer" ng-init="initDataTable()" >
      <div class="table-responsive" style="overflow-x: unset;">
        <table id="beerTable" datatable="ng" dt-options="vm.dtOptions" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>column1</th>
              <th>column2</th>
              <th>column3</th>
            </tr>
          </thead>
        <tbody>
        <tr class="" ng-repeat="rows in chunkedData" ng-init="outerIndex = $index">
        <td ng-click="showBeerModal(beer)"
         class="beerBox" ng-repeat="beer in rows" ng-init="innerIndex = $index"
         ng-mouseleave="darkenBeerTable(beer,innerIndex,outerIndex)" ng-mouseover="lightBeerTable(beer,innerIndex,outerIndex)">
          <img  class="currentBeer" ng-class="{lightme: beer.opacity == 'true'}"  src="img/{{beer.img}}"/>
        </td>
      </tr>
    </tbody>
  </table>
      </div>
    </div>
  </div>

  <!-- Modal -->
    <div id="beerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{currentBeerName}}</h5>
            <button type="button" ng-click="closeModal()" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div >
            <img class="d-flex justify-content-start" src="img/{{currentBeerImg}}"/>
          </div>
            <p>{{currentBeerDescription}}</p>
            <div>
              <button class="btnCart"><span>Add To Cart</span><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>




<?php

require 'inc/footer.php'

 ?>
