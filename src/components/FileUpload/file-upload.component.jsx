import React, { useRef, useState } from "react";
import './c1.css'
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
} from "./file-upload.styles";

const KILO_BYTES_PER_BYTE = 1000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (!otherProps.multiple) {
        return { file };
      }
      files[file.name] = file;
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <div className="file">
      <FilePreviewContainer>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            return (
              <PreviewContainer key={fileName}>
                <div>
                  <FileMetaData >
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon
                        className="fas fa-trash-alt"
                        onClick={() => removeFile(fileName)}
                      />
                    </aside>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
      <FileUploadContainer>
        <DragDropText>Drop your files here</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick} className='but'>
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      
  </div>
);
};

export default FileUpload;