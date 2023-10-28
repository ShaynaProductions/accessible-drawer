import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title } = attributes;
	const blockProps = useBlockProps.save({ className: "is-closed" });

	return (
		<div {...blockProps}>
			<div id="drawer" class="sp-accessible-drawer-wrapper">
				<button id="toggle-drawer">
					<span>Related Items View</span>
				</button>
				<div id="sliding-drawer" className="side-drawer" role="dialog">
					<div className="sp-header-wrap">
						<RichText.Content value={title} tagName="h1" />

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
