/*Author: Tushar Borole
Discription:It contain all constant value ie all constant value is imported from this file
Copyright:Seed Inc. 2014*/


/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function () {
    'use strict';
    App.constant('APP_COLORS', {
            'primary': '#5d9cec',
            'success': '#27c24c',
            'info': '#23b7e5',
            'warning': '#ff902b',
            'danger': '#f05050',
            'inverse': '#131e26',
            'green': '#37bc9b',
            'pink': '#f532e5',
            'purple': '#7266ba',
            'dark': '#3a3f51',
            'yellow': '#fad732',
            'gray-darker': '#232735',
            'gray-dark': '#3a3f51',
            'gray': '#dde6e9',
            'gray-light': '#e4eaec',
            'gray-lighter': '#edf1f2'
        })
        .constant('APP_MEDIAQUERY', {
            'desktopLG': 1200,
            'desktop': 992,
            'tablet': 768,
            'mobile': 480
        })
        .constant('APP_CONFIG', {
            'enviornment': 'development',
            /*development/production*/
            'urlenv': 'development' /*mock/development*/

        }).constant('APP_CONSTANT', {


        }).constant('APP_CONSTANTVALUE', {
            'token': 'X-Auth-Token',
            'maxmailimagesize': 300000,
            'deletesweetconfig': {
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel plx!',
            },
            'status': [{
                'name': 'Active',
                'value': true
        }, {
                'name': 'In Active',
                'value': false
        }],
            'invitestatus': [{
                'name': 'Pending',
                'value': 'Pending'
        }, {
                'name': 'Accepted',
                'value': 'Accepted'
        }],
            'fallbackimage': {
                'companyfallback': 'images/no-image.png',
                'loadingsrc': 'images/ajax-loader.gif',
                'userfallback': 'images/user.png',
                'userfallbacknavigation': 'images/userimage.png'
            },
            'dashboard': [{
                    'month': 'January',
                    'number': 1
        }, {
                    'month': 'February',
                    'number': 2
        }, {
                    'month': 'March',
                    'number': 3
        }, {
                    'month': 'April',
                    'number': 4
        }, {
                    'month': 'May',
                    'number': 5
        }, {
                    'month': 'June',
                    'number': 6
        }, {
                    'month': 'July',
                    'number': 7
        }, {
                    'month': 'August',
                    'number': 8
        }, {
                    'month': 'September',
                    'number': 9
        }, {
                    'month': 'October',
                    'number': 10
        }, {
                    'month': 'November',
                    'number': 11
        }, {
                    'month': 'December',
                    'number': 12
        }
                    ]

        });
})();