/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { PrintPagesInner } from '../../../_metronic/partials/widgets/testtackers/PrintPagesInner'
const PrintPages: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 justify-content-center'>
      <div className='col-xxl-12'>
        <PrintPagesInner className='card-xxl-stretch mb-xl-3'/>
      </div>
    </div>
    {/* end::Row */}
  </>
)

export {PrintPages}
