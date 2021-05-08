<?php require 'header.php' ?>


<div id="mainPageContainer" ng-app="myApp" ng-controller="mainController" ng-init="initFade(); fetchBeers();">
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-black">
      <div class="container-fluid">
        <a id="logo"><img id="imgLogo" src="img/beerCaveLogo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="centerNavMenu">
              <ul class="navbar-nav" id="mainNav">
                <li class="nav-item">
                  <a href="" id="loginIndex"><span>Login</span></a>
                </li>
                <li class="nav-item">
                  <a href="" id="signupIndex"><span>SignUp</span></a>
                </li>
              </ul>
          </div>
      </div>
  </div>
  </nav>
