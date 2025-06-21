import React, { useState } from 'react';

const AdminPanel = ({ onUpload }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");
    if (title.length > 100 || desc.length > 255) return alert("Exceeded character limits");

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPoster = {
        title,
        desc,
        image: reader.result, // base64 string
      };
      onUpload(newPoster);
      setTitle('');
      setDesc('');
      setImage(null);
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="container mt-4">
      <h3>Upload Poster</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title (max 100 chars)</label>
          <input
            className="form-control"
            maxLength={100}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Description (max 255 chars)</label>
          <textarea
            className="form-control"
            maxLength={255}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Image File</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        
          {image && (
          <div className="mb-3">
            <label>Preview:</label>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="img-fluid rounded"
              style={{ maxHeight: "200px" }}
            />
          </div>
          )}

        <button className="btn btn-success">Upload</button>
      </form>
    </div>
  );
};

export default AdminPanel;
