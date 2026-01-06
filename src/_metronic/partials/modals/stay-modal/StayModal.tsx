import React from 'react'
import {Modal} from 'react-bootstrap'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

const StayModal = ({show, handleClose}: Props) => {
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
          <h1 className='fw-medium'>Stay in the Know with <br></br> All Your Important Updates in One Place</h1>

          <div>
            <img alt='Logo' className='w-75 p-10' src={toAbsoluteUrl('/media/dashboard/E_statistics1.svg')} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default StayModal
