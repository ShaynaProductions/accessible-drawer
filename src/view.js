jQuery(document).ready(function ($) {
	const closeButton = $(".sp-close");
	const pluginWrapper = $(".wp-block-shayna-prod-accessible-drawer");
	const drawer = $("#sliding-drawer");
	const drawerOverlay = $("#drawer-overlay");
	const toggleButton = $("#toggle-drawer");
	const toggleButtonText = toggleButton.find("span");
	const introContainer = $("main .intro-accordion");
	const afterContainer = $("main .after-accordion");

	// set initial
	drawer.attr("aria-hidden", true);
	pluginWrapper.addClass("is-closed");
	drawer.addClass("is-closed");
	toggleButton.attr("aria-expanded", true);
	drawer.removeAttr("style");
	introContainer.addClass("drawer-closed");
	afterContainer.addClass("drawer-closed");

	const showDrawer = () => {
		introContainer.removeClass("drawer-closed");
		introContainer.addClass("drawer-open");
		afterContainer.removeClass("drawer-closed");
		afterContainer.addClass("drawer-open");
		drawer.attr("aria-hidden", false);
		drawer.removeClass("is-closed");
		drawer.addClass("is-open");
		pluginWrapper.removeClass("is-closed");
		pluginWrapper.addClass("is-open");
		toggleButton.attr("aria-expanded", true);
		toggleButton.find("span").addClass("srOnly");
		closeButton.focus(() => {
			closeButton.css("outline", " -webkit-focus-ring-color auto 1px");
		});
	};
	const hideDrawer = () => {
		drawer.attr("aria-hidden", true);
		drawer.removeClass("is-open");
		drawer.addClass("is-closed");
		pluginWrapper.removeClass("is-open");
		pluginWrapper.addClass("is-closed");
		introContainer.removeClass("drawer-open");
		introContainer.addClass("drawer-closed");
		afterContainer.removeClass("drawer-open");
		afterContainer.addClass("drawer-closed");
		toggleButton.attr("aria-expanded", false);
		toggleButton.find("span").addClass("srOnly");
		toggleButton.focus();
	};

	// Toggle Button should remove the srOnly class on focus or on hover.

	const showButtonText = () => {
		if (
			toggleButtonText.hasClass("srOnly") &&
			pluginWrapper.hasClass("is-closed")
		) {
			toggleButtonText.removeClass("srOnly");
		}
	};
	const hideButtonText = () => {
		if (!toggleButtonText.hasClass("srOnly")) {
			toggleButtonText.addClass("srOnly");
		}
	};

	toggleButton.on("focus", function () {
		showButtonText();
	});
	toggleButton.on("blur", function () {
		hideButtonText();
	});
	toggleButton.on("mouseenter", function () {
		showButtonText();
	});
	toggleButton.on("mouseleave", function () {
		hideButtonText();
	});

	// Sliding Drawer is always initialized to off in Front End.
	toggleButton.on("click", function () {
		if (drawer.hasClass("is-closed")) {
			showDrawer();
		} else {
			hideDrawer();
		}
	});

	//Overlay
	drawerOverlay.on("click", function () {
		hideDrawer();
	});

	// internal Close Button
	closeButton.on("click", function () {
		hideDrawer();
	});

	// Keyboard Events on Overlay and shown drawer.
	pluginWrapper.on("keydown", function (event) {
		if (event.keyCode === 27) {
			hideDrawer();
		}
	});
});
