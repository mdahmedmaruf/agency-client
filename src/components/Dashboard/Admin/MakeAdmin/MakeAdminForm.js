import React, { useState } from 'react';

const MakeAdminForm = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const [admins, setAdmins] = useState({email: ''});
    const {email} = admins;
    
    const handleInputs = e => {
        setAdmins({...admins, [e.target.name]: e.target.value});
    }
    
    const handleAddAdmin = (e) => {
        e.preventDefault();
        
        fetch('https://sheltered-savannah-44283.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admins)
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                //console.log(result)
            }
        });
        setAdmins({email: ''})
        setIsSubmit(true);
    };
    if(isSubmit){
        setTimeout(() => setIsSubmit(false),1800);
    }
    return (
        <form onSubmit={handleAddAdmin} className="px-4 py-5 mx-4 bg-white rounded-lg">
            <div className="form-group">
                <input type="email" className="form-control" placeholder="jhon@gmail.com" name="email" value={email} onChange={e => handleInputs(e)} />
            </div>
            <button type="submit" className="btn btn-success px-5">Submit</button>
            {
                isSubmit &&
                <p className="mt-3 text-success">Event Added Successfully!!</p>
            }
        </form>
    );
};

export default MakeAdminForm;