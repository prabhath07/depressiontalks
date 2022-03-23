import React, { useState } from "react";
import FileUpload from "./file-upload.component";
import './index.css'


function FileUploadApp() {
  const [newUserInfo, setNewUserInfo] = useState({
    filesUploaded: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, filesUploaded: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div class = 'dout'>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg,.pdf,.zip,.gz"
          label="Files"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
      </form>
    </div>
  );
}

export default FileUploadApp;