import React from 'react'
import {Modal} from 'react-bootstrap'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
  setShowSuccessPopup: (action:boolean) => void
}

const AddEmail = ({show, handleClose, setShowSuccessPopup}: Props) => {
    
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
        <div
          className='btn btn-active-color-primary btn-icon btn-sm d-flex justify-content-end pe-4 pt-4 w-100'
          onClick={handleClose}
        >
          <KTIcon className='fs-1' iconName='cross' />
        </div>
        {/* end::Close */}

        <div className='modal-body py-lg-10 px-lg-10 text-center'>
          <div>
            <img
              alt='Logo'
              className='w-200px pb-10'
              src={toAbsoluteUrl('/media/dashboard/multi-stage_registration.svg')}
            />
          </div>
          <h1 className='fw-semibold my-4'>Provide a Close Contact Email</h1>
          <div className='position-relative'>
            <form>
              <div className='d-flex'>
                <input
                  type='text'
                  className='form-control rounded-end-0'
                  placeholder='Enter Email Address'
                />
                <button className='btn btn-primary rounded-start-0' type='button' onClick={() => {setShowSuccessPopup(true); handleClose()}}>Submit</button>
              </div>
            </form>
          </div>
          <div className="separator my-5"></div>
          <div className='position-relative text-start'>
            <h4 className='mb-2'> What Happens Next:</h4>
            <p className='mb-1'>Your close contact will receive a short, friendly questionnaire about you.</p>
            <p className='mb-1'>You can monitor the status of their response anytime in your dashboard.</p>
          </div>
        </div>
      </Modal>
      
    </>
  )
}

export default AddEmail
