'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/albumsTemplate.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function($stateProvider) {
	$stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/artistsTemplate.html',
    controller: 'ArtistsCtrl'
  });
});

juke.config(function($stateProvider) {
	$stateProvider.state('album', {
    url: '/albums/:albumid',
    templateUrl: '/albumTemplate.html',
    controller: 'albumCtrl'
  });
});