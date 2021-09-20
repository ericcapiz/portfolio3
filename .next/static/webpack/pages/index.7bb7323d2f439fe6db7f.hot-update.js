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
  description: "A lost and found site for users to create posts for items lost or found. This is a MERN application that allows users to register/login and create posts for items. Users can update/delete their own posts. Users can display posts by category as well as by user if user has multiple posts.",
  image: '/images/crypto.PNG',
  tags: ['React', 'Redux Toolkit', 'ANT Design', 'Rapid API'],
  source: 'https://github.com/ericcapiz/lost-found',
  visit: 'https://lost-my-stuff.vercel.app/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFFLG1RQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixNQUFyQixDQUpWO0FBS0VDLFFBQU0sRUFBRSxtQ0FMVjtBQU1FQyxPQUFLLEVBQUUsZ0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLHlNQUZmO0FBR0lDLE9BQUssRUFBRSxtQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsa0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxpU0FGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLGlTQUZmO0FBR0lDLE9BQUssRUFBRSxvQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsZUFBVixFQUEyQixZQUEzQixFQUF5QyxXQUF6QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSx5Q0FMVjtBQU1FQyxPQUFLLEVBQUUsbUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGlIQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixtQkFBdEIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFDLHFNQUZkO0FBR0VDLE9BQUssRUFBRSxpQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixRQUF6QixDQUpSO0FBS0VDLFFBQU0sRUFBRSx1Q0FMVjtBQU1FQyxPQUFLLEVBQUUsK0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNklBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxtQkFBVixFQUErQixVQUEvQixDQUpSO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsaUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBaUV0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsMkpBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFNBQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9DQUxWO0FBTUVDLE9BQUssRUFBRSxxQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWpFc0IsRUEwRXRCO0FBQ0VOLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFBRSw0TEFGZjtBQUdFQyxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsZUFBdEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNENBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBMUVzQixDQUFqQjtBQXFGQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiYjczMjNkMmY0MzlmZTZkYjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnRGV2IENoYXQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gY3JlYXRlIGNoYXQgY2hhbm5lbHMuIFlvdSBjYW4gZGlyZWN0IG1lc3NhZ2Ugb3RoZXIgcGVvcGxlLiBZb3UgY2FuIHJlc3BvbmQgYXMgbm9ybWFsIG9yIGFkZCBhIGdpZi9pbWFnZSBhbmQgZXZlbiBiZSBhYmxlIHRvIHVzZSBlbWpvaSdzLiBJZiBhIHVzZXIgc2lnbnMgdXAgYW5kIGFkZHMgdGhlaXIgY2VsbCBudW1iZXIsIHRoZXkgY2FuIHJlY2VpdmUgdGV4dCBub3RpZmljYXRpb25zIGFzIHdlbGwuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvY2hhdC5QTkcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdFeHByZXNzJywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2NoYXQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9kZXZzLWNoYXQubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMTIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NpZ21hIFNuYXAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gcmVnaXN0ZXIvbG9nLWluIGFuZCB1cGxvYWQgYSBwb3N0IHRoYXQgd2lsbCBjb250YWluIGFuIGltYWdlLCB0aXRsZSwgbWVzc2FnZSBhbmQgdGFncy4gRWFjaCBwb3N0IHdpbGwgcmVuZGVyIHRoZSB1c2VycyBuYW1lIGFuZCBkaXNwbGF5IGhvdyBsb25nIGFnbyB0aGUgcG9zdCB3YXMgY3JlYXRlZC5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9zbmFwcy5QTkcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L1NpZ21hLVNuYXBzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vc2lnbWEtc25hcHMubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTG9zdCBNeSBTdHVmZicsXG4gICAgZGVzY3JpcHRpb246IFwiQSBsb3N0IGFuZCBmb3VuZCBzaXRlIGZvciB1c2VycyB0byBjcmVhdGUgcG9zdHMgZm9yIGl0ZW1zIGxvc3Qgb3IgZm91bmQuIFRoaXMgaXMgYSBNRVJOIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHJlZ2lzdGVyL2xvZ2luIGFuZCBjcmVhdGUgcG9zdHMgZm9yIGl0ZW1zLiBVc2VycyBjYW4gdXBkYXRlL2RlbGV0ZSB0aGVpciBvd24gcG9zdHMuIFVzZXJzIGNhbiBkaXNwbGF5IHBvc3RzIGJ5IGNhdGVnb3J5IGFzIHdlbGwgYXMgYnkgdXNlciBpZiB1c2VyIGhhcyBtdWx0aXBsZSBwb3N0cy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9sb3N0LlBORycsXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovbG9zdC1mb3VuZCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2xvc3QtbXktc3R1ZmYudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDcnB0byBJbmZvJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxvc3QgYW5kIGZvdW5kIHNpdGUgZm9yIHVzZXJzIHRvIGNyZWF0ZSBwb3N0cyBmb3IgaXRlbXMgbG9zdCBvciBmb3VuZC4gVGhpcyBpcyBhIE1FUk4gYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgdXNlcnMgdG8gcmVnaXN0ZXIvbG9naW4gYW5kIGNyZWF0ZSBwb3N0cyBmb3IgaXRlbXMuIFVzZXJzIGNhbiB1cGRhdGUvZGVsZXRlIHRoZWlyIG93biBwb3N0cy4gVXNlcnMgY2FuIGRpc3BsYXkgcG9zdHMgYnkgY2F0ZWdvcnkgYXMgd2VsbCBhcyBieSB1c2VyIGlmIHVzZXIgaGFzIG11bHRpcGxlIHBvc3RzLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NyeXB0by5QTkcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdSZWR1eCBUb29sa2l0JywgJ0FOVCBEZXNpZ24nLCAnUmFwaWQgQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9sb3N0LWZvdW5kJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbG9zdC1teS1zdHVmZi52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDIxMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRm9vZCA0IFRob3VnaHQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBpbmdyZWRpZW50cyBhbmQgdmlldyBkaWZmZXJlbnQgcmVjaXBlIGNhcmRzIGZvciBhZGRpdGlvbmFsIHJlY2lwZSBpbmZvLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Zvb2QuUE5HJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAndXNlU3RhdGUnLCAnU3R5bGVkIENvbXBvbmVudHMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2Zvb2QtNC10aG91Z2h0JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9vZC00LXRob3VnaHQudmVyY2VsLmFwcC8nLFxuICAgIGlkOiA4LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQc2ktU2hvcCcsXG4gICAgZGVzY3JpcHRpb246XCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIGFkZCBpdGVtcyB0byB0aGVpciBjYXJ0LiBPbmNlIGluIHRoZSBjYXJ0IHVzZXJzIGNhbiBpbmNyZWFzZS9kZWNyZWFzZSBxdWFudGl0eSBvZiBpdGVtcyBpbiB0aGUgY2FydC4gVXNlcnMgY2FuIGFsc28gcmVtb3ZlIHRoZSBpdGVtIG9yIGV2ZW4gZW1wdHkgdGhlIGNhcnQgYWx0b2dldGhlci5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcHNpLlBORycsXG4gICAgdGFnczogWydSZWFjdCcsICdDb21tZXJjZS5qcycsICdTdHJpcGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L3BzaS1zaG9wJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcHNpLXNob3AubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnWmV0YSBNb3ZpZXMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBhbnkgbW92aWUgYW5kIGNhbiBjbGljayBvbiBhbnkgbW92aWUgbGlzdGVkIHRvIHZpZXcgdGhlIG1vdmllIGNhcmQgZm9yIGFkZGl0aW9uYWwgaW5mbyBvbiB0aGUgbW92aWVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvemV0YTEuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ1N0eWxlZCBDb21wb25lbnRzJywgJ3VzZVN0YXRlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei96ZXRhLW1vdmllcycsXG4gICAgdmlzaXQ6ICdodHRwczovL3pldGEtbW92aWVzLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogMyxcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6ICdDb3ZpZCBUcmFja2VyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB1c2VzIHRoZSBkaXNlYXNlLnNoIGFwaS4gVGhpcyBnaXZlcyBkYXRhIHRoYXQgc2hvd3MgdXNlcnMgdGhlIGRpZmZlcmVudCBudW1iZXJzIHdvcmxkd2lkZSBhbmQgYnkgY291bnRyeS4gVGhlIG51bWJlcnMgdXBkYXRlIGFzIHRoZSBhcGkgdXBkYXRlcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY292aWQuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXJ0LmpzJywgJ0xlYWZsZXQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2NvdmlkJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vY292aWQtdmVydC16ZXRhLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTmFuZG9zIENha2VzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJJIGRldmVsb3BlZCB0aGlzIHNpdGUgZm9yIGEgY2hpY2FnbyBzdGFydC11cCBiYWtlcnkgYnVzaW5lc3MuIFRoZXkgaGF2ZSBhIGZiIGNoYW5uZWwgd2l0aCBvdmVyIDM1MCBmb2xsb3dlcnMgYW5kIEkgb2ZmZXJlZCBteSBzZXJ2aWNlcyB0byBoZWxwIG1hcmtldCB0aGUgYnVzaW5lc3MgYnkgY3JlYXRpbmcgdGhlaXIgc2l0ZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY2FrZS5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnRW1haWwuanMnLCAnRnJhbWVyLU1vdGlvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovbmFuZG9zLWNha2VzMicsXG4gICAgdmlzaXQ6ICdodHRwczovL25hbmRvcy1jYWtlczIudmVyY2VsLmFwcC8nLFxuICAgIGlkOiA1LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE0LCB0ZXh0OiAnR3JhZHVhdGVkIGZyb20gRGV2cnkgVW5pdmVyc2l0eSB3aXRoIGEgYmFjaGVsb3JzIGRlZ3JlZSBpbiBtdWx0aW1lZGlhIGRlc2lnbiAmIGRldmVsb3BtZW50JywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRGVjaWRlZCB0byBnZXQgYmFjayBpbnRvIHRoZSB3ZWIgZGV2IGZpZWxkIGFuZCBzdGFydCB0aGUgc2VsZi10YXVnaHQgcGF0aCcsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1N0YXJ0ZWQgTGFtYmRhIFNjaG9vbCBpbiB0aGVpciBmdWxsc3RhY2sgZGV2ZWxvcG1lbnQgcHJvZ3JhbScsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ0JlY2FtZSBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9