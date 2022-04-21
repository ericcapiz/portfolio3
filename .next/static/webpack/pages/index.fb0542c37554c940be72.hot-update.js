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
// {
//   title: 'Sigma Snap',
//   description: "This app will allow users to register/log-in and upload a post that will contain an image, title, message and tags. Each post will render the users name and display how long ago the post was created.",
//     image: '/images/snaps.PNG',
//     tags: ['Mongo', 'Express', 'React', 'Node'],
//   source: 'https://github.com/ericcapiz/Sigma-Snaps',
//   visit: 'https://sigma-snaps.netlify.app/',
//   id: 0,
// },
{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFFLGlTQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSx5Q0FMVjtBQU1FQyxPQUFLLEVBQUUsbUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNkxBRmY7QUFHSUMsT0FBSyxFQUFFLG9CQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxlQUFWLEVBQTJCLFlBQTNCLEVBQXlDLFdBQXpDLENBSlY7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSxpQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsRUFxQ3RCO0FBQ0VOLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsaUhBRmY7QUFHSUMsT0FBSyxFQUFFLGtCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLG1CQUF0QixDQUpWO0FBS0VDLFFBQU0sRUFBRSw2Q0FMVjtBQU1FQyxPQUFLLEVBQUUsb0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FyQ3NCLEVBOEN0QjtBQUNFTixPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUMscU1BRmQ7QUFHRUMsT0FBSyxFQUFFLGlCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCLFFBQXpCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHVDQUxWO0FBTUVDLE9BQUssRUFBRSwrQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTlDc0IsRUF1RHRCO0FBQ0VOLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSw2SUFGZjtBQUdFQyxPQUFLLEVBQUUsbUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLG1CQUFWLEVBQStCLFVBQS9CLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSxpQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXZEc0IsRUFpRXRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSwySkFGZjtBQUdFQyxPQUFLLEVBQUUsbUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsU0FBdEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0NBTFY7QUFNRUMsT0FBSyxFQUFFLHFDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBakVzQixFQTBFdEI7QUFDRU4sT0FBSyxFQUFFLGNBRFQ7QUFFRUMsYUFBVyxFQUFFLDRMQUZmO0FBR0VDLE9BQUssRUFBRSxrQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixlQUF0QixDQUpSO0FBS0VDLFFBQU0sRUFBRSw0Q0FMVjtBQU1FQyxPQUFLLEVBQUUsbUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0ExRXNCLENBQWpCO0FBcUZBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiMDU0MmMzNzU1NGM5NDBiZTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnRGV2IENoYXQnLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gY3JlYXRlIGNoYXQgY2hhbm5lbHMuIFlvdSBjYW4gZGlyZWN0IG1lc3NhZ2Ugb3RoZXIgcGVvcGxlLiBZb3UgY2FuIHJlc3BvbmQgYXMgbm9ybWFsIG9yIGFkZCBhIGdpZi9pbWFnZSBhbmQgZXZlbiBiZSBhYmxlIHRvIHVzZSBlbWpvaSdzLiBJZiBhIHVzZXIgc2lnbnMgdXAgYW5kIGFkZHMgdGhlaXIgY2VsbCBudW1iZXIsIHRoZXkgY2FuIHJlY2VpdmUgdGV4dCBub3RpZmljYXRpb25zIGFzIHdlbGwuXCIsXG4gIC8vICAgICBpbWFnZTogJy9pbWFnZXMvY2hhdC5QTkcnLFxuICAvLyAgICAgdGFnczogWydSZWFjdCcsICdFeHByZXNzJywgJ05vZGUnXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L2NoYXQnLFxuICAvLyAgIHZpc2l0OiAnaHR0cHM6Ly9kZXZzLWNoYXQubmV0bGlmeS5hcHAvJyxcbiAgLy8gICBpZDogMTIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ1NpZ21hIFNuYXAnLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gcmVnaXN0ZXIvbG9nLWluIGFuZCB1cGxvYWQgYSBwb3N0IHRoYXQgd2lsbCBjb250YWluIGFuIGltYWdlLCB0aXRsZSwgbWVzc2FnZSBhbmQgdGFncy4gRWFjaCBwb3N0IHdpbGwgcmVuZGVyIHRoZSB1c2VycyBuYW1lIGFuZCBkaXNwbGF5IGhvdyBsb25nIGFnbyB0aGUgcG9zdCB3YXMgY3JlYXRlZC5cIixcbiAgLy8gICAgIGltYWdlOiAnL2ltYWdlcy9zbmFwcy5QTkcnLFxuICAvLyAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L1NpZ21hLVNuYXBzJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vc2lnbWEtc25hcHMubmV0bGlmeS5hcHAvJyxcbiAgLy8gICBpZDogMCxcbiAgLy8gfSxcbiAge1xuICAgIHRpdGxlOiAnTG9zdCBNeSBTdHVmZicsXG4gICAgZGVzY3JpcHRpb246IFwiQSBsb3N0IGFuZCBmb3VuZCBzaXRlIGZvciB1c2VycyB0byBjcmVhdGUgcG9zdHMgZm9yIGl0ZW1zIGxvc3Qgb3IgZm91bmQuIFRoaXMgaXMgYSBNRVJOIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHJlZ2lzdGVyL2xvZ2luIGFuZCBjcmVhdGUgcG9zdHMgZm9yIGl0ZW1zLiBVc2VycyBjYW4gdXBkYXRlL2RlbGV0ZSB0aGVpciBvd24gcG9zdHMuIFVzZXJzIGNhbiBkaXNwbGF5IHBvc3RzIGJ5IGNhdGVnb3J5IGFzIHdlbGwgYXMgYnkgdXNlciBpZiB1c2VyIGhhcyBtdWx0aXBsZSBwb3N0cy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9sb3N0LlBORycsXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovbG9zdC1mb3VuZCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2xvc3QtbXktc3R1ZmYudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDcnlwdG8gSW5mbycsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBhcHAgd2lsbCBhbGxvdyB1c2VycyB0byB2aWV3IGN1cnJlbnQgc3RhdHMgYW5kIG5ld3MgYXJ0aWNsZXMgb24gdmFyaW91cyBjcnlwdG8gY3VycmVuY2llcy4gVXNlcnMgY2FuIHNlYXJjaCBmb3IgbW9zdCBjcnlwdG8gY3VycmVuY2llcyB0byBzZWUgc3RhdHMsIHByaWNlIGNoYW5nZXMsIGFuZCBuZXdzIGFydGljbGVzLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NyeXB0by5QTkcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdSZWR1eCBUb29sa2l0JywgJ0FOVCBEZXNpZ24nLCAnUmFwaWQgQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9jcnlwdG9faW5mbycsXG4gICAgdmlzaXQ6ICdodHRwczovL2NyeXB0by1pbmYubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogMjEyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGb29kIDQgVGhvdWdodCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBhcHAgd2lsbCBhbGxvdyB1c2VycyB0byBzZWFyY2ggZm9yIGluZ3JlZGllbnRzIGFuZCB2aWV3IGRpZmZlcmVudCByZWNpcGUgY2FyZHMgZm9yIGFkZGl0aW9uYWwgcmVjaXBlIGluZm8uXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvZm9vZC5QTkcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICd1c2VTdGF0ZScsICdTdHlsZWQgQ29tcG9uZW50cyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovZm9vZC00LXRob3VnaHQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9mb29kLTQtdGhvdWdodC52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BzaS1TaG9wJyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgYXBwIHdpbGwgYWxsb3cgdXNlcnMgdG8gYWRkIGl0ZW1zIHRvIHRoZWlyIGNhcnQuIE9uY2UgaW4gdGhlIGNhcnQgdXNlcnMgY2FuIGluY3JlYXNlL2RlY3JlYXNlIHF1YW50aXR5IG9mIGl0ZW1zIGluIHRoZSBjYXJ0LiBVc2VycyBjYW4gYWxzbyByZW1vdmUgdGhlIGl0ZW0gb3IgZXZlbiBlbXB0eSB0aGUgY2FydCBhbHRvZ2V0aGVyLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wc2kuUE5HJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NvbW1lcmNlLmpzJywgJ1N0cmlwZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovcHNpLXNob3AnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wc2ktc2hvcC5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdaZXRhIE1vdmllcycsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBhcHAgd2lsbCBhbGxvdyB1c2VycyB0byBzZWFyY2ggZm9yIGFueSBtb3ZpZSBhbmQgY2FuIGNsaWNrIG9uIGFueSBtb3ZpZSBsaXN0ZWQgdG8gdmlldyB0aGUgbW92aWUgY2FyZCBmb3IgYWRkaXRpb25hbCBpbmZvIG9uIHRoZSBtb3ZpZVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy96ZXRhMS5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnU3R5bGVkIENvbXBvbmVudHMnLCAndXNlU3RhdGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vZXJpY2NhcGl6L3pldGEtbW92aWVzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vemV0YS1tb3ZpZXMudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAzLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogJ0NvdmlkIFRyYWNrZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHVzZXMgdGhlIGRpc2Vhc2Uuc2ggYXBpLiBUaGlzIGdpdmVzIGRhdGEgdGhhdCBzaG93cyB1c2VycyB0aGUgZGlmZmVyZW50IG51bWJlcnMgd29ybGR3aWRlIGFuZCBieSBjb3VudHJ5LiBUaGUgbnVtYmVycyB1cGRhdGUgYXMgdGhlIGFwaSB1cGRhdGVzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jb3ZpZC5QTkcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhcnQuanMnLCAnTGVhZmxldCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcmljY2FwaXovY292aWQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9jb3ZpZC12ZXJ0LXpldGEudmVyY2VsLmFwcC8nLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOYW5kb3MgQ2FrZXMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkkgZGV2ZWxvcGVkIHRoaXMgc2l0ZSBmb3IgYSBDaGljYWdvIHN0YXJ0LXVwIGJha2VyeSBidXNpbmVzcy4gVGhleSBoYXZlIGEgRkIgY2hhbm5lbCB3aXRoIG92ZXIgMzUwIGZvbGxvd2VycyBhbmQgSSBvZmZlcmVkIG15IHNlcnZpY2VzIHRvIGhlbHAgbWFya2V0IHRoZSBidXNpbmVzcyBieSBjcmVhdGluZyB0aGVpciBzaXRlLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jYWtlLlBORycsXG4gICAgdGFnczogWydSZWFjdCcsICdFbWFpbC5qcycsICdGcmFtZXItTW90aW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2VyaWNjYXBpei9uYW5kb3MtY2FrZXMyJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbmFuZG9zLWNha2VzMi52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTQsIHRleHQ6ICdHcmFkdWF0ZWQgZnJvbSBEZXZyeSBVbml2ZXJzaXR5IHdpdGggYSBiYWNoZWxvcnMgZGVncmVlIGluIG11bHRpbWVkaWEgZGVzaWduICYgZGV2ZWxvcG1lbnQnLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdEZWNpZGVkIHRvIGdldCBiYWNrIGludG8gdGhlIHdlYiBkZXYgZmllbGQgYW5kIHN0YXJ0IHRoZSBzZWxmLXRhdWdodCBwYXRoJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3RhcnRlZCBMYW1iZGEgU2Nob29sIGluIHRoZWlyIGZ1bGxzdGFjayBkZXZlbG9wbWVudCBwcm9ncmFtJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnQmVjYW1lIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ0Zyb250ZW5kIERldmxvcGVyIGZvciBOZXhUZWNoIFNvbHV0aW9uczsgT0NUIDIwMjEtUHJlc2VudCcsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=