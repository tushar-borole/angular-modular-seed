/*Author: Tushar Borole
Discription:It contain page route information
Copyright:Karma Worldwide Inc. 2014*/


/*$stateProvider:- Provider service provided by angular ui router
$translateProvider:-Provider service provided by angular translate
,APP_CONSTANT,APP_CONFIG:- Custom service import in config*/
function config($stateProvider, $urlRouterProvider, $translateProvider, ngFabFormProvider, RestangularProvider, APP_CONSTANT, APP_CONFIG, $enviornment) {
    $urlRouterProvider.otherwise('/app/login');
    $stateProvider
    /*    Full page screen route*/
        .state('app', {
            url: '/app',
            templateUrl: 'views/fullpage.html',
            data: {
                pageTitle: 'Example view'
            }
        })
        .state('app.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            data: {
                pageTitle: 'Example view'
            },
            routename: 'login',
            isFullpage: true,
            controller: 'LoginCtrl'
        })
        .state('karmaapp', {
            url: '/karmaapp',
            templateUrl: 'views/halfpage.html',
            data: {
                pageTitle: 'Example view'
            },
            resolve: {
                load: 'authService'
            }
        })
        .state('karmaapp.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            data: {
                pageTitle: 'Example view'
            },
            controller: 'DashboardCtrl'
        });
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18/',
        suffix: '.json'
    });
    //var baseurl = $environment.url;
    console.log($enviornment)
    RestangularProvider.setBaseUrl($enviornment.backendurl);

    $translateProvider.preferredLanguage('en');
    ngFabFormProvider.extendConfig({
        setAsteriskForRequiredLabel: true
    });

    /*It is custom insert for ngFabFor directive*/
    var customInsertFn = function (compiledAlert, el, attrs) {
        // insert after or after parent if checkbox or radio
        if (angular.isDefined(attrs.$attr.chosen)) {
            $(".chosen-container").after(compiledAlert);
        } else {
            el.after(compiledAlert);
        }
    };
    ngFabFormProvider.setInsertErrorTplFn(customInsertFn);





}
app
    .config(config)
    .run(function ($rootScope, $state, APP_CONSTANTVALUE, $enviornment,errorShipper) {
        $rootScope.$state = $state;
        /*fallback image in application*/
        $rootScope.fallbackimage = {};
        $rootScope.fallbackimage = APP_CONSTANTVALUE.fallbackimage;
    $rootScope.$constant=APP_CONSTANTVALUE;
        $enviornment.jsonurl = window.location.protocol + '//' + window.location.host;
        $enviornment.name = $enviornment.jsonurl+=$enviornment.jsonpath;
console.log( $enviornment.name)
        /*summernote global configuration is set here*/
        $rootScope.summernoteConfig = {
            height: 150,
            toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']]
        ]
        };

  //custome error shipper angular
    errorShipper.use(function (payload) {
        console.log(payload)
        // do something with payload
    });

console.log(window.location)


    });
