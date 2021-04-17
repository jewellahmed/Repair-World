import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData =[

        {
            title:'Opening Hours',
            description:'24/7 Service',
            icon:faClock,
            background:'primary'

        },

        {

            title:'Visit Us',
            description:'GEC,Chittagong',
            icon:faMapMarker,
            background:'dark'

        },
        {

            title:'Contact Us',
            description:'+8801721345321',
            icon:faPhone,
            background:'primary'

        }

    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {

                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
            
        </section>
    );
};

export default BusinessInfo;