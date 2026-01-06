import React, {useCallback, useRef, useState} from 'react'
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'
import Webcam from 'react-webcam'
import FaceDetectionComponent from './testing'

type Props = {
  className?: string
  bgColor?: string
}
const CameraTestInner = ({className}: Props) => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);


  console.log(imgSrc,"imgSrcimgSrc   ")

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot()
  //   setImgSrc(imageSrc)
  // }, [webcamRef, setImgSrc])


  const capture = useCallback(() => {
    console.log('hi')
    const imageSrc = webcamRef?.current?.getScreenshot() ?? null;
    if (imageSrc !== null) {    
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);

  

  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <FaceDetectionComponent />
      <div className='card-body d-flex flex-column justify-content-between overflow-hidden p-10 position-relative'>
        <img src={toAbsoluteUrl('/media/dashboard/Bg.png')} alt='' className='bgback' />
        <div className='row justify-content-between position-relative align-items-center'>
          <div className='col-lg-6'>
            <div className='bg-light-primary shadow d-flex flex-column h-100 min-h-500px justify-content-between p-10 position-relative rounded-4'>
              <div className='position-relative'>
                <h1 className='fs-2hx fw-bold mb-6 text-dark'>Camera Test</h1>
                <p className='fs-3'>
                  Quickly and easily test to check that your webcam is working and properly set up.
                </p>

                <ol className='inner-list fs-6 pt-5'>
                  <li>Click the “Start Cam Test” button below.</li>
                  <li>Click “Allow” when you see the pop-up in your browser.</li>
                  <li>You should see movement in the camera window.</li>
                  <li>Make sure the exmanee entire face is visible and well-lit.</li>
                </ol>
              </div>
              <div className='align-items-center d-flex justify-content-between'>
                <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
                <button onClick={capture} className='btn btn-dark fs-md-7 d-flex align-items-center'>
                  Start Cam Test{' '}
                  <img
                    src={toAbsoluteUrl('/media/dashboard/cameraicon.png')}
                    alt=''
                    className='w-15px ms-2 invert'
                  />
                </button>

                {imgSrc && <img src={imgSrc} alt=''/>}
                <p className='m-0 fs-5 fs-md-7'>
                  Having trouble? Check out our <a href='/'>FAQ's</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='justify-content-between d-flex flex-column h-100 min-h-500px'>
              <div className='text-center'>
                <img
                  src={toAbsoluteUrl('/media/dashboard/camera-back.png')}
                  alt=''
                  className='border-dashed p-8 img-fluid'
                />
              </div>

              <div className='align-items-center d-flex justify-content-center m-0 gap-5 position-relative'>
                {/* <div className='d-flex align-items-center'>
              <img src={toAbsoluteUrl('/media/dashboard/cameraicon.png')} alt='' className='w-30px' />
                <p className='fs-3 m-0'>Camera Test</p>
              </div> */}
                <span className='next-stp fs-8'>Next Step</span>
                <Link to='/microphonetest' className='btn btn-success fw-semibold px-6 py-3'>
                  <img
                    src={toAbsoluteUrl('/media/dashboard/microphone.png')}
                    alt=''
                    className='w-20px me-1 invert'
                  />
                  Test Microphone
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

export {CameraTestInner}
