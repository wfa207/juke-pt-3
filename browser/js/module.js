'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/albumsTemplate.html',
    controller: 'AlbumsCtrl',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    }
  });
});

juke.config(function($stateProvider) {
	$stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/artistsTemplate.html',
    controller: 'ArtistsCtrl',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }     
    }
  });
});

juke.config(function($stateProvider) {
	$stateProvider.state('albums', {
    url: '/albums/:albumId',
    templateUrl: '/albumTemplate.html',
    controller: 'AlbumCtrl',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('artist', {
    url: '/artists/:artistId',
    templateUrl: '/artistTemplate.html',
    controller: 'ArtistCtrl',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.artistId);
      }
    }
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