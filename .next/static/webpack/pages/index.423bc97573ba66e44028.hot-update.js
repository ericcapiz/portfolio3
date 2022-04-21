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
var projects = [// {
//   title: 'Dev Chat',
//   description: "This app will allow users to create chat channels. You can direct message other people. You can respond as normal or add a gif/image and even be able to use emjoi's. If a user signs up and adds their cell number, they can receive text notifications as well.",
//     image: '/images/chat.PNG',
//     tags: ['React', 'Express', 'Node'],
//   source: 'https://github.com/ericcapiz/chat',
//   visit: 'https://devs-chat.netlify.app/',
//   id: 12,
// },
{
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
  title: 'Crypto Info',
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
  description: "I developed this site for a Chicago start-up bakery business. They have a FB channel with over 350 followers and I offered my services to help market the business by creating their site.",
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
}, {
  year: 2021,
  text: 'Frontend Devloper for NexTech Solutions; OCT 2021-Present'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLHlNQUZmO0FBR0lDLE9BQUssRUFBRSxtQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsa0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxpU0FGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDZMQUZmO0FBR0lDLE9BQUssRUFBRSxvQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsZUFBVixFQUEyQixZQUEzQixFQUF5QyxXQUF6QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsaUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGlIQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixtQkFBdEIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFDLHFNQUZkO0FBR0VDLE9BQUssRUFBRSxpQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixRQUF6QixDQUpSO0FBS0VDLFFBQU0sRUFBRSx1Q0FMVjtBQU1FQyxPQUFLLEVBQUUsK0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNklBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxtQkFBVixFQUErQixVQUEvQixDQUpSO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsaUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBaUV0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsMkpBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFNBQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9DQUxWO0FBTUVDLE9BQUssRUFBRSxxQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWpFc0IsRUEwRXRCO0FBQ0VOLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFBRSw0TEFGZjtBQUdFQyxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsZUFBdEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNENBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBMUVzQixDQUFqQjtBQXFGQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MjNiYzk3NTczYmE2NmU0NDAyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ0RldiBDaGF0JyxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIGNyZWF0ZSBjaGF0IGNoYW5uZWxzLiBZb3UgY2FuIGRpcmVjdCBtZXNzYWdlIG90aGVyIHBlb3BsZS4gWW91IGNhbiByZXNwb25kIGFzIG5vcm1hbCBvciBhZGQgYSBnaWYvaW1hZ2UgYW5kIGV2ZW4gYmUgYWJsZSB0byB1c2UgZW1qb2kncy4gSWYgYSB1c2VyIHNpZ25zIHVwIGFuZCBhZGRzIHRoZWlyIGNlbGwgbnVtYmVyLCB0aGV5IGNhbiByZWNlaXZlIHRleHQgbm90aWZpY2F0aW9ucyBhcyB3ZWxsLlwiLFxuICAvLyAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NoYXQuUE5HJyxcbiAgLy8gICAgIHRhZ3M6IFsnUmVhY3QnLCAnRXhwcmVzcycsICdOb2RlJ10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9jaGF0JyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZGV2cy1jaGF0Lm5ldGxpZnkuYXBwLycsXG4gIC8vICAgaWQ6IDEyLFxuICAvLyB9LFxuICB7XG4gICAgdGl0bGU6ICdTaWdtYSBTbmFwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIHJlZ2lzdGVyL2xvZy1pbiBhbmQgdXBsb2FkIGEgcG9zdCB0aGF0IHdpbGwgY29udGFpbiBhbiBpbWFnZSwgdGl0bGUsIG1lc3NhZ2UgYW5kIHRhZ3MuIEVhY2ggcG9zdCB3aWxsIHJlbmRlciB0aGUgdXNlcnMgbmFtZSBhbmQgZGlzcGxheSBob3cgbG9uZyBhZ28gdGhlIHBvc3Qgd2FzIGNyZWF0ZWQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvc25hcHMuUE5HJyxcbiAgICAgIHRhZ3M6IFsnTW9uZ28nLCAnRXhwcmVzcycsICdSZWFjdCcsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9TaWdtYS1TbmFwcycsXG4gICAgdmlzaXQ6ICdodHRwczovL3NpZ21hLXNuYXBzLm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0xvc3QgTXkgU3R1ZmYnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbG9zdCBhbmQgZm91bmQgc2l0ZSBmb3IgdXNlcnMgdG8gY3JlYXRlIHBvc3RzIGZvciBpdGVtcyBsb3N0IG9yIGZvdW5kLiBUaGlzIGlzIGEgTUVSTiBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB1c2VycyB0byByZWdpc3Rlci9sb2dpbiBhbmQgY3JlYXRlIHBvc3RzIGZvciBpdGVtcy4gVXNlcnMgY2FuIHVwZGF0ZS9kZWxldGUgdGhlaXIgb3duIHBvc3RzLiBVc2VycyBjYW4gZGlzcGxheSBwb3N0cyBieSBjYXRlZ29yeSBhcyB3ZWxsIGFzIGJ5IHVzZXIgaWYgdXNlciBoYXMgbXVsdGlwbGUgcG9zdHMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbG9zdC5QTkcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2xvc3QtZm91bmQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9sb3N0LW15LXN0dWZmLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ3J5cHRvIEluZm8nLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gdmlldyBjdXJyZW50IHN0YXRzIGFuZCBuZXdzIGFydGljbGVzIG9uIHZhcmlvdXMgY3J5cHRvIGN1cnJlbmNpZXMuIFVzZXJzIGNhbiBzZWFyY2ggZm9yIG1vc3QgY3J5cHRvIGN1cnJlbmNpZXMgdG8gc2VlIHN0YXRzLCBwcmljZSBjaGFuZ2VzLCBhbmQgbmV3cyBhcnRpY2xlcy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9jcnlwdG8uUE5HJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnUmVkdXggVG9vbGtpdCcsICdBTlQgRGVzaWduJywgJ1JhcGlkIEFQSSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovY3J5cHRvX2luZm8nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9jcnlwdG8taW5mLm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDIxMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRm9vZCA0IFRob3VnaHQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBpbmdyZWRpZW50cyBhbmQgdmlldyBkaWZmZXJlbnQgcmVjaXBlIGNhcmRzIGZvciBhZGRpdGlvbmFsIHJlY2lwZSBpbmZvLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Zvb2QuUE5HJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAndXNlU3RhdGUnLCAnU3R5bGVkIENvbXBvbmVudHMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2Zvb2QtNC10aG91Z2h0JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9vZC00LXRob3VnaHQudmVyY2VsLmFwcC8nLFxuICAgIGlkOiA4LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQc2ktU2hvcCcsXG4gICAgZGVzY3JpcHRpb246XCJUaGlzIGFwcCB3aWxsIGFsbG93IHVzZXJzIHRvIGFkZCBpdGVtcyB0byB0aGVpciBjYXJ0LiBPbmNlIGluIHRoZSBjYXJ0IHVzZXJzIGNhbiBpbmNyZWFzZS9kZWNyZWFzZSBxdWFudGl0eSBvZiBpdGVtcyBpbiB0aGUgY2FydC4gVXNlcnMgY2FuIGFsc28gcmVtb3ZlIHRoZSBpdGVtIG9yIGV2ZW4gZW1wdHkgdGhlIGNhcnQgYWx0b2dldGhlci5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcHNpLlBORycsXG4gICAgdGFnczogWydSZWFjdCcsICdDb21tZXJjZS5qcycsICdTdHJpcGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L3BzaS1zaG9wJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcHNpLXNob3AubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnWmV0YSBNb3ZpZXMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gc2VhcmNoIGZvciBhbnkgbW92aWUgYW5kIGNhbiBjbGljayBvbiBhbnkgbW92aWUgbGlzdGVkIHRvIHZpZXcgdGhlIG1vdmllIGNhcmQgZm9yIGFkZGl0aW9uYWwgaW5mbyBvbiB0aGUgbW92aWVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvemV0YTEuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ1N0eWxlZCBDb21wb25lbnRzJywgJ3VzZVN0YXRlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei96ZXRhLW1vdmllcycsXG4gICAgdmlzaXQ6ICdodHRwczovL3pldGEtbW92aWVzLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogMyxcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6ICdDb3ZpZCBUcmFja2VyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGFwcCB1c2VzIHRoZSBkaXNlYXNlLnNoIGFwaS4gVGhpcyBnaXZlcyBkYXRhIHRoYXQgc2hvd3MgdXNlcnMgdGhlIGRpZmZlcmVudCBudW1iZXJzIHdvcmxkd2lkZSBhbmQgYnkgY291bnRyeS4gVGhlIG51bWJlcnMgdXBkYXRlIGFzIHRoZSBhcGkgdXBkYXRlcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY292aWQuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXJ0LmpzJywgJ0xlYWZsZXQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2NvdmlkJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vY292aWQtdmVydC16ZXRhLnZlcmNlbC5hcHAvJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTmFuZG9zIENha2VzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJJIGRldmVsb3BlZCB0aGlzIHNpdGUgZm9yIGEgQ2hpY2FnbyBzdGFydC11cCBiYWtlcnkgYnVzaW5lc3MuIFRoZXkgaGF2ZSBhIEZCIGNoYW5uZWwgd2l0aCBvdmVyIDM1MCBmb2xsb3dlcnMgYW5kIEkgb2ZmZXJlZCBteSBzZXJ2aWNlcyB0byBoZWxwIG1hcmtldCB0aGUgYnVzaW5lc3MgYnkgY3JlYXRpbmcgdGhlaXIgc2l0ZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY2FrZS5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnRW1haWwuanMnLCAnRnJhbWVyLU1vdGlvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovbmFuZG9zLWNha2VzMicsXG4gICAgdmlzaXQ6ICdodHRwczovL25hbmRvcy1jYWtlczIudmVyY2VsLmFwcC8nLFxuICAgIGlkOiA1LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE0LCB0ZXh0OiAnR3JhZHVhdGVkIGZyb20gRGV2cnkgVW5pdmVyc2l0eSB3aXRoIGEgYmFjaGVsb3JzIGRlZ3JlZSBpbiBtdWx0aW1lZGlhIGRlc2lnbiAmIGRldmVsb3BtZW50JywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRGVjaWRlZCB0byBnZXQgYmFjayBpbnRvIHRoZSB3ZWIgZGV2IGZpZWxkIGFuZCBzdGFydCB0aGUgc2VsZi10YXVnaHQgcGF0aCcsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1N0YXJ0ZWQgTGFtYmRhIFNjaG9vbCBpbiB0aGVpciBmdWxsc3RhY2sgZGV2ZWxvcG1lbnQgcHJvZ3JhbScsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ0JlY2FtZSBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdGcm9udGVuZCBEZXZsb3BlciBmb3IgTmV4VGVjaCBTb2x1dGlvbnM7IE9DVCAyMDIxLVByZXNlbnQnLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9