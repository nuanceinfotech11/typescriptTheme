/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  EmmasAssessment,
  AdamsAssessment,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>

      <div className='col-xxl-6 col-lg-6'>
        <EmmasAssessment className='card-xxl-stretch mb-xl-3 bg-light-primary' />
      </div>

      <div className='col-xxl-6 col-lg-6'>
        <AdamsAssessment className='card-xxl-stretch mb-5 mb-xl-8 bg-light-warning' />
      </div>
      
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  console.log("testing")
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
