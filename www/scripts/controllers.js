'use strict';
angular.module('Wioflix.controllers', [])

    .controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $ionicPopup) {

        // Called to navigate to the main app
        $scope.startApp = function () {
            $state.go('main.imdb');
        };
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        // Called each time the slide changes
        $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
        };
    })

    .controller('MainCtrl', function ($scope, $state, $ionicSideMenuDelegate, RANDOM) {
        $scope.showDetails= false;

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.mail= function(){
            window.location.href = "mailto:whatisonnetflix@hotmail.com?subject=I love your app... but";
        };

        $scope.parentobj = {};
        $scope.parentobj.categoryImdb = "Any";
        $scope.parentobj.categoryRt = "Any";
        $scope.parentobj.categoryMc = "Any";
        $scope.parentobj.random = RANDOM;
        $scope.parentobj.randomC = "Any";
        $scope.parentobj.randomImdb = "Any";
        $scope.parentobj.randomRt = "Any";
        $scope.parentobj.randomMc = "Any";
        $scope.parentobj.ImdbType = "Movies";
        $scope.parentobj.McType = "Metascore";
        $scope.parentobj.RtType = "Critic";
        $scope.parentobj.imdbMovies = "";
        $scope.parentobj.imdbTV = "";
        $scope.parentobj.mcC = "";
        $scope.parentobj.mcU = "";
        $scope.parentobj.rtC = "";
        $scope.parentobj.rtU = "";
    })

    .controller('imdbCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts = data; // response data
            $scope.parentobj.imdbMovies=$scope.posts;

        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts2 = data; // response data
            $scope.parentobj.imdbTV=$scope.posts2;
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.categoryImdb=data;
        };

        $scope.customFilter = function (data) {
            if ($scope.parentobj.categoryImdb === 'Any') {
                return true;
            }
            if (data.genres.toString().indexOf($scope.parentobj.categoryImdb) > -1) {
                return true;
            }
            return false;
        };

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };

        $scope.imdbTitle = $stateParams.imdbTitle;
        $scope.imdbTitleTV = $stateParams.imdbTitleTv;


        if($scope.imdbTitle!=null){
            for(var j=0; j< $scope.parentobj.imdbMovies.length; j++){
                if($scope.parentobj.imdbMovies[j].title === $scope.imdbTitle) {
                    $scope.objInQuestion = $scope.parentobj.imdbMovies[j];
                    return;
                }
            }
        }

        if($scope.imdbTitleTV!=null){
            for(var j=0; j< $scope.parentobj.imdbTV.length; j++){
                if($scope.parentobj.imdbTV[j].title === $scope.imdbTitleTV) {
                    $scope.objInQuestion = $scope.parentobj.imdbTV[j];
                    return;
                }
            }
        }
    })

    .controller('mcCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts = data; // response data
            $scope.parentobj.mcC = $scope.posts;
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts2 = data; // response data
            $scope.parentobj.mcU = $scope.posts2;
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts3 = data; // response data

        });

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.categoryMc=data;
        };


        $scope.customFilter = function (data) {
            if ($scope.parentobj.categoryMc === 'Any') {
                return true;
            }
            if (data.genres.toString().indexOf($scope.parentobj.categoryMc) > -1) {
                return true;
            }
            return false;
        };

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };

        $scope.imdbTitle = $stateParams.imdbTitle;
        $scope.imdbTitleTV = $stateParams.imdbTitleTv;


        if($scope.imdbTitle!=null){
            for(var j=0; j< $scope.parentobj.mcC.length; j++){
                if($scope.parentobj.mcC[j].title === $scope.imdbTitle) {
                    $scope.objInQuestion = $scope.parentobj.mcC[j];
                    return;
                }
            }
        }

        if($scope.imdbTitleTV!=null){
            for(var j=0; j< $scope.parentobj.mcU.length; j++){
                if($scope.parentobj.mcU[j].title === $scope.imdbTitleTV) {
                    $scope.objInQuestion = $scope.parentobj.mcU[j];
                    return;
                }
            }
        }
    })

    .controller('rtCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts = data; // response data
            $scope.parentobj.rtC = $scope.posts;
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts2 = data; // response data
            $scope.parentobj.rtU = $scope.posts2;
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.categoryRt=data;
        };


        $scope.customFilter = function (data) {
            if ($scope.parentobj.categoryRt === 'Any') {
                return true;
            }
            if (data.genres.toString().indexOf($scope.parentobj.categoryRt) > -1) {
                return true;
            }
            return false;
        };

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };

        $scope.imdbTitle = $stateParams.imdbTitle;
        $scope.imdbTitleTV = $stateParams.imdbTitleTv;


        if($scope.imdbTitle!=null){
            for(var j=0; j< $scope.parentobj.rtC.length; j++){
                if($scope.parentobj.rtC[j].title === $scope.imdbTitle) {
                    $scope.objInQuestion = $scope.parentobj.rtC[j];
                    return;
                }
            }
        }

        if($scope.imdbTitleTV!=null){
            for(var j=0; j< $scope.parentobj.rtU.length; j++){
                if($scope.parentobj.rtU[j].title === $scope.imdbTitleTV) {
                    $scope.objInQuestion = $scope.parentobj.rtU[j];
                    return;
                }
            }
        }
    })

    .controller('queueCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup,$ionicScrollDelegate) {
        load();

        function load(){
            $scope.posts=JSON.parse($window.localStorage.getItem("array")) || [];
        }

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.remove = function(index){
            var arr=JSON.parse($window.localStorage.getItem("array")) || [];

            for(var i=0;  i<arr.length; i++){
                if(arr[i].title === index) {
                    arr[i] = "NOTHING";
                }
            }

            var arr2 = [];
            for(var j=0;  j<arr.length; j++){
                if(arr[j] != "NOTHING") {
                    arr2.push(arr[j]);
                }
            }

            $window.localStorage.setItem("array", JSON.stringify(arr2));

            load();
        };

        $scope.cleary = function(){
            $window.localStorage.clear();
            load();
        }
    })

    .controller('randomCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        var shuffleArray = function(array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }

        $scope.shuffle = function() {
            shuffleArray($scope.posts2);
        }

        $http({
            method : 'GET',
            url : '[omitted]' + $scope.parentobj.random
        }).success(function(data) {
            $scope.posts3 = data; // response data
        });

        $http({
            method : 'GET',
            url : '[omitted]' + $scope.parentobj.random
        }).success(function(data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.randomC=data;
        };

        $scope.customFilter = function (data) {
            if( $scope.parentobj.randomC==="Any") return true;
            if (data.genres.toString().indexOf($scope.parentobj.randomC)>-1) return true;
            return false;
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };
    })

    .controller('randomImdbCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        var shuffleArray = function(array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        };

        $scope.shuffle = function() {
            shuffleArray($scope.posts2);
            shuffleArray($scope.posts);
        };

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts = data; // response data
            shuffleArray($scope.posts);
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.randomImdb=data;
        };

        $scope.changeType = function(data){
            $scope.parentobj.ImdbType=data;
        };

        $scope.customFilter = function (data) {
            if( $scope.parentobj.randomImdb==="Any") return true;
            if (data.genres.toString().indexOf($scope.parentobj.randomImdb)>-1) return true;
            return false;
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };
    })

    .controller('randomMcCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        var shuffleArray = function(array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        };

        $scope.shuffle = function() {
            shuffleArray($scope.posts2);
            shuffleArray($scope.posts);
        };

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts = data; // response data
            shuffleArray($scope.posts);
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.randomMc=data;
        };

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.changeType = function(data){
            $scope.parentobj.McType=data;
        };

        $scope.customFilter = function (data) {
            if($scope.parentobj.randomMc==="Any") return true;
            if (data.genres.toString().indexOf($scope.parentobj.randomMc)>-1) return true;
            return false;
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };
    })

    .controller('randomRtCtrl', function ($scope, $stateParams, $state, $http, $window, $ionicPopup, $ionicScrollDelegate) {
        var shuffleArray = function(array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        };

        $scope.shuffle = function() {
            shuffleArray($scope.posts2);
            shuffleArray($scope.posts);
        };

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts = data; // response data
            shuffleArray($scope.posts);
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $http({
            method: 'GET',
            url: '[omitted]' + $scope.parentobj.random
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $scope.openN = function(index){
            $window.open( index, '_system' );
        };

        $scope.openS = function(index){
            $window.open( index, '_blank' );
        };

        $scope.changeCategory = function(data){
            $ionicScrollDelegate.scrollTop();
            $scope.parentobj.randomRt=data;
        };

        $scope.changeType = function(data){
            $scope.parentobj.RtType=data;
        };

        $scope.customFilter = function (data) {
            if($scope.parentobj.randomRt==="Any") return true;
            if (data.genres.toString().indexOf($scope.parentobj.randomRt)>-1) return true;
            return false;
        };

        $scope.addToStorage = function(arg){

            var arr=JSON.parse($window.localStorage.getItem("array")) || [];
            arr.push(arg);
            $window.localStorage.setItem("array", JSON.stringify(arr));

            $ionicPopup.alert({
                title: 'Success!',
                template: 'The item was added to your queue!'
            });
        };
    });
