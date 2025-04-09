import React, { useEffect, useRef } from "react";
import "./PdfContainer.css";

export default function PdfContainer() {
  const pdfFiles = ["file1.pdf", "file2.pdf", "file3.pdf", "file4.pdf", "file5.pdf", "file6.pdf", "file7.pdf"];
  const scrollRef = useRef(null);

  // Auto-scrolling effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 1; // Adjust speed if needed
      }
    }, 50); // Adjust interval for speed control

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  // Function to open PDF
  const handleViewPdf = (fileName) => {
    const fileUrl = `/Assets/Pdfs/hms.pdf`; 
    window.open(fileUrl, "_blank"); 
  };

  return (
    <div className="w-[20vw] h-[54vh]">
      <div ref={scrollRef} className="w-full h-[90%] flex flex-col gap-y-4 overflow-y-auto bg-white pdfBox">
        {pdfFiles.map((file, index) => (
          <div key={index} className="flex gap-[10px] items-center mt-[1rem] ml-[1.5rem]">
            <img
              className="w-[3rem] h-[3rem] object-contain"
              src="./Assets/Images/pdf_Image.png"
              alt="PDF Icon"
            />
            <p className="cursor-pointer text-blue-500 hover:underline" onClick={() => handleViewPdf(file)}>
              {file}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-[23px] text-center font-semibold mt-[0.5rem]">Resources</h2>
    </div>
  );
}
