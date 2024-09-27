const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType('hm-plugin/copyright-block', {
    title: 'Copyright Block',
    icon: 'admin-site-alt3',
    category: 'common',
    attributes: {
        companyName: {
            type: 'string',
            source: 'html',
            selector: 'span',
        },
        startYear: {
            type: 'string',
            default: new Date().getFullYear().toString(),
        },
    },
    edit: (props) => {
        const { attributes: { companyName, startYear }, setAttributes } = props;
        const currentYear = new Date().getFullYear();

        return (
            <p>
                &copy; {startYear}–{currentYear}
                <RichText
                    tagName="span"
                    value={companyName}
                    onChange={(newCompany) => setAttributes({ companyName: newCompany })}
                    placeholder="Enter company name..."
                />
            </p>
        );
    },
    save: (props) => {
        const { attributes: { companyName, startYear } } = props;
        const currentYear = new Date().getFullYear();

        return (
            <p>&copy; {startYear}–{currentYear} <span>{companyName}</span></p>
        );
    },
});
