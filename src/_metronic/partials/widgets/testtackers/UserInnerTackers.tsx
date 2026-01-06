/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  bgColor?: string
}
const UserInnerTackers = ({
  className,
}: Props) => {
  return (
    <div
      className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}
    >
      <div className='card-body d-flex flex-column justify-content-between p-20 position-relative'>
        <h1 className='fs-2hx fw-bold mb-6 text-white'>
        Let's Take the Next Step Together
        </h1>
        <div className='mb-6'>
          <h3 className='fs-1 fw-normal mb-6 text-white lh-base opacity-75'>Before we get started, we'll need a bit of your time—about 20 minutes— <br></br> to better understand your needs.</h3>
          <h3 className='fs-1 fw-normal text-white lh-base opacity-75'>Why Your Input is Crucial? <br></br> Your insights offer us a valuable foundation, ensuring <br></br> that we approach your assessment with the highest <br></br> accuracy and consideration. <br></br> Your responses will directly influence how we tailor our <br></br> test to be an ideal match for you.</h3>
          
        </div>
        <div className='m-0'>
          <Link to='/howoften' className='btn btn-success fw-semibold px-6 py-3'>
            Continue <KTIcon iconName='arrow-right' className='fs-2 ms-2 text-white' />
          </Link>
        </div>
        <img src={toAbsoluteUrl('/media/dashboard/delivery.svg')} alt="" className="position-absolute bottom-50px end-50px w-325px" />
      </div>
    </div>
  )
}

export {UserInnerTackers}
