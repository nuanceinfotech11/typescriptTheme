/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { Often2 } from '../../../_metronic/partials/widgets/testtackers/Often2'
// import { HowOftenInner } from '../../../_metronic/partials/widgets'
const HowOften: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 justify-content-center'>
      <div className='col-xxl-12'>
        <Often2 className='card-xxl-stretch mb-xl-3'/>
      </div>
    </div>
    {/* end::Row */}
  </>
)

export {HowOften}
