'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
angular.module('Wioflix', ['ionic', 'config', 'Wioflix.controllers'])
    .constant('RANDOM', Math.floor((Math.random() * 10000) + 1))
    .run(function ($ionicPlatform, $rootScope, $ionicLoading, $ionicPopup) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
        });

        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({template: 'Loading'})
        });

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide()
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push(function($rootScope) {
            return {
                request: function(config) {
                    $rootScope.$broadcast('loading:show')
                    return config
                },
                response: function(response) {
                    $rootScope.$broadcast('loading:hide')
                    return response
                }
            }
        })
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })

            .state('main.demo', {
                url: "/demo",
                views: {
                    'menuContent': {
                        templateUrl: "templates/demo.html",
                        controller: 'MainCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/demo-filter.html",
                        controller: 'MainCtrl'
                    }
                }
            })

            .state('main.imdb', {
                url: "/imdb",
                views: {
                    'menuContent': {
                        templateUrl: "templates/imdb.html",
                        controller: 'imdbCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/imdb-filter.html",
                        controller: 'imdbCtrl'
                    }
                }
            })
            .state('main.imdbtv', {
                url: "/imdbtv",
                views: {
                    'menuContent': {
                        templateUrl: "templates/imdb-tv.html",
                        controller: 'imdbCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/imdb-filter.html",
                        controller: 'imdbCtrl'
                    }
                }
            })
            .state('main.detailImdb', {
                url: "/imdb/:imdbTitle",
                views: {
                    'menuContent' : {
                        templateUrl: "templates/detail.html",
                        controller: 'imdbCtrl'
                    }
                }
            })
            .state('main.detailImdbTv', {
                url: "/imdbtv/:imdbTitleTv",
                views: {
                    'menuContent' : {
                        templateUrl: "templates/detail-tv.html",
                        controller: 'imdbCtrl'
                    }
                }
            })

            .state('main.rtCritic', {
                url: "/rt",
                views: {
                    'menuContent': {
                        templateUrl: "templates/rt.html",
                        controller: 'rtCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/rt-filter.html",
                        controller: 'rtCtrl'
                    }

                }
            })
            .state('main.rtUser', {
                url: "/rtU",
                views: {
                    'menuContent': {
                        templateUrl: "templates/rt-u.html",
                        controller: 'rtCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/rt-filter.html",
                        controller: 'rtCtrl'
                    }
                }
            })
            .state('main.detailCritic', {
                url: "/rt/:imdbTitle",
                views: {
                    'menuContent' : {
                        templateUrl: "templates/detail.html",
                        controller: 'rtCtrl'
                    }
                }
            })
            .state('main.detailUser', {
                url: "/rtU/:imdbTitleTv",
                views: {
                    'menuContent' : {
                        templateUrl: "templates/detail-tv.html",
                        controller: 'rtCtrl'
                    }
                }
            })

            .state('main.mcMeta', {
                url: "/mc",
                views: {
                    'menuContent': {
                        templateUrl: "templates/mc.html",
                        controller: 'mcCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/mc-filter.html",
                        controller: 'mcCtrl'
                    }

                }
            })
            .state('main.mcUser', {
                url: "/mcU",
                views: {
                    'menuContent': {
                        templateUrl: "templates/mc-u.html",
                        controller: 'mcCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/mc-filter.html",
                        controller: 'mcCtrl'
                    }
                }
            })
            .state('main.detailMeta', {
                url: "/mcM/:imdbTitle",
                views: {
                    'menuContent' : {
                        templateUrl: "templates/detail.html",
                        controller: 'mcCtrl'
                    }
                }
            })
            .state('main.detailUserM', {
                url: "/mcU/:imdbTitleTv",
                views: {
                    'menuContent': {
                        templateUrl: "templates/detail-tv.html",
                        controller: 'mcCtrl'
                    }
                }
            })

            .state('main.random', {
                url: "/random",
                views: {
                    'menuContent': {
                        templateUrl: "templates/random-default.html",
                        controller: 'randomCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/random-filter.html",
                        controller: 'randomCtrl'
                    }
                }
            })

            .state('main.randomAny', {
                url: "/randomAny",
                views: {
                    'menuContent': {
                        templateUrl: "templates/random.html",
                        controller: 'randomCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/random-default2.html",
                        controller: 'randomCtrl'
                    }
                }
            })
            .state('main.randomImdb', {
                url: "/randomImdb",
                views: {
                    'menuContent': {
                        templateUrl: "templates/r-imdb.html",
                        controller: 'randomImdbCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/random-imdb.html",
                        controller: 'randomImdbCtrl'
                    }
                }
            })
            .state('main.randomMc', {
                url: "/randomMc",
                views: {
                    'menuContent': {
                        templateUrl: "templates/r-mc.html",
                        controller: 'randomMcCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/random-mc.html",
                        controller: 'randomMcCtrl'
                    }
                }
            })
            .state('main.randomRt', {
                url: "/randomRt",
                views: {
                    'menuContent': {
                        templateUrl: "templates/r-rt.html",
                        controller: 'randomRtCtrl'
                    },
                    'filterContent':{
                        templateUrl: "templates/random-rt.html",
                        controller: 'randomRtCtrl'
                    }
                }
            })

            .state('main.queue', {
                url: "/queue",
                views: {
                    'menuContent': {
                        templateUrl: "templates/queue.html",
                        controller: 'queueCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/main/demo');
    });


