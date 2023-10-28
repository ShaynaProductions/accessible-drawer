import { forwardRef } from "@wordpress/element";
import classNames from "classnames";

const SlideDrawer = forwardRef(function SlideDrawer({ show }, ref) {
	const sideDrawerClass = classNames({
		"side-drawer": true,
		"is-open": show,
		"is-closed": !show,
	});
	console.log(ref);
	return (
		<>
			<div className={sideDrawerClass} role="dialog">
				I am the Slide Drawer Function - Current State of the Toggle {show}
			</div>
		</>
	);
});
export default SlideDrawer;
