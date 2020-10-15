import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';

const ReviewsForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isSubmit, setIsSubmit] = useState(false);

    const [reviews, setReviews] = useState({name: loggedInUser.name, nameDesignation: '', description:'', photo: loggedInUser.photo});
    const {name, nameDesignation, description, photo} = reviews;
    
    const handleInputs = e => {
        setReviews({...reviews, [e.target.name]: e.target.value});
    }
    
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        
        fetch('https://sheltered-savannah-44283.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                //console.log(result)
            }
        });
        setReviews({nameDesignation: '', description: ''});
        setIsSubmit(true);
    };
    if(isSubmit){
        setTimeout(() => setIsSubmit(false),1800);
    }

    return (
        <form onSubmit={handleReviewSubmit} className="px-4 mx-4">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Your name/company name" name="name" value={name} onChange={e => handleInputs(e)}  />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Company's name, Designation" name="nameDesignation" value={nameDesignation} onChange={e => handleInputs(e)} />
            </div>
            <div className="form-group">
                <textarea className="form-control" rows="3" placeholder="Description" name="description" value={description} onChange={e => handleInputs(e)} ></textarea>
            </div>
            <div className="form-group">
                <img style={{width: '80px'}} src={photo} alt=""/>
            </div>
            
            <button type="submit" className="btn btn-dark px-5">Submit</button>
            {
                isSubmit &&
                <>
                <p className="mt-3 text-success">Review Given Successfully!!</p>
                </>
            }
        </form>
    );
};

export default ReviewsForm;