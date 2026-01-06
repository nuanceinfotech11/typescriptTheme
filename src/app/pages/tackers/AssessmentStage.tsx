/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { AssessmenInner } from '../../../_metronic/partials/widgets'

const AssessmentStage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 justify-content-center'>
      <div className='col-xxl-10'>
        <AssessmenInner className='card-xxl-stretch mb-xl-3'/>
      </div>
    </div>
    {/* end::Row */}
  </>
)

export {AssessmentStage}
