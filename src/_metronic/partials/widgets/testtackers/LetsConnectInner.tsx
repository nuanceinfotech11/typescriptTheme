/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'
import AddEmail from '../../modals/add-email/AddEmail'
import SuccessPopup from '../../modals/success-popup/SuccessPopup'
import SkipPopup from '../../modals/skip-popup/SkipPopup'

type Props = {
  className?: string
  bgColor?: string
}
const LetsConnectInner = ({className}: Props) => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false)
  const [showSkipPopup, setshowSkipPopup] = useState<boolean>(false)
  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between overflow-hidden p-20 position-relative'>
        <img src={toAbsoluteUrl('/media/dashboard/Bg.png')} alt='' className='bgback' />
        <div className='position-relative'>
          <h1 className='fs-3hx fw-bold mb-6 text-dark'>
            Let's Connect with Someone Who <br></br> Knows You Well!
          </h1>
          <div className='mb-6'>
            <h3 className='fs-2 fw-normal mb-6 text-dark lh-base opacity-75'>
              To enrich our perspective, we'd appreciate insights from <br></br> someone who's
              familiar with your daily life. Kindly enter the <br></br> email of a close friend or
              family member who can share their <br></br>observations.
            </h3>
          </div>
          <div className='align-items-center d-flex gap-20 my-10'>
            <div className='d-flex gap-5'>
              <button className='btn btn-primary fw-semibold px-6 py-3' onClick={() => setShowCreateAppModal(true)}>
                Add Email
              </button>

              <button type='button' className='btn btn-secondary fw-semibold px-6 py-3'  onClick={() => setshowSkipPopup(true)}>
                Skip
              </button>
            </div>
          </div>
          <div className='m-0 d-flex justify-content-end'>
            <Link to='/assessmentstage' className='btn btn-success fw-semibold px-6 py-3'>
              Continue <KTIcon iconName='arrow-right' className='fs-2 ms-2 text-white' />
            </Link>
          </div>

          <div>
              <img src={toAbsoluteUrl('/media/dashboard/Nonprofit.svg')} alt='' className="position-absolute bottom-80px end-0 w-xxl-325px w-lg-250px" />
            </div>
        </div>
      </div>
      
      <AddEmail show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} setShowSuccessPopup={setShowSuccessPopup}/>
      <SuccessPopup show={showSuccessPopup} handleClose={() => setShowSuccessPopup(false)} />
      <SkipPopup show={showSkipPopup} handleClose={() => setshowSkipPopup(false)} />
    </div>
  )
}

export {LetsConnectInner}
