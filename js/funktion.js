var config = {
    apiKey: "AIzaSyCPEcepnUVWKzMKyznN3dia5RjvFUvR7f0",
    authDomain: "astronomikommentarer.firebaseapp.com",
    databaseURL: "https://astronomikommentarer.firebaseio.com",
    projectId: "astronomikommentarer",
    storageBucket: "astronomikommentarer.appspot.com",
    messagingSenderId: "628327703442"
  };
 firebase.initializeApp(config);

 var app = angular.module("app", ["firebase"]);

 app.factory("kommentarer", function($firebaseArray) {
 	var ref = firebase.database().ref().child("kommentarer");
 	return $firebaseArray(ref);
 });

 app.controller("KommentarCtrl", function($scope, kommentarer) {
 	$scope.kommentarer = kommentarer;

 	$scope.kommentar = {
 		text: "",
 		skribent: ""
 	}

 	$scope.addComment = function() {
 		$scope.kommentarer.$add($scope.kommentar);

 		$scope.kommentar = {
 			text: "",
 			skribent: ""
 		}

 	}
 });