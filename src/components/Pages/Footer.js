import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../UserContext";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-white'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About Holla's Trekkers</h5>

            <p className="para">
            We are a small and dedicated team who specialize in harmonizing adventurous travelers with their dream vacations. We are passionate about trekking, wild places, and conservation and we are always happy to share our wilderness discoveries with others.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Important Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='' className='text-white'>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Designed & Developed by Sudhesh Holla
      </div>
    </MDBFooter>
  )
}

export default Footer