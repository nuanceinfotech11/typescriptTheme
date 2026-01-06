import React from 'react'
import {Modal} from 'react-bootstrap'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

const SkipPopup = ({show, handleClose}: Props) => {
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

        <div className='modal-body py-lg-10 px-lg-5 text-center WarningBg'>
          <div className='position-relative z-index-2'>
            <img
              alt='Logo'
              className='w-150px pb-10'
              src={toAbsoluteUrl('/media/dashboard/warningicon.svg')}
            />
          </div>
          <h2 className='fw-semibold my-4'>You've chosen to skip, but remember, <br></br> this is a very crucial step for the diagnosis process.</h2>
          <div className='position-relative'>
            <h5 className='mb-2 fw-normal'> Feel free to add your close contact email in the "My Profile" area at any time.</h5>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SkipPopup
