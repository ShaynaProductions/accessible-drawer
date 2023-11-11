import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import classNames from "classnames";
import { useEffect, useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { buttonText, title } = attributes;
	const [show, setShow] = useState(true);
	const [preview, setPreview] = useState(false);
	const [collapseState, setCollapseState] = useState(true);
	const [showButtonText, setShowButtonText] = useState(true);

	const spDrawerClass = classNames({
		"is-preview": preview,
		"is-draft": !preview,
		"is-open": show,
		"is-closed": !show,
	});

	const drawerWrapperClasses = classNames({
		"sp-accessible-drawer-wrapper": true,
		"is-collapse": !preview ? collapseState : undefined,
	});

	const slidingDrawerClasses = classNames({
		"side-drawer": true,
		"is-open": show,
		"is-closed": !show,
	});

	const blockProps = useBlockProps({ className: spDrawerClass });

	useEffect(() => {
		if (preview) {
			// set to show preview, initially in a hidden view

			setShowButtonText(false);
		} else {
			// make sure no  button text showing.
			setShowButtonText(true);
			setCollapseState(false);
		}
	}, [preview, setCollapseState, setShow, setShowButtonText]);

	const handleCollapse = () => {
		setCollapseState(!collapseState);
	};
	const handlePreview = () => {
		if (!preview) {
		} else {
		}

		setPreview(!preview);
	};
	const handleToggle = () => {
		if (!show) {
			setShowButtonText(false);
		}
		setShow(!show);
	};
	const handleChangeText = (newText) => {
		setAttributes({
			title: newText,
		});
	};

	const handleChangeToggleButton = (newText) => {
		setAttributes({
			buttonText: newText,
		});
	};

	const hiddenButtonText = () => {
		setShowButtonText(false);
	};
	const visibleButtonText = () => {
		setShowButtonText(true);
	};

	return (
		<div {...blockProps}>
			<div className={drawerWrapperClasses}>
				{!preview && !collapseState ? (
					<h2 className="collapsed-state">Accessible Drawer - (collapsed)</h2>
				) : (
					<>
						<button
							id="toggle-drawer"
							onClick={preview ? handleToggle : undefined}
							onFocus={preview && !show ? visibleButtonText : undefined}
							onMouseEnter={preview && !show ? visibleButtonText : undefined}
							onBlur={preview && !show ? hiddenButtonText : undefined}
							onMouseLeave={preview && !show ? hiddenButtonText : undefined}
							aria-expanded={show}
						>
							<RichText
								aria-label=""
								onChange={handleChangeToggleButton}
								wrapperClassName={
									preview && !showButtonText ? "srOnly" : undefined
								}
								placeholder="Button"
								value={buttonText}
								tagName="span"
							/>
						</button>

						<div
							id="sliding-drawer"
							className={slidingDrawerClasses}
							role="dialog"
						>
							<div className="sp-header-wrap">
								<RichText
									id="drawer-title"
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
			<button onClick={handlePreview}>{preview ? "Draft" : "Preview"}</button>
			{!preview && (
				<button onClick={handleCollapse}>
					{collapseState ? "Collapse" : "Expand"}
				</button>
			)}
		</div>
	);
}
