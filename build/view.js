/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
jQuery(document).ready(function ($) {
  const pluginWrapper = $(".wp-block-shayna-prod-accessible-drawer");
  const drawerWrapper = $("#drawer");
  const drawer = $("#sliding-drawer");
  const drawerTitleWrapper = $(".sp-header-wrap");
  const toggleButton = $("#toggle-drawer");

  // set initial
  pluginWrapper.addClass("is-closed");
  drawer.addClass("is-closed");
  toggleButton.attr("aria-expanded", false);
  const showDrawer = () => {
    drawer.removeClass("is-closed");
    drawer.addClass("is-open");
    pluginWrapper.removeClass("is-closed");
    pluginWrapper.addClass("is-open");
    toggleButton.attr("aria-expanded", true);
  };
  const hideDrawer = () => {
    drawer.removeClass("is-open");
    drawer.addClass("is-closed");
    pluginWrapper.removeClass("is-open");
    pluginWrapper.addClass("is-closed");
    toggleButton.attr("aria-expanded", false);
  };

  // Sliding Drawer is always initialized to off in Front End.
  toggleButton.on("click", function () {
    if (drawer.hasClass("is-closed")) {
      showDrawer();
    } else {
      hideDrawer();
    }
    $(".sp-close").on("click", function () {
      showDrawer();
    });
  });
  console.log("wrapper: ", drawerWrapper);
  console.log("drawer: ", drawer);
  console.log("drawerTitleWrapper: ", drawerTitleWrapper);
  console.log("toggleButton: ", toggleButton);
});
/******/ })()
;
//# sourceMappingURL=view.js.map