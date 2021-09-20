self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Dev Chat',
  description: "This app will allow users to create chat channels. You can direct message other people. You can respond as normal or add a gif/image and even be able to use emjoi's. If a user signs up and adds their cell number, they can receive text notifications as well.",
  image: '/images/chat.PNG',
  tags: ['React', 'Express', 'Node'],
  source: 'https://github.com/ericcapiz/chat',
  visit: 'https://devs-chat.netlify.app/',
  id: 12
}, {
  title: 'Sigma Snap',
  description: "This app will allow users to register/log-in and upload a post that will contain an image, title, message and tags. Each post will render the users name and display how long ago the post was created.",
  image: '/images/snaps.PNG',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://github.com/ericcapiz/Sigma-Snaps',
  visit: 'https://sigma-snaps.netlify.app/',
  id: 0
}, {
  title: 'Lost My Stuff',
  description: "A lost and found site for users to create posts for items lost or found. This is a MERN application that allows users to register/login and create posts for items. Users can update/delete their own posts. Users can display posts by category as well as by user if user has multiple posts.",
  image: '/images/lost.PNG',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://github.com/ericcapiz/lost-found',
  visit: 'https://lost-my-stuff.vercel.app/',
  id: 2
}, {
  title: 'Food 4 Thought',
  description: "This app will allow users to search for ingredients and view different recipe cards for additional recipe info.",
  image: '/images/food.PNG',
  tags: ['React', 'State Management', 'useState'],
  source: 'https://github.com/ericcapiz/food-4-thought',
  visit: 'https://food-4-thought.vercel.app/',
  id: 8
}, {
  title: 'Psi-Shop',
  description: "This app will allow users to add items to their cart. Once in the cart users can increase/decrease quantity of items in the cart. Users can also remove the item or even empty the cart altogether.",
  image: '/images/psi.PNG',
  tags: ['React', 'Commerce.js', 'Stripe'],
  source: 'https://github.com/ericcapiz/psi-shop',
  visit: 'https://psi-shop.netlify.app/',
  id: 1
}, {
  title: 'Zeta Movies',
  description: "This app will allow users to search for any movie and can click on any movie listed to view the movie card for additional info on the movie",
  image: '/images/zeta1.PNG',
  tags: ['React', 'Styled Components', 'useState'],
  source: 'https://github.com/ericcapiz/zeta-movies',
  visit: 'https://zeta-movies.vercel.app/',
  id: 3
}, {
  title: 'Covid Tracker',
  description: "This app uses the disease.sh api. This gives data that shows users the different numbers worldwide and by country. The numbers update as the api updates.",
  image: '/images/covid.PNG',
  tags: ['React', 'Chart.js', 'Leaflet'],
  source: 'https://github.com/ericcapiz/covid',
  visit: 'https://covid-vert-zeta.vercel.app/',
  id: 4
}, {
  title: 'Nandos Cakes',
  description: "I developed this site for a chicago start-up bakery business. They have a fb channel with over 350 followers and I offered my services to help market the business by creating their site.",
  image: '/images/cake.PNG',
  tags: ['React', 'Email.js', 'Framer-Motion'],
  source: 'https://github.com/ericcapiz/nandos-cakes2',
  visit: 'https://nandos-cakes2.vercel.app/',
  id: 5
}];
var TimeLineData = [{
  year: 2014,
  text: 'Graduated from Devry University with a bachelors degree in multimedia design & development'
}, {
  year: 2019,
  text: 'Decided to get back into the web dev field and start the self-taught path'
}, {
  year: 2020,
  text: 'Started Lambda School in their fullstack development program'
}, {
  year: 2021,
  text: 'Became a freelance developer'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFFLG1RQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixNQUFyQixDQUpWO0FBS0VDLFFBQU0sRUFBRSxtQ0FMVjtBQU1FQyxPQUFLLEVBQUUsZ0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLHlNQUZmO0FBR0lDLE9BQUssRUFBRSxtQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsa0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxpU0FGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSxpSEFGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLGtCQUFWLEVBQThCLFVBQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDZDQUxWO0FBTUVDLE9BQUssRUFBRSxvQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsRUFxQ3RCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBQyxxTUFGZDtBQUdFQyxPQUFLLEVBQUUsaUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLGFBQVYsRUFBeUIsUUFBekIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsdUNBTFY7QUFNRUMsT0FBSyxFQUFFLCtCQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDZJQUZmO0FBR0VDLE9BQUssRUFBRSxtQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsbUJBQVYsRUFBK0IsVUFBL0IsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsMENBTFY7QUFNRUMsT0FBSyxFQUFFLGlDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXdEdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFFLDJKQUZmO0FBR0VDLE9BQUssRUFBRSxtQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixTQUF0QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQ0FMVjtBQU1FQyxPQUFLLEVBQUUscUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F4RHNCLEVBaUV0QjtBQUNFTixPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQUUsNExBRmY7QUFHRUMsT0FBSyxFQUFFLGtCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLGVBQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDRDQUxWO0FBTUVDLE9BQUssRUFBRSxtQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWpFc0IsQ0FBakI7QUE0RUEsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMWNiOTI0NWRiMGE0OWNhZjM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0RldiBDaGF0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIGNyZWF0ZSBjaGF0IGNoYW5uZWxzLiBZb3UgY2FuIGRpcmVjdCBtZXNzYWdlIG90aGVyIHBlb3BsZS4gWW91IGNhbiByZXNwb25kIGFzIG5vcm1hbCBvciBhZGQgYSBnaWYvaW1hZ2UgYW5kIGV2ZW4gYmUgYWJsZSB0byB1c2UgZW1qb2kncy4gSWYgYSB1c2VyIHNpZ25zIHVwIGFuZCBhZGRzIHRoZWlyIGNlbGwgbnVtYmVyLCB0aGV5IGNhbiByZWNlaXZlIHRleHQgbm90aWZpY2F0aW9ucyBhcyB3ZWxsLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NoYXQuUE5HJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnRXhwcmVzcycsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9jaGF0JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZGV2cy1jaGF0Lm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDEyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTaWdtYSBTbmFwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIHJlZ2lzdGVyL2xvZy1pbiBhbmQgdXBsb2FkIGEgcG9zdCB0aGF0IHdpbGwgY29udGFpbiBhbiBpbWFnZSwgdGl0bGUsIG1lc3NhZ2UgYW5kIHRhZ3MuIEVhY2ggcG9zdCB3aWxsIHJlbmRlciB0aGUgdXNlcnMgbmFtZSBhbmQgZGlzcGxheSBob3cgbG9uZyBhZ28gdGhlIHBvc3Qgd2FzIGNyZWF0ZWQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvc25hcHMuUE5HJyxcbiAgICAgIHRhZ3M6IFsnTW9uZ28nLCAnRXhwcmVzcycsICdSZWFjdCcsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9TaWdtYS1TbmFwcycsXG4gICAgdmlzaXQ6ICdodHRwczovL3NpZ21hLXNuYXBzLm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0xvc3QgTXkgU3R1ZmYnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbG9zdCBhbmQgZm91bmQgc2l0ZSBmb3IgdXNlcnMgdG8gY3JlYXRlIHBvc3RzIGZvciBpdGVtcyBsb3N0IG9yIGZvdW5kLiBUaGlzIGlzIGEgTUVSTiBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB1c2VycyB0byByZWdpc3Rlci9sb2dpbiBhbmQgY3JlYXRlIHBvc3RzIGZvciBpdGVtcy4gVXNlcnMgY2FuIHVwZGF0ZS9kZWxldGUgdGhlaXIgb3duIHBvc3RzLiBVc2VycyBjYW4gZGlzcGxheSBwb3N0cyBieSBjYXRlZ29yeSBhcyB3ZWxsIGFzIGJ5IHVzZXIgaWYgdXNlciBoYXMgbXVsdGlwbGUgcG9zdHMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbG9zdC5QTkcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2xvc3QtZm91bmQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9sb3N0LW15LXN0dWZmLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRm9vZCA0IFRob3VnaHQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBpbmdyZWRpZW50cyBhbmQgdmlldyBkaWZmZXJlbnQgcmVjaXBlIGNhcmRzIGZvciBhZGRpdGlvbmFsIHJlY2lwZSBpbmZvLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Zvb2QuUE5HJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnU3RhdGUgTWFuYWdlbWVudCcsICd1c2VTdGF0ZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovZm9vZC00LXRob3VnaHQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9mb29kLTQtdGhvdWdodC52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BzaS1TaG9wJyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gYWRkIGl0ZW1zIHRvIHRoZWlyIGNhcnQuIE9uY2UgaW4gdGhlIGNhcnQgdXNlcnMgY2FuIGluY3JlYXNlL2RlY3JlYXNlIHF1YW50aXR5IG9mIGl0ZW1zIGluIHRoZSBjYXJ0LiBVc2VycyBjYW4gYWxzbyByZW1vdmUgdGhlIGl0ZW0gb3IgZXZlbiBlbXB0eSB0aGUgY2FydCBhbHRvZ2V0aGVyLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wc2kuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NvbW1lcmNlLmpzJywgJ1N0cmlwZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovcHNpLXNob3AnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wc2ktc2hvcC5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdaZXRhIE1vdmllcycsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBhcHAgd2lsbCBhbGxvdyB1c2VycyB0byBzZWFyY2ggZm9yIGFueSBtb3ZpZSBhbmQgY2FuIGNsaWNrIG9uIGFueSBtb3ZpZSBsaXN0ZWQgdG8gdmlldyB0aGUgbW92aWUgY2FyZCBmb3IgYWRkaXRpb25hbCBpbmZvIG9uIHRoZSBtb3ZpZVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy96ZXRhMS5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnU3R5bGVkIENvbXBvbmVudHMnLCAndXNlU3RhdGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L3pldGEtbW92aWVzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vemV0YS1tb3ZpZXMudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAzLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogJ0NvdmlkIFRyYWNrZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHVzZXMgdGhlIGRpc2Vhc2Uuc2ggYXBpLiBUaGlzIGdpdmVzIGRhdGEgdGhhdCBzaG93cyB1c2VycyB0aGUgZGlmZmVyZW50IG51bWJlcnMgd29ybGR3aWRlIGFuZCBieSBjb3VudHJ5LiBUaGUgbnVtYmVycyB1cGRhdGUgYXMgdGhlIGFwaSB1cGRhdGVzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jb3ZpZC5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhcnQuanMnLCAnTGVhZmxldCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovY292aWQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9jb3ZpZC12ZXJ0LXpldGEudmVyY2VsLmFwcC8nLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOYW5kb3MgQ2FrZXMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkkgZGV2ZWxvcGVkIHRoaXMgc2l0ZSBmb3IgYSBjaGljYWdvIHN0YXJ0LXVwIGJha2VyeSBidXNpbmVzcy4gVGhleSBoYXZlIGEgZmIgY2hhbm5lbCB3aXRoIG92ZXIgMzUwIGZvbGxvd2VycyBhbmQgSSBvZmZlcmVkIG15IHNlcnZpY2VzIHRvIGhlbHAgbWFya2V0IHRoZSBidXNpbmVzcyBieSBjcmVhdGluZyB0aGVpciBzaXRlLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jYWtlLlBORycsXG4gICAgdGFnczogWydSZWFjdCcsICdFbWFpbC5qcycsICdGcmFtZXItTW90aW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9uYW5kb3MtY2FrZXMyJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbmFuZG9zLWNha2VzMi52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTQsIHRleHQ6ICdHcmFkdWF0ZWQgZnJvbSBEZXZyeSBVbml2ZXJzaXR5IHdpdGggYSBiYWNoZWxvcnMgZGVncmVlIGluIG11bHRpbWVkaWEgZGVzaWduICYgZGV2ZWxvcG1lbnQnLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdEZWNpZGVkIHRvIGdldCBiYWNrIGludG8gdGhlIHdlYiBkZXYgZmllbGQgYW5kIHN0YXJ0IHRoZSBzZWxmLXRhdWdodCBwYXRoJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3RhcnRlZCBMYW1iZGEgU2Nob29sIGluIHRoZWlyIGZ1bGxzdGFjayBkZXZlbG9wbWVudCBwcm9ncmFtJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnQmVjYW1lIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=