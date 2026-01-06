import React, { useState } from 'react'
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'
import TimeOutPopup from '../../modals/timeout-popup/TimeoutPopup'

type Props = {
  className?: string
  bgColor?: string
}
const TestInner = ({className}: Props) => {
    const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between overflow-hidden p-10 position-relative'>
        <img src={toAbsoluteUrl('/media/dashboard/Bg.png')} alt='' className='bgback' />
        <div className='row justify-content-between position-relative align-items-center'>
         
          <div className='col-lg-12 min-h-250px d-flex align-items-center justify-content-center'>
            <h1>Test Screen</h1>
          </div>
          
          <div className='col-lg-12 d-flex justify-content-end'>
            <button
              className='btn btn-success fs-md-7 d-flex justify-content-center align-items-center'
              onClick={() => setShowCreateAppModal(true)}
            >
              <i className='material-icons p-0 fs-1'>pause_circle</i>
            </button>
          </div>

        </div>
      </div>
      <TimeOutPopup show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)}/>
    </div>
    
  )
}

export {TestInner}
