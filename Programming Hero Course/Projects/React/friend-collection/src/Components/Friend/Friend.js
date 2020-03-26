import React from 'react';
import './Friend.css'
import { fontAwesomeIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Friend = (props) => {

    const { name, designation, email, phone, income, image } = props.friend

    return (
        <div className="friend">
            <div className="pro-pic">
                <img src={image} alt="" />
            </div>
            <div className="friend-info">
                <h3>{name}, {designation}</h3>
                <p><b>Email:</b> {email}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Yearly Income:</b>$ {income}</p>
                <button className="connect-button"
                        onClick={() => props.handleAddFriend(props.friend)}
                >
                    <FontAwesomeIcon icon={faAddressCard} />  Add</button>
            </div>
        </div>
    );
};

export default Friend;