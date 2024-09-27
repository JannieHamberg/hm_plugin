const { registerBlockType } = wp.blocks;
const { RichText, URLInputButton } = wp.blockEditor;

registerBlockType('hm-plugin/cta-block', {
    title: 'Call to Action Block',
    icon: 'megaphone',
    category: 'common',
    attributes: {
        title: { type: 'string' },
        buttonText: { type: 'string' },
        buttonUrl: { type: 'string' },
    },
    edit: (props) => {
        const { attributes: { title, buttonText, buttonUrl }, setAttributes } = props;

        return (
            <div>
                <RichText
                    tagName="h2"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(newTitle) => setAttributes({ title: newTitle })}
                />
                <RichText
                    tagName="span"
                    placeholder="Button text..."
                    value={buttonText}
                    onChange={(newText) => setAttributes({ buttonText: newText })}
                />
                <URLInputButton
                    url={buttonUrl}
                    onChange={(newUrl) => setAttributes({ buttonUrl: newUrl })}
                />
            </div>
        );
    },
    save: (props) => {
        const { attributes: { title, buttonText, buttonUrl } } = props;
        return (
            <div>
                <h2>{title}</h2>
                <a href={buttonUrl} className="wp-block-button__link">{buttonText}</a>
            </div>
        );
    },
});
