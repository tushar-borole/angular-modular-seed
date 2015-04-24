/*Author: Tushar Borole
Discription:Auth service check if user is siggedin
Copyright:Seed Inc. 2014*/

'use strict';





/*It is service to check user is authenticate or not*/
app.service('authService', ['$http', '$q', '$timeout', 'Restangular', 'dataFactory', 'ipCookie', '$rootScope', 'APP_CONSTANTVALUE',
    function ($http, $q, $timeout, Restangular, dataFactory, ipCookie, $rootScope, APP_CONSTANTVALUE) {
        $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth').access_token;
        var defer = $q.defer();
        $timeout(function () {
            dataFactory.loggedInuser().then(function (data) {
                $rootScope.loggedindata = data;
                defer.resolve();
            }, function () {});
        }, 0);
        return defer.promise;
    }]);


/*it is common service to generate error message*/
app.service('errorService', ['$http', '$translate', 'notify',
    function ($http, $translate, notify) {
        return {
            error: function (text, classname, isTranslate) {
                console.log(text);
                var message = isTranslate == false ? text : $translate.instant(text);
                notify.closeAll()
                notify({
                    message: message,
                    classes: classname
                });
                notify.config({
                    duration: 2000
                })
            }
        };
            }]);

/*it is service for manage cproject page*/
app.service('projectService', ['$http',
    function ($http) {
        return {
            getGoalPercent: function (goals, overallgoal) {
                var totalgoal = 0;
                angular.forEach(goals, function (value) {
                    totalgoal += value;
                });
                var percentgoal = (totalgoal / overallgoal) * 100;

                return percentgoal;
            }
        };
            }]);

/*it is service for dashboard page*/
app.service('dashboardService', ['$http', 'APP_CONSTANTVALUE', '$filter',
    function ($http, APP_CONSTANTVALUE, $filter) {
        return {
            /*@descrition
             * it give the formatted json to generate the dashboard chart
             * $param {array} data it is data recieved from http server eg:-[[9,1]] 9 represent the month name, 1 represent the data of that month
             * @return {"Month":['January','Febraury'],"data":[23,66]}*/
            getFormattedChartData: function (data) {
                /*static json required to create formatted data for chart is in constant.js*/
                var formatedDate = APP_CONSTANTVALUE.dashboard;;
                var formatedJson = {
                    'month': [],
                    'data': []
                };
                angular.forEach(formatedDate, function (value, key) {
                    formatedJson.month.push(value.month);
                    formatedJson.data.push(0);
                    angular.forEach(data, function (innervalue) {
                        if (innervalue[0] === value.number) {
                            formatedJson.data[key] = innervalue[1];
                        }
                    });


                });
                return formatedJson;


            }
        };
            }]);
/*it is service for mail page*/
app.service('mailService', ['$http', 'APP_CONSTANTVALUE', '$filter',
    function ($http, APP_CONSTANTVALUE, $filter) {
        return {
            /*@descrition
             * it give the formatted json to generate the dashboard chart
             * $param {array} data it is data recieved from http server eg:-[[9,1]] 9 represent the month name, 1 represent the data of that month
             * @return {"Month":['January','Febraury'],"data":[23,66]}*/
            pasteHtmlAtCaret: function (html) {
                var sel, range;
                if (window.getSelection) {
                    // IE9 and non-IE
                    sel = window.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) {
                        range = sel.getRangeAt(0);
                        range.deleteContents();

                        // Range.createContextualFragment() would be useful here but is
                        // only relatively recently standardized and is not supported in
                        // some browsers (IE9, for one)
                        var el = document.createElement("div");
                        el.innerHTML = html;
                        var frag = document.createDocumentFragment(),
                            node, lastNode;
                        while ((node = el.firstChild)) {
                            lastNode = frag.appendChild(node);
                        }
                        range.insertNode(frag);

                        // Preserve the selection
                        if (lastNode) {
                            range = range.cloneRange();
                            range.setStartAfter(lastNode);
                            range.collapse(true);
                            sel.removeAllRanges();
                            sel.addRange(range);
                        }
                    }
                } else if (document.selection && document.selection.type != "Control") {
                    // IE < 9
                    document.selection.createRange().pasteHTML(html);
                }


            }
        };
            }]);
