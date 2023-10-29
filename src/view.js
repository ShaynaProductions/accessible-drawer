jQuery(document).ready(function ($) {
	const pluginWrapper = $(".wp-block-shayna-prod-accessible-drawer");
	const drawerWrapper = $("#drawer");
	const drawer = $("#sliding-drawer");
	const drawerTitleWrapper = $(".sp-header-wrap");
	const toggleButton = $("#toggle-drawer");
	const closeButton = $(".sp-close");
	const buttonText = toggleButton.find("span");

	// set initial
	pluginWrapper.addClass("is-open");
	drawer.addClass("is-open");
	toggleButton.attr("aria-expanded", true);
	toggleButton.find("span").addClass("srOnly");

	const showDrawer = () => {
		drawer.removeClass("is-closed");
		drawer.addClass("is-open");
		pluginWrapper.removeClass("is-closed");
		pluginWrapper.addClass("is-open");
		toggleButton.attr("aria-expanded", true);
		toggleButton.find("span").addClass("srOnly");
	};
	const hideDrawer = () => {
		drawer.removeClass("is-open");
		drawer.addClass("is-closed");
		pluginWrapper.removeClass("is-open");
		pluginWrapper.addClass("is-closed");
		toggleButton.attr("aria-expanded", false);
		toggleButton.find("span").addClass("srOnly");
	};

	// Toggle Button should remove the srOnly class on focus or on hover.

	const showButtonText = () => {
		if (buttonText.hasClass("srOnly") && pluginWrapper.hasClass("is-closed")) {
			buttonText.removeClass("srOnly");
		}
	};
	const hideButtonText = () => {
		if (!buttonText.hasClass("srOnly")) {
			buttonText.addClass("srOnly");
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

	// internal Close Button
	closeButton.on("click", function () {
		hideDrawer();
	});
	console.log("Button Span: ", buttonText);
	console.log("close button: ", closeButton);
	console.log("wrapper: ", drawerWrapper);
	console.log("drawer: ", drawer);
	console.log("drawerTitleWrapper: ", drawerTitleWrapper);
	console.log("toggleButton: ", toggleButton);
});
