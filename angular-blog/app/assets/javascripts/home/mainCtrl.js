.controller("MainCtrl", [
'$scope', 'posts', 
	function($scope){
		$scope.test = "HELLO WORLD!"

		// $scope.posts = posts.posts;
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		]

		$scope.addPost = function(){
			if(!$scope.title || $scope.title ===''){ return;} // prevent blank title
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: [
				  {author: 'Joe', body: 'Cool post!', upvotes: 0},
				  {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
				]
			});
			$scope.title = ''; // clears title for reuse of function
			$scope.link = '';
		};

		$scope.incrementUpvote = function(post){
			post.upvote += 1;
		};
	} // scope function
]) // controller