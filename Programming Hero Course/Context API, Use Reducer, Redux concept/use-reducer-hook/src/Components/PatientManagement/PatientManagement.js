import React from 'react';
import { useReducer } from 'react';
import { patientReducer, patientState } from '../reducers/reducers';
import { useRef } from 'react';

const PatientManagement = () => {

    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type:'ADD_PATIENT', 
            name: nameRef.current.value, 
            id: state.patients.length
        })
        nameRef.current.value = '';
    }
    return (
        <div>
           <h1>Patient management: {state.patients.length}</h1>
           <form onSubmit = {handleSubmit}>
               <input ref={nameRef}/>
            </form> 
            {
                state.patients.map(pt => <li key={pt.id}
                    onClick= {()=> dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;