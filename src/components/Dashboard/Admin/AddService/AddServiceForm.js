import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddServiceForm = () => {
    const [addService, setAddService] = useState({});
    const [designFile, setDesignFile] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInputs = e => {
        const newServiceInfo = { ...addService };
        newServiceInfo[e.target.name] = e.target.value;
        setAddService(newServiceInfo);
    }

    const handleIconSubmit = (e) => {
        const newIconFile = e.target.files[0];
        setDesignFile(newIconFile);
    }

    const handleAddService = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(addService);
        formData.append('designFile', designFile);
        formData.append('name', addService.name);
        formData.append('description', addService.description);

        fetch('https://sheltered-savannah-44283.herokuapp.com/addNewService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
        formData.append('name', '');
        formData.append('description', '');
        setIsSubmit(true);
    };

    return (
        <form onSubmit={handleAddService} className="px-4 mx-4">
            <div className="form-row bg-white p-4 mb-4 rounded-lg">
                <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="title">Service Title *</label>
                    <input type="text" id="title" className="form-control" placeholder="Enter title" name="name" onChange={handleInputs} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description *</label>
                    <textarea id="description" className="form-control" rows="3" placeholder="Enter Description" name="description" onChange={handleInputs} required ></textarea>
                </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group input-file">
                    <label htmlFor="icon" role="button">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-cloud-upload" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                        <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> &nbsp;
                    Upload Image *
                    </label>
                        <input type="file" id="icon" className="form-control" placeholder="Upload Project file" onChange={handleIconSubmit} required />
                        
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-success ml-auto px-5">Send</button> <button className="btn btn-dark px-5 ml-2" type="reset">Reset</button>
            {
                isSubmit &&
                <>
                <p className="mt-3"> <span className="text-success">Service Added Successfully!!</span> You Can Visit the <Link className="text-primary" to="/">Home Page</Link> for Review the Service!!</p>
                </>
            }
        </form>
    );
};

export default AddServiceForm;