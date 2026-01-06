/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { UserInnerTackers } from '../../../_metronic/partials/widgets'

const TackersPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 justify-content-center'>
      <div className='col-xxl-10'>
        <UserInnerTackers className='card-xxl-stretch mb-xl-3 bg-gradient-primary' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const UserTackers: FC = () => {
  return (
    <>
      <TackersPage />
    </>
  )
}

export {UserTackers}
