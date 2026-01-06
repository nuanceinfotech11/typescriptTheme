import React from 'react'
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'

type Props = {
  className?: string
  bgColor?: string
}
const AssessmenInner = ({className}: Props) => {
  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between overflow-hidden p-20 position-relative'>
        <img src={toAbsoluteUrl('/media/dashboard/Bg.png')} alt='' className='bgback' />
        <div className='position-relative'>
          <h1 className='fs-3hx fw-bold mb-6 text-dark'>Welcome to the assessment stage!</h1>
          <div className='mb-6'>
            <h3 className='fs-2 fw-normal mb-6 text-dark lh-base opacity-75'>
              In this phase, you will undertake various subject tests as part of the evaluation for
              learning disabilities. Each test is customized and may take from an hour to an hour
              and a half, with sections lasting around 20 minutes. Breaks are possible, though not
              recommended, within these segments.
            </h3>

            <div className='align-items-center d-flex gap-15 justify-content-between w-100'>
              <div>
                <h3 className='fs-2 fw-normal mb-6 text-dark lh-base opacity-75'>
                  Ensure you've had a good rest and haven't engaged in intense activities before the
                  test. The tests should be taken in a quiet, uninterrupted environment. Please be
                  seated comfortably at the computer with the speakers, microphone, and camera
                  properly set up to face you.
                </h3>
                <h3 className='fs-2 fw-normal mb-6 text-dark lh-base opacity-75'>
                  We'll then perform a check of the computer's peripherals. Should you have any
                  questions or require further explanation, please reach out to us at any time.
                </h3>
              </div>
              <div>
                <img
                  src={toAbsoluteUrl('/media/dashboard/multi-stage_registration.svg')}
                  alt=''
                  className='w-xxl-300px w-lg-250px'
                />
              </div>
            </div>
          </div>

          <div className='m-0 d-flex justify-content-end'>
            <Link to='/' className='btn btn-success fw-semibold px-6 py-3'>
              Continue <KTIcon iconName='arrow-right' className='fs-2 ms-2 text-white' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export {AssessmenInner}
