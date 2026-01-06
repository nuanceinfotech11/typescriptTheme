import React from 'react'
import {Modal} from 'react-bootstrap'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

const SuccessPopup = ({show, handleClose}: Props) => {
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
          className='btn btn-active-color-primary btn-icon btn-sm d-flex justify-content-end pe-4 pt-4 w-100 position-relative z-index-2'
          onClick={handleClose}
        >
          <KTIcon className='fs-1' iconName='cross' />
        </div>
        {/* end::Close */}

        <div className='modal-body py-lg-10 px-lg-10 text-center CustomBg'>
          <div className='position-relative z-index-2'>
            <img
              alt='Logo'
              className='w-150px pb-10'
              src={toAbsoluteUrl('/media/dashboard/checkmark.svg')}
            />
          </div>
          <h1 className='fs-2x fw-semibold my-4'>Great, you've added a close contact email!</h1>
          <div className='position-relative'>
            <h4 className='mb-2 fs-3 fw-normal'> You can update the contact email at any timein 'My Profile'</h4>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SuccessPopup
