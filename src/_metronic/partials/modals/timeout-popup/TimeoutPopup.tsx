import React from 'react'
import {Modal} from 'react-bootstrap'
import {toAbsoluteUrl} from '../../../helpers'
import { Link } from 'react-router-dom'

type Props = {
  show: boolean
  handleClose: () => void
}

const TimeOutPopup = ({show, handleClose}: Props) => {
  return (
    <>
    
      <Modal
        id='kt_modal_create_app'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog modal-dialog-centered mw-600px'
        show={show}
        onHide={handleClose}
        backdrop={true}
      >
        {/* begin::Close */}
        
        {/* end::Close */}

        <div className='modal-body py-lg-10 px-lg-10 text-center'>
        <div>
            <img
              alt='Logo'
              className='w-200px pb-5'
              src={toAbsoluteUrl('/media/dashboard/timeout.jpg')}
            />
          </div>
          <h1 className='fw-semibold my-4'>Need a Timeout?</h1>
          <div className='separator my-5'></div>
          <div className='position-relative text-start'>
            <p className='mb-1'>
              Great job so far! Feel free to take a little break. Stretch, snack, or just chill —
              we'll be here, ready to continue when you are. Press 'Resume' whenever you're ready to
              carry on with the adventure!
            </p>

          </div>
          <div className="position-relative d-flex justify-content-end gap-2 pt-4">
            <Link to='/' className='btn btn-primary fs-7'>Timeout</Link>
            <button className='btn btn-success fs-7' onClick={handleClose} >Resume</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default TimeOutPopup
