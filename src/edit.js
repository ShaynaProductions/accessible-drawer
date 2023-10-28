import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import classNames from "classnames";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;
	const [show, setShow] = useState(false);

	const drawerClass = classNames({
		"is-open": show,
		"is-closed": !show,
	});
	const sideDrawerClass = classNames({
		"side-drawer": true,
		"is-open": show,
		"is-closed": !show,
	});
	const blockProps = useBlockProps({ className: drawerClass });

	const handleToggle = () => {
		setShow(!show);
	};
	const handleChangeText = (newText) => {
		setAttributes({
			title: newText,
		});
	};

	return (
		<div {...blockProps}>
			<div className="sp-accessible-drawer-wrapper">
				<button id="toggle-drawer" onClick={handleToggle} aria-expanded={false}>
					<span>Related Items View</span>
				</button>
				<div id="sliding-drawer" className={sideDrawerClass} role="dialog">
					<div className="sp-header-wrap">
						<RichText
							onChange={handleChangeText}
							placeholder="Enter Title"
							value={title}
							tagName="h1"
						/>
						<button
							classname="sp-close"
							onClick={handleToggle}
							aria-label="Close Dialog"
						>
							X
						</button>
					</div>
					<InnerBlocks />
				</div>
			</div>
		</div>
	);
}
