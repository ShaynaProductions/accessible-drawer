import { useState } from "@wordpress/element";
import SlideDrawer from "./SlideDrawer";
import classNames from "classnames";

export default function Drawer() {
	const [open, setOpen] = useState(true);
	const drawerClass = classNames({
		"wp-block-shayna-prod-accessible-drawer": true,
		"is-open": open,
		"is-closed": !open,
	});

	// const checkInnerBlocks = withSelect( select, ownProps) => {
	// 	const blocks= select('core/editor').getBlocksByClientId(ownProps.clientId);
	// };
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div className={drawerClass}>
			<button onClick={handleToggle}>Related Items</button>
			<SlideDrawer show={open} />
		</div>
	);
}
