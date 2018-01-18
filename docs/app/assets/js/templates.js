angular.module('gamification-client').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/dashboard.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{vm.title}}</h1>\n" +
    "            <br>\n" +
    "            <p>{{vm.summary}}</p>\n" +
    "            <p>\n" +
    "                <span ng-repeat=\"author in vm.authors\">\n" +
    "                    <span ng-if=\"!$first\"> & </span><a href=\"{{author.link}}\">{{author.name}}</a>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <br><br>\n" +
    "            <div ng-repeat=\"section in vm.sections\">\n" +
    "                <h4 class=\"margin-top-50\">{{section.title}}</h4>\n" +
    "                <p>{{section.text}}</p>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                        <div>gamification-client</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ui-sref=\"home.dashboard\">\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"apps\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> Dashboard </p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo('home.' + item.link)\">\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{item.name}} </p>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "\n" +
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\n" +
    "    <md-toolbar>\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>gamification-client</h3>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content layout=\"column\" flex md-scroll-y style=\"background-color:#DCDCDC\">\n" +
    "        <div ui-view></div>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/leaderboard/leaderboard.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{vm.title}}</h1>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <br><br>\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <thead>\n" +
    "                    <th class=\"text-center\">#</th>\n" +
    "                    <th class=\"text-center\">Username</th>\n" +
    "                    <th class=\"text-center\" ng-click=\"vm.sortBy('recentScore')\">\n" +
    "                        Points in the past 30 days\n" +
    "                        <div class=\"fa\" ng-class=\"vm.getSortClass('recentScore')\"></div>\n" +
    "                    </th>\n" +
    "                    <th class=\"text-center\" ng-click=\"vm.sortBy('score')\">\n" +
    "                        All time points\n" +
    "                        <div class=\"fa\" ng-class=\"vm.getSortClass('score')\"></div>\n" +
    "                    </th>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"user in vm.users | orderBy:vm.sortColumn:vm.sortDescending\">\n" +
    "                        <td>{{$index + 1}}</td>\n" +
    "                        <td>{{user.username}}</td>\n" +
    "                        <td>{{user.recentScore}}</td>\n" +
    "                        <td>{{user.score}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/passwordmeter/passwordmeter.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{vm.title}}</h1>\n" +
    "            <br>\n" +
    "            <p>{{vm.summary}}</p>\n" +
    "            <p>\n" +
    "                <span ng-repeat=\"author in vm.authors\">\n" +
    "                    <span ng-if=\"!$first\"> & </span><a href=\"{{author.link}}\">{{author.name}}</a>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <br><br>\n" +
    "            <div ng-repeat=\"section in vm.sections\">\n" +
    "                <h4 class=\"margin-top-50\">{{section.title}}</h4>\n" +
    "                <p>{{section.text}}</p>\n" +
    "                <a href=\"{{section.link}}\">Here</a>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/strengthpassword/strengthpassword.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{vm.title}}</h1>\n" +
    "            <br>\n" +
    "            <p>{{vm.summary}}</p>\n" +
    "            <p>\n" +
    "                <span ng-repeat=\"author in vm.authors\">\n" +
    "                    <span ng-if=\"!$first\"> & </span><a href=\"{{author.link}}\">{{author.name}}</a>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <br><br>\n" +
    "            <div ng-repeat=\"section in vm.sections\">\n" +
    "                <h4 class=\"margin-top-50\">{{section.title}}</h4>\n" +
    "                <p>{{section.text}}</p>\n" +
    "                <a href=\"{{section.link}}\">Here</a>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );

}]);
