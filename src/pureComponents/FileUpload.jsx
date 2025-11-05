import { useRef, useState } from 'react';

const FileUpload = ({
  id,
  name,
  isRequired = false,
  accept = '.pdf,.doc,.docx',
  maxSizeMB = 2,
  onChange,
  labelText,
}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');

  const fixedInputClass =
    'w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out';

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError('');

    if (!file) {
      setFileName('');
      if (onChange) onChange(e);
      return;
    }

    // Validate file type
    const allowedExtensions = accept.split(',').map(ext => ext.trim().toLowerCase());
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setFileError(`Please upload only ${accept} files`);
      setFileName('');
      e.target.value = '';
      if (onChange) onChange(e);
      return;
    }

    // Validate file size (2MB = 2 * 1024 * 1024 bytes)
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setFileError(`File size must be less than ${maxSizeMB}MB`);
      setFileName('');
      e.target.value = '';
      if (onChange) onChange(e);
      return;
    }

    setFileName(file.name);
    if (onChange) onChange(e);
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setFileName('');
    setFileError('');
    if (onChange) {
      const syntheticEvent = {
        target: {
          files: [],
          value: '',
          name: name || id,
        },
      };
      onChange(syntheticEvent);
    }
  };

  return (
    <div className="mb-5">
      <label htmlFor={id} className="form-group block">
        <span className="block mb-2 flex text-slate-200">
          {labelText || 'Upload File'}
          {isRequired && <span className="ml-1 text-cyan-400">*</span>}
        </span>
      </label>

      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          id={id}
          name={name || id}
          accept={accept}
          onChange={handleFileChange}
          required={isRequired}
          className="hidden"
        />

        <div className="flex items-center gap-3">
          <label
            htmlFor={id}
            className={`${fixedInputClass} cursor-pointer flex items-center justify-center text-center hover:bg-gray-50 transition-colors`}
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="text-gray-600">
                {fileName ? 'Change File' : 'Choose File'}
              </span>
            </span>
          </label>

          {fileName && (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-sm text-gray-600 truncate" title={fileName}>
                {fileName}
              </span>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
                aria-label="Remove file"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {!fileName && (
          <p className="text-xs text-gray-500 mt-1">
            Accepted formats: {accept.replace(/\./g, '').toUpperCase()}. Max size: {maxSizeMB}MB
          </p>
        )}

        {fileError && (
          <p className="text-xs text-red-500 mt-1">{fileError}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
