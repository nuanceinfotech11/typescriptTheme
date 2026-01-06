/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { TestInner } from '../../../_metronic/partials/widgets/testtackers/TestInner'

const TestScreen: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 justify-content-center'>
      <div className='col-xxl-12'>
        <TestInner className='card-xxl-stretch mb-xl-3'/>
      </div>
    </div>
    {/* end::Row */}
  </>
)

export {TestScreen}
