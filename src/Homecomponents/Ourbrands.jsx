import React, { useEffect } from "react";

const AdobePDFViewer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
    script.async = true;
    script.onload = () => {
      if (window.AdobeDC) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: "d7ab10be4d444350993041a58f2cc78c", // Replace with your Adobe API Key
          divId: "adobe-dc-view",
        });

        adobeDCView.previewFile(
          {
            content: {
              location: {
                // load from public folder
                url: `${window.location.origin}/public/catalog.pdf`,
              },
            },
            metaData: { fileName: "catalog.pdf" },
          },
          {
            embedMode: "FULL_WINDOW", // FULL_WINDOW | SIZED_CONTAINER | IN_LINE | LIGHT_BOX
            defaultViewMode: "FIT_PAGE",
            showDownloadPDF: true,
            showPrintPDF: true,
          }
        );
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Catalog</h2>
      <div id="adobe-dc-view" style={{ width: "100%", height: "800px" }}></div>
    </div>
  );
};

export default AdobePDFViewer;
