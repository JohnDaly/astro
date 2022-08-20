import pluginTester from 'babel-plugin-tester';
import tagExportsWithRendererPlugin from '../tag';

describe.only('WAT', () => {
	pluginTester({
		plugin: tagExportsWithRendererPlugin,
		snapshot: true,
		tests: [
			`
        import React from 'react';
    
        export const NamedExportComponent = () => {
          return <div id="named-export-component" className='named-export-component'></div>;
        }
        
        const NamedExportComponentTwo = () => {
          return <div id="named-export-component-two" className='named-export-component'></div>;
        }
        
        export { NamedExportComponentTwo }
        `,
		],
	});
});
