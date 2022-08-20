import React from "react";
    
const NamedExportComponent = () => {
  return <div id="named-export-component" className="named-export-component"></div>;
}

const NamedExportComponentTwo = () => {
  return <div id="named-export-component-two" className="named-export-component"></div>;
}

export default { NamedExportComponent, NamedExportComponentTwo }