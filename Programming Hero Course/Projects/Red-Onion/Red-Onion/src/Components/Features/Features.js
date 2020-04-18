import React, { useState, useEffect } from 'react';
import './Features.css'
import SingleFeature from '../SingleFeature/SingleFeature';
import AllFeatures from '../../fakeData/FeaturesData'

const Features = (props) => {
    const[features, setFeatures] = useState([]);
    useEffect(() => {
        setFeatures(AllFeatures);
    }, [])
    return (
        <section className="features my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Why you choose us</h2>
                                <p className="mt-3 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    {
                        features && features.map(feature => <SingleFeature key={feature.id} feature={feature}></SingleFeature>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;