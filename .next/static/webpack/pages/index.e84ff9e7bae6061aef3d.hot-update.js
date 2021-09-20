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
  title: 'Crpto Info',
  description: "This app will allow users to view current stats and news articles on various crypto currencies. Users can search for most crypto currencies to see stats, price changes, and news articles.",
  image: '/images/crypto.PNG',
  tags: ['React', 'Redux Toolkit', 'ANT Design', 'Rapid API'],
  source: 'https://github.com/ericcapiz/crypto_info',
  visit: 'https://crypto-inf.netlify.app/',
  id: 212
}, {
  title: 'Food 4 Thought',
  description: "This app will allow users to search for ingredients and view different recipe cards for additional recipe info.",
  image: '/images/food.PNG',
  tags: ['React', 'useState', 'Styled Components'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFFLG1RQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixNQUFyQixDQUpWO0FBS0VDLFFBQU0sRUFBRSxtQ0FMVjtBQU1FQyxPQUFLLEVBQUUsZ0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLHlNQUZmO0FBR0lDLE9BQUssRUFBRSxtQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsa0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxpU0FGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLDZMQUZmO0FBR0lDLE9BQUssRUFBRSxvQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsZUFBVixFQUEyQixZQUEzQixFQUF5QyxXQUF6QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsaUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGlIQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixtQkFBdEIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFDLHFNQUZkO0FBR0VDLE9BQUssRUFBRSxpQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixRQUF6QixDQUpSO0FBS0VDLFFBQU0sRUFBRSx1Q0FMVjtBQU1FQyxPQUFLLEVBQUUsK0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNklBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxtQkFBVixFQUErQixVQUEvQixDQUpSO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsaUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBaUV0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsMkpBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFNBQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9DQUxWO0FBTUVDLE9BQUssRUFBRSxxQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWpFc0IsRUEwRXRCO0FBQ0VOLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFBRSw0TEFGZjtBQUdFQyxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsZUFBdEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNENBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBMUVzQixDQUFqQjtBQXFGQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4NGZmOWU3YmFlNjA2MWFlZjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnRGV2IENoYXQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gY3JlYXRlIGNoYXQgY2hhbm5lbHMuIFlvdSBjYW4gZGlyZWN0IG1lc3NhZ2Ugb3RoZXIgcGVvcGxlLiBZb3UgY2FuIHJlc3BvbmQgYXMgbm9ybWFsIG9yIGFkZCBhIGdpZi9pbWFnZSBhbmQgZXZlbiBiZSBhYmxlIHRvIHVzZSBlbWpvaSdzLiBJZiBhIHVzZXIgc2lnbnMgdXAgYW5kIGFkZHMgdGhlaXIgY2VsbCBudW1iZXIsIHRoZXkgY2FuIHJlY2VpdmUgdGV4dCBub3RpZmljYXRpb25zIGFzIHdlbGwuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvY2hhdC5QTkcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdFeHByZXNzJywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2NoYXQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9kZXZzLWNoYXQubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMTIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NpZ21hIFNuYXAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gcmVnaXN0ZXIvbG9nLWluIGFuZCB1cGxvYWQgYSBwb3N0IHRoYXQgd2lsbCBjb250YWluIGFuIGltYWdlLCB0aXRsZSwgbWVzc2FnZSBhbmQgdGFncy4gRWFjaCBwb3N0IHdpbGwgcmVuZGVyIHRoZSB1c2VycyBuYW1lIGFuZCBkaXNwbGF5IGhvdyBsb25nIGFnbyB0aGUgcG9zdCB3YXMgY3JlYXRlZC5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9zbmFwcy5QTkcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L1NpZ21hLVNuYXBzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vc2lnbWEtc25hcHMubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTG9zdCBNeSBTdHVmZicsXG4gICAgZGVzY3JpcHRpb246IFwiQSBsb3N0IGFuZCBmb3VuZCBzaXRlIGZvciB1c2VycyB0byBjcmVhdGUgcG9zdHMgZm9yIGl0ZW1zIGxvc3Qgb3IgZm91bmQuIFRoaXMgaXMgYSBNRVJOIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHJlZ2lzdGVyL2xvZ2luIGFuZCBjcmVhdGUgcG9zdHMgZm9yIGl0ZW1zLiBVc2VycyBjYW4gdXBkYXRlL2RlbGV0ZSB0aGVpciBvd24gcG9zdHMuIFVzZXJzIGNhbiBkaXNwbGF5IHBvc3RzIGJ5IGNhdGVnb3J5IGFzIHdlbGwgYXMgYnkgdXNlciBpZiB1c2VyIGhhcyBtdWx0aXBsZSBwb3N0cy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9sb3N0LlBORycsXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovbG9zdC1mb3VuZCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2xvc3QtbXktc3R1ZmYudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDcnB0byBJbmZvJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIHZpZXcgY3VycmVudCBzdGF0cyBhbmQgbmV3cyBhcnRpY2xlcyBvbiB2YXJpb3VzIGNyeXB0byBjdXJyZW5jaWVzLiBVc2VycyBjYW4gc2VhcmNoIGZvciBtb3N0IGNyeXB0byBjdXJyZW5jaWVzIHRvIHNlZSBzdGF0cywgcHJpY2UgY2hhbmdlcywgYW5kIG5ld3MgYXJ0aWNsZXMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvY3J5cHRvLlBORycsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ1JlZHV4IFRvb2xraXQnLCAnQU5UIERlc2lnbicsICdSYXBpZCBBUEknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2NyeXB0b19pbmZvJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vY3J5cHRvLWluZi5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiAyMTIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Zvb2QgNCBUaG91Z2h0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIHNlYXJjaCBmb3IgaW5ncmVkaWVudHMgYW5kIHZpZXcgZGlmZmVyZW50IHJlY2lwZSBjYXJkcyBmb3IgYWRkaXRpb25hbCByZWNpcGUgaW5mby5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9mb29kLlBORycsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ3VzZVN0YXRlJywgJ1N0eWxlZCBDb21wb25lbnRzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9mb29kLTQtdGhvdWdodCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2Zvb2QtNC10aG91Z2h0LnZlcmNlbC5hcHAvJyxcbiAgICBpZDogOCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUHNpLVNob3AnLFxuICAgIGRlc2NyaXB0aW9uOlwiVGhpcyBhcHAgd2lsbCBhbGxvdyB1c2VycyB0byBhZGQgaXRlbXMgdG8gdGhlaXIgY2FydC4gT25jZSBpbiB0aGUgY2FydCB1c2VycyBjYW4gaW5jcmVhc2UvZGVjcmVhc2UgcXVhbnRpdHkgb2YgaXRlbXMgaW4gdGhlIGNhcnQuIFVzZXJzIGNhbiBhbHNvIHJlbW92ZSB0aGUgaXRlbSBvciBldmVuIGVtcHR5IHRoZSBjYXJ0IGFsdG9nZXRoZXIuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BzaS5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ29tbWVyY2UuanMnLCAnU3RyaXBlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9wc2ktc2hvcCcsXG4gICAgdmlzaXQ6ICdodHRwczovL3BzaS1zaG9wLm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1pldGEgTW92aWVzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIHNlYXJjaCBmb3IgYW55IG1vdmllIGFuZCBjYW4gY2xpY2sgb24gYW55IG1vdmllIGxpc3RlZCB0byB2aWV3IHRoZSBtb3ZpZSBjYXJkIGZvciBhZGRpdGlvbmFsIGluZm8gb24gdGhlIG1vdmllXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3pldGExLlBORycsXG4gICAgdGFnczogWydSZWFjdCcsICdTdHlsZWQgQ29tcG9uZW50cycsICd1c2VTdGF0ZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovemV0YS1tb3ZpZXMnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly96ZXRhLW1vdmllcy52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDMsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiAnQ292aWQgVHJhY2tlcicsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBhcHAgdXNlcyB0aGUgZGlzZWFzZS5zaCBhcGkuIFRoaXMgZ2l2ZXMgZGF0YSB0aGF0IHNob3dzIHVzZXJzIHRoZSBkaWZmZXJlbnQgbnVtYmVycyB3b3JsZHdpZGUgYW5kIGJ5IGNvdW50cnkuIFRoZSBudW1iZXJzIHVwZGF0ZSBhcyB0aGUgYXBpIHVwZGF0ZXMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NvdmlkLlBORycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGFydC5qcycsICdMZWFmbGV0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9jb3ZpZCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2NvdmlkLXZlcnQtemV0YS52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDQsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ05hbmRvcyBDYWtlcycsXG4gICAgZGVzY3JpcHRpb246IFwiSSBkZXZlbG9wZWQgdGhpcyBzaXRlIGZvciBhIGNoaWNhZ28gc3RhcnQtdXAgYmFrZXJ5IGJ1c2luZXNzLiBUaGV5IGhhdmUgYSBmYiBjaGFubmVsIHdpdGggb3ZlciAzNTAgZm9sbG93ZXJzIGFuZCBJIG9mZmVyZWQgbXkgc2VydmljZXMgdG8gaGVscCBtYXJrZXQgdGhlIGJ1c2luZXNzIGJ5IGNyZWF0aW5nIHRoZWlyIHNpdGUuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Nha2UuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0VtYWlsLmpzJywgJ0ZyYW1lci1Nb3Rpb24nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L25hbmRvcy1jYWtlczInLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9uYW5kb3MtY2FrZXMyLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogNSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNCwgdGV4dDogJ0dyYWR1YXRlZCBmcm9tIERldnJ5IFVuaXZlcnNpdHkgd2l0aCBhIGJhY2hlbG9ycyBkZWdyZWUgaW4gbXVsdGltZWRpYSBkZXNpZ24gJiBkZXZlbG9wbWVudCcsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0RlY2lkZWQgdG8gZ2V0IGJhY2sgaW50byB0aGUgd2ViIGRldiBmaWVsZCBhbmQgc3RhcnQgdGhlIHNlbGYtdGF1Z2h0IHBhdGgnLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdTdGFydGVkIExhbWJkYSBTY2hvb2wgaW4gdGhlaXIgZnVsbHN0YWNrIGRldmVsb3BtZW50IHByb2dyYW0nLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdCZWNhbWUgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==