import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import classNames from "classnames";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;
	const [show, setShow] = useState(true);
	const [preview, setPreview] = useState(false);
	const [collapseState, setCollapseState] = useState(true);

	const spDrawerClass = classNames({
		"is-preview": preview,
		"is-draft": !preview,
		"is-open": show,
		"is-closed": !show,
	});

	const drawerWrapperClasses = classNames({
		"sp-accessible-drawer-wrapper": true,
		"is-collapse": collapseState,
	});

	const slidingDrawerClasses = classNames({
		"side-drawer": true,
	});

	const blockProps = useBlockProps({ className: spDrawerClass });
	const handleCollapse = () => {
		setCollapseState(!collapseState);
	};
	const handlePreview = () => {
		setPreview(!preview);
	};
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
			<div className={drawerWrapperClasses}>
				{collapseState ? (
					<h2 className="collapsed-state">Accessible Drawer - (collapsed)</h2>
				) : (
					<>
						<button
							id="toggle-drawer"
							onClick={preview ? handleToggle : undefined}
							aria-expanded={false}
						>
							<span>Related Items View</span>
						</button>

						<div
							id="sliding-drawer"
							className={slidingDrawerClasses}
							role="dialog"
						>
							<div className="sp-header-wrap">
								<RichText
									onChange={handleChangeText}
									placeholder="Enter Title"
									value={title}
									tagName="h1"
								/>
								<button
									className="sp-close"
									onClick={handleToggle}
									aria-label="Close Dialog"
								>
									X
								</button>
							</div>

							<InnerBlocks />
						</div>
					</>
				)}
			</div>
			<button onClick={handlePreview}>Preview</button>
			{!preview && (
				<button onClick={handleCollapse}>
					{collapseState ? "Expand" : "Collapse"}
				</button>
			)}
		</div>
	);
}
