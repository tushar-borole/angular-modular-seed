/*Author: Tushar Borole
Discription:It contain all constant value ie all constant value is imported from this file
Copyright:Karma Worldwide Inc. 2014*/
app.constant('APP_CONFIG', {
    'enviornment': 'development',
    /*development/production*/
        'urlenv': 'development' /*mock/development*/

});

app.constant('APP_CONSTANT', {


});

app.constant('APP_CONSTANTVALUE', {
        'token': 'X-Auth-Token',
     'maxmailimagesize':300000,
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
            'userfallbacknavigation':'images/userimage.png'
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
