import { __astro_tag_component__ } from 'astro/server/index.js';
import React from 'react';
export const NamedExportComponent = () => {
	return <div id="named-export-component" className="named-export-component"></div>;
};

const NamedExportComponentTwo = () => {
	return <div id="named-export-component-two" className="named-export-component"></div>;
};

export { NamedExportComponentTwo };

__astro_tag_component__(NamedExportComponent, 'react');

__astro_tag_component__(NamedExportComponentTwo, 'react');