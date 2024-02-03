app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
     $scope.post = suggestions.posts.filter(function(a) {
      return (a.id == $routeParams.id);
     })[0];;

    $scope.addComment= function(){    
        $scope.post.comments.push({
            body: $scope.newcomment,
            upvotes: 0,
        });
        if ($scope.newcomment === ''){
            return false;
        };
        $scope.newcomment = '';
    };

    $scope.upVoteComment = function (comments){
        comments.upvotes +=1;
    };
    $scope.newcomment = '';
}]);

