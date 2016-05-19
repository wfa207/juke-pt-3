'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/albumTemplate.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function($stateProvider) {
	$stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/artistTemplate.html',
    controller: 'ArtistsCtrl'
  });
});