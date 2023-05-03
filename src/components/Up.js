import { useState, useRef } from "react";
import { FileUpload } from "./FileUpload";
import helpbg from '../images/helpbg.jpg'
// Filepond Plugin imports
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFilePreview from "filepond-plugin-pdf-preview";

// FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Navbar from "./Navbar";

// Register the plugins for usage
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode,
  FilePondPluginFilePreview
);

function Up() {
  const [pdfFile, setpdfFile] = useState([]);

  const filePondPdfRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const containerName = "container1";

    const fileString = await FileUpload(pdfFile, containerName);
    console.log("url string:", fileString);
  };

  return (
    <div className=" bg-no-repeat bg-center bg-cover" 
    style=
    {{
      backgroundImage: `url(${helpbg})`,
      height:'790px'
    }}>
      <Navbar />
      <div className="mt-24 rounded py-10 ml-20 mr-20 bg-black bg-opacity-80 text-white">
        <main
          style={{
            width: "50%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "34px",
            }}
          >
            Want to Return your product?
          </h1>
            <h2 className="text-center mt-2 mb-2" >Upload the bill here!</h2>
          <form method="post" onSubmit={handleSubmit}>
            <FilePond
              fileSizeBase={1000}
              checkValidity={true}
              allowFileTypeValidation={true}
              allowFileSizeValidation={true}
              allowFileEncode={true}
              chunkUploads={true}
              acceptedFileTypes={["application/pdf"]}
              files={pdfFile}
              onupdatefiles={setpdfFile}
              allowMultiple={false}
              maxFiles={1}
              name="files"
              ref={filePondPdfRef}
              onaddfile={(error, fileItem) => {
                if (error) {
                  console.log(error);
                }

                if (fileItem.file.size > 1000000) {
                  console.error("File size is too large");
                }
              }}
              oninit={() => console.log("FilePond instance has initialised")}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            
            <button
              type="submit"
              className="ml-48 mb-10 text-white bg-black hover:bg-white hover:text-black font-bold py-2 px-4 border-double border-4 border-white rounded hover:transition-bg duration-700"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
      </div >
      );
}

export default Up;
