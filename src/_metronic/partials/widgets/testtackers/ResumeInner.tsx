import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  bgColor?: string
}
const now = 40
const ResumeInner = ({className}: Props) => {
  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between overflow-hidden p-10 position-relative'>
        <img src={toAbsoluteUrl('/media/dashboard/Bg.png')} alt='' className='bgback' />
        <div className='row justify-content-between position-relative align-items-center'>
          <div className='col-lg-12 d-flex min-h-250px align-items-start flex-column gap-10 '>
            <h1 className='fs-1'>Resume Test</h1>
            <p className='fs-3'>
              Hey there, welcome back! Hope you're all charged up and ready to go. Your next set of
              questions is ready for you. You're doing an awesome job, and we can't wait to see what
              you do next!
            </p>
          </div>
          <div className="row justify-content-between position-relative align-items-center pt-5">
              <div className="col-lg-6">
                <h5 className='fs-6'>Progress</h5>
              <ProgressBar now={now} variant='primary' animated label={`${now}%`} />
              </div>
              <div className='col-lg-6 d-flex justify-content-end'>
                <Link to='/print-pages' className='btn btn-success fs-md-7 d-flex justify-content-center align-items-center'>
                  Resume
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ResumeInner}
