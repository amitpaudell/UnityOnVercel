import React, { useEffect, useState } from 'react';

function ServiceD() {
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('http://localhost:4000/api/construct');
      const json = await response.json();

      if (response.ok) {
        setServices(json);
      }
    };
    fetchServices();
  }, []);

  //Handling a image file input
  const [imageloading, setImageLoading] = useState(false);
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Create preview URL immediately
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);

    setImageLoading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'construction');
    data.append('cloud_name', 'dpb8lbskr');

    const res = await fetch(
      ' https://api.cloudinary.com/v1_1/dpb8lbskr/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const uploadedImageURL = await res.json();
    setImage(uploadedImageURL.url);
    setImageLoading(false);
  };

  // Function to remove image preview
  const removeImagePreview = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview('');
    setImage('');
    // Reset the file input
    const fileInput = document.querySelector('input[type="file"]');

    if (fileInput) {
      fileInput.value = '';
    }
  };

  //Handling a form
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const services = { image, title, description, status };

    if (isEditMode && editingProjectId) {
      const response = await fetch(
        `http://localhost:4000/api/construct/${editingProjectId}`,
        {
          method: 'PUT',
          body: JSON.stringify(services),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      } else {
        setImage('');
        setImagePreview('');
        setTitle('');
        setDescription('');
        setStatus('');
        setShowForm(false);
        setIsEditMode(false);
        setEditingProjectId(null);
        setError(null);
        setServices((prev) => {
          return prev.map((service) => {
            if (service._id === editingProjectId) {
              return { ...service, ...services };
            } else {
              return service;
            }
          });
        });
      }
    } else {
      const response = await fetch('http://localhost:4000/api/construct', {
        method: 'POST',
        body: JSON.stringify(services),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setImage('');
        setImagePreview('');
        setTitle('');
        setDescription('');
        setStatus('');
        setError(null);
        setShowForm(false);
        console.log('new workout added');
        setServices((prev) => {
          if (prev) {
            return [json, ...prev];
          } else {
            return [json];
          }
        });
      }
    }
  };

  const handleEdit = (id) => {
    const projectToEdit = services.find((project) => project._id === id);
    if (projectToEdit) {
      setImage(projectToEdit.image);
      setImagePreview(projectToEdit.image); // Set preview to existing image
      setTitle(projectToEdit.title);
      setDescription(projectToEdit.description);
      setStatus(projectToEdit.status);
      setShowForm(true);
      setIsEditMode(true);
      setEditingProjectId(id);
      setError(null);
    }
  };

  const handleDelete = async (id) => {
    const respose = await fetch(`http://localhost:4000/api/construct/${id}`, {
      method: 'DELETE',
    });

    const json = await respose.json();
    if (respose.ok) {
      console.log('Construction Deleted');
      setServices((prev) => {
        return prev.filter((service) => service._id !== id);
      });
    }
  };

  return (
    <div className="p-12 min-h-[calc(100vh-4rem)]   min-w-[calc(100vw-12rem)]">
      {/* upper part */}
      <div className="flex flex-col items-center md:flex-row justify-around space-y-5 ">
        <div>
          <h1 className="text-3xl font-bold md:text-left text-center">
            Services
          </h1>
        </div>

        <div>
          <button
            className="bg-[#155dfc] px-4 py-2 rounded-md text-white"
            onClick={() => setShowForm(!showForm)}
          >
            Create
          </button>
        </div>
      </div>

      {/* Lower part */}
      {error && <div>{error}</div>}
      <div>
        {/* Form Part */}
        {showForm && (
          <div className="p-6 flex flex-col bg-[#f2f4f7] rounded-2xl">
            <div>
              <h3 className="font-medium text-xl">Create a new project</h3>
            </div>
            <form action="" className="" encType="multipart/form-data">
              <label htmlFor="">Upload an Image</label>
              <br />
              {imageloading ? 'Uploading' : ' '}
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileUpload}
                className="block mb-5 w-full text-sm text-gray-500
         file:mr-4 file:py-2 file:px-4
         file:rounded-full file:border-0
         file:text-sm file:font-semibold
         file:bg-blue-50 file:text-blue-700
         hover:file:bg-blue-100"
              />
              {/* Image Preview */}
              {imagePreview && (
                <div className="relative inline-block mb-5">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={removeImagePreview}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-red-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
              )}
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                placeholder="Enter Service name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{' '}
              <br />
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
              ></textarea>
              <br />
              <label htmlFor="status" className="">
                Status
              </label>
              <select
                name="status"
                id=""
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
              >
                <option value="">-- Select Status --</option>
                <option value="Active">Active</option>
                <option value="Block">Block</option>
              </select>
              <div className="mt-6 space-x-4">
                <button
                  className="bg-green-500 rounded-md text-center px-4 py-2 text-white font-sans"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 rounded-md text-center px-4 py-2 text-white font-sans"
                  onClick={() => {
                    setImage('');
                    setImagePreview('');
                    setTitle('');
                    setDescription('');
                    setStatus('');
                    setError(null);
                    setShowForm(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* Grid Section */}
            {/* <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="">Location </label>
                <input
                  type="text"
                  name="location"
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                  placeholder="Location"
                />
              </div>
              <div>
                <label htmlFor="construct">Construction Type</label>
                <select
                  name="construct"
                  id=""
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                >
                  <option value="">--Construction Type--</option>
                  <option value="Residental Construction">
                    Residental Construction
                  </option>
                  <option value="Commercial Construction">
                    Commercial Construction
                  </option>
                  <option value="Industrial Construction">
                    Industrial Construction
                  </option>
                  <option value="Infrastructure Construction">
                    Infrastructure Construction
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="sector">Sector</label>
                <select
                  name="sector"
                  id=""
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                >
                  <option value="">--Sector--</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id=""
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                >
                  <option value="active">Active</option>
                  <option value="block">Block</option>
                </select>
              </div>
            </div> */}
          </div>
        )}

        {/* Display information  */}

        <div className="mt-8 ">
          <table className="min-w-[calc(100vw-20rem)] rounded-md  table-auto md:table-fixed ">
            <thead className="text-left bg-slate-100 ">
              <tr>
                <th className="p-4 text-xl  rounded-md">ID</th>
                <th className="p-4 text-xl  rounded-md">Name</th>
                <th className="p-4 text-xl  rounded-md">Status</th>
                <th className="p-4 text-xl  rounded-md" colSpan="2">
                  Action
                </th>
              </tr>
            </thead>
            {services &&
              services.map((service) => (
                <tbody key={service._id}>
                  <tr>
                    <td className="p-4 font-medium text-lg border border-slate-300">
                      {service._id}
                    </td>
                    <td className="p-4 font-medium text-lg border border-slate-300">
                      {service.title}
                    </td>
                    <td className="p-4 font-medium text-lg border border-slate-300">
                      {service.status}
                    </td>
                    <td className="p-4 font-medium text-lg border border-slate-300">
                      <button
                        className="bg-green-500 rounded-md text-center px-4 py-2 text-white font-sans"
                        onClick={() => handleEdit(service._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className=" p-4 font-medium text-lg border border-slate-300">
                      <button
                        className="bg-red-500 rounded-md text-center px-4 py-2 text-white font-sans"
                        onClick={() => handleDelete(service._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServiceD;
