import React from 'react';
import { Link } from 'react-router-dom';
import './TeamDetail.css'

const TeamDetail = (props) => {

    const{name,image,status} = props.team;

    

    const btnStyle={

        marginLeft:'40px',
        
        
    }
    return (


        <div className="col-md-4">
            <div className={`team-container justify-content-center`}>
                <div className="ms-2">

                    <img src={image} style={{width:165,height:140}} alt=""/>

                   

                </div>
                <div>
                    <h5>{name}</h5>
                    <small>{status}</small>
                    <a  to="https://www.mobicarebd.com/" style={btnStyle}><button type="button" class="mt-1 btn btn-success text-uppercase btn-sm">About Me</button></a>

                </div>
            </div>

        </div>

    );
};

export default TeamDetail;