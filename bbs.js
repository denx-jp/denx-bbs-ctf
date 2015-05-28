var app = angular.module('app', []);
app.config(function($sceProvider) {
    $sceProvider.enabled(false);
});
app.controller('AppController', function($scope, $sce) {
    $scope.posts = JSON.parse(localStorage.getItem('posts')) || []; 
    $scope.onPost = function() {
        if ($scope.author == '' || $scope.message == '') return;
        var post = {author: $scope.author, message: $sce.trustAsHtml($scope.message)};
        $scope.posts.push(post);
        localStorage.setItem('posts', JSON.stringify($scope.posts));
        $scope.author = '';
        $scope.message = '';
    };
    $scope.clear = function() {
        $scope.posts = [];
        localStorage.clear();
    }
});