import React from 'react';
import TeamDetail from '../TeamDetail/TeamDetail';
import './Team.css'
import Image1 from '../../../images/eng1.jpg' 
import Image2 from '../../../images/eng2.jpg' 
import Image3 from '../../../images/1eng3.jpg' 


const Team = () => {

    const teams =[

        {

            name:"Anderson",
            image:Image1,
            status:"CEO & Founder"


        },
        {
            
            name:"Jack",
            image:Image2,
            status:"Hardware Specialist"



        },
        {

            
            name:"Maiyer",
            image:Image3,
            status:"Software Specialist"


        }
    ]
   
    

    return (
        <section className="heading-container mt-3 justify-content-center">
            <div class="team-card mt-3 ms-5">
                <h3 className="text-uppercase mb-2">Our</h3>
                <h5 class="text-black mb-4">Awesome Team</h5>

            </div>
            <section className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        teams.map(team => <TeamDetail team={team}></TeamDetail>)
                    }



                </div>
            </section>
        </section>
    );
};

export default Team;