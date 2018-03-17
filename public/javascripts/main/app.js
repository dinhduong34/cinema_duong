var app = angular.module("app.todos");   //khai bao 1 angular phia server   "xedittable"

app.controller("todoController", ['$scope', 'svTodos', function ($scope, svTodos) {
    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
    $scope.todos = [];

    //load data from api

    svTodos.get().then(function (res)  {
        $scope.todos = res.data;
        console.log($scope.todos);
        $scope.loading = false;
    },function (err){
        if(err) {
            throw err;
        }
    })
    // $scope.createTodo = function () {
    //     // console.log($scope.formData)
    //     var todo = {
    //         text: $scope.formData.text,
    //         isDone: false,
    //     }
    //     $scope.todos.push(todo);
    //     $scope.formData.text = "";
    // }
    // $scope.updateTodo = function (todo) {
    //     console.log("updata  todo: ", todo)
    // }
    // $scope.deleteTodo = function (todo) {
    //     console.log("Delete todo ", todo);
    // }
}])