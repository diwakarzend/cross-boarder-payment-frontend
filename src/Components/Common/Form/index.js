import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isEmpty } from "../../../utils/common";
// import { uploadFileRequest } from "../../../utils/api";
import ErrorMessage from "../../ErrorMessage";
import Loader from "../Loader";
import { MaterialInputWrapper, CheckFieldWrapper, Text } from "../../styledConstants";
import SuccessMessage from "../../SuccessMessage";

export default function MaterialInput({
  wrapperClassName = "",
  icon = null,
  error = "",
  placeholder = "",
  className = "",
  ...elemConfig
}) {
  const [isFocus, setFocus] = useState(false);
  const [isCalenarOpen, setCalendarOpen] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [uploadResponse, setUploadResponse] = useState({ status: false, msg: "" });

  const handleFileUpload = async (event, name) => {
    const file = event.target.files[0];
    const maxFileSize = 5000000;
    if (file && file.size > maxFileSize) {
      let fileSize = file.size / 1000000;
      // setFormErrors({ ...formErrors, userattachment: `File size is too large, Max size should be ${fileSize} MB` });
    } else {
       if(name === 'userattachment' || name === 'thumbnailPath' || name === 'notificationImage')
       {
        elemConfig.onChange(URL.createObjectURL(file), name, file);
       }else
       {
          let params = new FormData();
          params.append("file", file);
          setFileUploading(true);
        //   let response = await uploadFileRequest(params, elemConfig?.uploadUrl);
          console.log("response = ", response);
          if (!isEmpty(response) && !isEmpty(response?.data)) {
            setUploadResponse({
              status: response?.data?.code === "0000",
              msg: response?.data?.code === "0000" ? response?.data?.message : response?.data?.msg,
            });
            setFileUploading(false);
            elemConfig.onChange(response?.data?.data, name, file);
          }
      }

    }


  };

  const handleRemoveFile = (name) => {
    elemConfig.onChange("", name);
  };

  const errorMsg = error.replace(elemConfig.name, placeholder);

  switch (elemConfig.type) {
    case "select":
      return (
        <MaterialInputWrapper className={`${wrapperClassName} ${!icon ? "without-icon" : ""} filterinputbox`}>
          <div className="form-item">
            <Select
              {...elemConfig}
              placeholder={placeholder}
              className={`${className} ${!isEmpty(elemConfig.value) ? "has-value" : ""} ${
                isFocus ? " focused" : ""
              } item-select`}
              classNamePrefix="select"
              onFocus={() => {
                !!elemConfig.onFocus && elemConfig.onFocus();
                setFocus(true);
              }}
              onBlur={() => {
                !!elemConfig.onBlur && elemConfig.onBlur();
                setFocus(false);
              }}
            />
            <label className="item-label-wrapper">
              {icon && <span className="item-icon">{icon}</span>}
              {/* {placeholder && <span className="item-label">{placeholder}</span>} */}
            </label>
          </div>
          {error && <ErrorMessage error={errorMsg} datetimestamp={+new Date()} />}
        </MaterialInputWrapper>
      );
    case "date":
      return (
        <MaterialInputWrapper className={`${wrapperClassName} ${!icon ? "without-icon" : ""} filterinputbox`}>
          <div
            className={`${isCalenarOpen ? "focused" : ""} ${elemConfig?.value ? "has-value" : ""} form-item form-date`}
          >
            <DatePicker
              {...elemConfig}
              selected={elemConfig?.value || null}
              className={`${className} item-text`}
              onCalendarClose={() => {
                setCalendarOpen(false);
              }}
              onCalendarOpen={() => {
                setCalendarOpen(true);
              }}
              placeholderText={placeholder}
            />
            <label className="item-label-wrapper">
              {icon && <span className="item-icon">{icon}</span>}
              {/* {placeholder && <span className="item-label">{placeholder}</span>} */}
            </label>
          </div>
          {error && <ErrorMessage error={errorMsg} datetimestamp={+new Date()} />}
        </MaterialInputWrapper>
      );
    case "textarea":
      return (
        <MaterialInputWrapper className={`${wrapperClassName} ${!icon ? "without-icon" : ""}`}>
          <div className="form-item">
            <textarea {...elemConfig} className={`${className} item-textarea`} placeholder={placeholder} />
            <label className="item-label-wrapper">
              {icon && <span className="item-icon">{icon}</span>}
              {/* {placeholder && <span className="item-label">{placeholder}</span>} */}
            </label>
          </div>
          {error && <ErrorMessage error={errorMsg} datetimestamp={+new Date()} />}
        </MaterialInputWrapper>
      );
    case "checkbox":
      return (
        <CheckFieldWrapper className={`${wrapperClassName} flex flex-center space-between checkboxinputbox`}>
          <label className="form-item">
            <input {...elemConfig} className={`${className} item-check`} />
            <span className="checkmark"></span>
            <Text size="rg" color="color3">
              {placeholder}
            </Text>
          </label>
        </CheckFieldWrapper>
      );

    case "radio":
      return (
        <CheckFieldWrapper className={`${wrapperClassName} flex flex-center space-between`}>
          <label className="form-item">
            <input {...elemConfig} />
            <Text size="rg" color="color3">
              {placeholder}
            </Text>
          </label>
        </CheckFieldWrapper>
      );
    case "file":
      return (
        <MaterialInputWrapper className={`${wrapperClassName} ${!icon ? "without-icon" : ""}`}>
          <div className="form-item">
            <input
              accept={elemConfig?.accept}
              type={elemConfig.type}
              onChange={(e) => handleFileUpload(e, elemConfig.name)}
              className="item-file"
              title={elemConfig.value}
              value=""
            />
            <input
              name={elemConfig.name}
              value={elemConfig.value}
              type="text"
              className={`${className} ${elemConfig.value ? "has-file" : ""} item-text`}
            />
            <label className="item-label-wrapper">
              {icon && <span className="item-icon">{icon}</span>}
              {placeholder && <span className="item-label">{placeholder}</span>}
            </label>
            {elemConfig.value && (
              <Text
                className="remove-file"
                size="xxsm"
                fw="medium"
                color="color11"
                onClick={() => handleRemoveFile(elemConfig.name)}
              >
                Remove
              </Text>
            )}
            {fileUploading && <Loader className="file-loader" />}
          </div>
          {uploadResponse?.msg && uploadResponse?.status && <SuccessMessage successMessage={uploadResponse?.msg} />}
          {uploadResponse?.msg && !uploadResponse?.status && <ErrorMessage error={uploadResponse?.msg} />}
          {error && <ErrorMessage error={error} />}
        </MaterialInputWrapper>
      );
    default:
      return (
        <MaterialInputWrapper className={`${wrapperClassName} ${!icon ? "without-icon" : ""} filterinputbox`}>
          <div className="form-item">
            <input {...elemConfig} className={`${className} ${elemConfig?.value ? "has-value" : ""} item-text`} autoComplete="off" />
            <label className="item-label-wrapper">
              {icon && <span className="item-icon">{icon}</span>}
              {placeholder && <span className="item-label">{placeholder}</span>}
            </label>
          </div>
          {error && <ErrorMessage error={errorMsg} datetimestamp={+new Date()} />}
        </MaterialInputWrapper>
      );
  }
}
