'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
    url: '/artist',
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
    url: '/albums/:albumId',
    templateUrl: '/albumTemplate.html',
    controller: 'AlbumCtrl'
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('artist', {
    url: '/artists/:artistId',
    templateUrl: '/artistTemplate.html',
    controller: 'ArtistCtrl'
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('artist.artistAlbum', {
    url: '/albums',
    templateUrl: '/artistAlbumsTemplate.html',
    controller: 'ArtistCtrl'
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('artist.artistSongs', {
    url: '/songs',
    templateUrl: '/artistSongsTemplate.html',
    controller: 'ArtistCtrl'
  });
});