/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { LetsConnectInner } from '../../../_metronic/partials/widgets'

const LetsConnect: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 justify-content-center'>
      <div className='col-xxl-10'>
        <LetsConnectInner className='card-xxl-stretch mb-xl-3'/>
      </div>
    </div>
    {/* end::Row */}
  </>
)

export {LetsConnect}
