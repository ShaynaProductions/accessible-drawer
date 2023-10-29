import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { buttonText, title } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div id="drawer" className="sp-accessible-drawer-wrapper">
				<button id="toggle-drawer" aria-controls="sliding-drawer">
					<RichText.Content value={buttonText} tagName="span" />
				</button>
				<div
					id="sliding-drawer"
					className="side-drawer"
					role="dialog"
					aria-labelledby="drawer-title"
				>
					<div className="sp-header-wrap">
						{title ? (
							<RichText.Content value={title} id="drawer-title" tagName="h1" />
						) : (
							<h1 id="drawer-title">Heading</h1>
						)}

						<button className="sp-close" aria-label="Close Dialog">
							X
						</button>
					</div>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
