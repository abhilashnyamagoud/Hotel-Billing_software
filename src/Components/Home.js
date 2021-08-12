import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Home=(props)=>{

    return(
        <div>
        <div className='home mt-5'>
        <div className='row'>
            <div className='col-md-8'>
              <h1 className='display-1 text-danger'><b> WellCome To Bangalore Restaurant...! </b></h1>  
            </div> 
            <div className='col-md-4 text-light mt-5 p-2'>
                <h3 className='h3 text-info'>Take Your Loved Food</h3>
                </div> 
        </div>
        <div className='row text-white container '>
            
            <div className='col-md-6'>
                <h1 className='text-light'> REWARD good reviews of your staff.</h1>
            </div>
        </div>
        </div>
        <footer className='bg-dark text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col text-center py-4'>
                        <h3>Bangalore Restaurant</h3>
                        <p>copyright &copy;</p>
                        <p className='lead'>Contact Out Social Links</p>
                        <SocialIcon url="http://twitter.com/" target='blank' className='mr-3'/>
                        <SocialIcon url="http://linkedin.com/in/" target='blank' className='mr-3'/>
                        <SocialIcon network="pinterest" target='blank' style={{ height: 50, width: 50 }} />
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}
export default Home