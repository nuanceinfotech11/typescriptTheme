import React, { FC } from 'react'
import { KTIcon } from './../../../../../../../_metronic/helpers'
import { Link } from 'react-router-dom'

const Step5: FC = () => {
  
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10 mb-lg-10'>
        <h2 className='fw-bold text-gray-900'>🎉 Congratulations! Your account is all set up</h2>

        <div className='text-muted fw-semibold fs-6'>
          Remember, if you have questions or need assistance, don't hesitate to contact. We're here to help and will get back to you promptly.
          <Link to='/auth/login' className='link-primary fw-bold text-decoration-underline'>
            {' '}
            Sign In
          </Link>
          .
        </div>
      </div>

      <div className='mb-0'>
        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
          <KTIcon iconName='information-5' className='fs-2tx text-warning me-4' />
          <div className='d-flex flex-stack flex-grow-1'>
            <div className='fw-bold'>
              <h4 className='text-gray-900 fw-bold'>Heads Up!</h4>
              <div className='fs-6 text-gray-700'>
                Sign In and head over to your personal area to begin the test process. Start whenever you feel comfortable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step5 }
