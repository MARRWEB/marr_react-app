import React, { useState } from 'react';

const PhotoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
