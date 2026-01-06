import React from 'react'
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'

type Props = {
  className?: string
  bgColor?: string
}
const PrintPagesInner = ({className}: Props) => {
  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between overflow-hidden p-10 position-relative'>
        <img src={toAbsoluteUrl('/media/dashboard/Bg.png')} alt='' className='bgback' />
        <div className='row justify-content-between position-relative align-items-center'>
          <div className='col-lg-6'>
            <div className='bg-light-primary shadow d-flex flex-column h-100 min-h-500px justify-content-between p-10 position-relative rounded-4'>
              <div className='position-relative'>
                <h1 className='fs-2hx fw-bold mb-6 text-dark'>Print the Writing Pages!</h1>
                <p className='fs-3'>
                  Please click the "Print Pages" button to print the "writing pages" for your Adam's
                  test. These are where Adam will showcase his writing skills, so it's important to
                  have them on hand.
                </p>
                <p className='fs-3'>
                  When the test is complete, you can scan these pages with your phone or show them
                  to the webcam.
                </p>
              </div>
              <div className='align-items-center d-flex justify-content-between'>
                   <button className='btn btn-dark fs-md-7'>Print Pages <KTIcon iconName='printer' className='fs-2 ms-2 text-white' /></button> 
                   <p className='m-0 fs-5 fs-md-7'>Having trouble? Check out our  <a href="/">FAQ's</a></p>    
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='justify-content-between d-flex flex-column h-100 min-h-500px'>
            <div className='text-center'>
            <img src={toAbsoluteUrl('/media/dashboard/image_2023_11_22T05_48_24_781Z.png')} alt='' className='border-dashed p-8 img-fluid' />
            </div>

            <div className='align-items-center d-flex justify-content-center m-0 gap-5 position-relative'>
              {/* <div className='d-flex align-items-center'>
              <img src={toAbsoluteUrl('/media/dashboard/cameraicon.png')} alt='' className='w-30px' />
                <p className='fs-3 m-0'>Camera Test</p>
              </div> */}
              <span className='next-stp fs-8'>Next Step</span>
              <Link to='/cameratest' className='btn btn-success fw-semibold px-6 py-3'>
              <img src={toAbsoluteUrl('/media/dashboard/cameraicon.png')} alt='' className='w-20px me-1 invert' />
              Camera Test
                 <KTIcon iconName='arrow-right' className='fs-2 ms-2 text-white' />
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export {PrintPagesInner}
