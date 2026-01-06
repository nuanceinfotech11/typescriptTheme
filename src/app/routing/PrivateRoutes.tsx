import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import { UserTackers } from '../pages/tackers/UserTackers'
import { HowOften } from '../pages/tackers/HowOften'
import { LetsConnect } from '../pages/tackers/LetsConnect'
import { AssessmentStage } from '../pages/tackers/AssessmentStage'
import { PrintPages } from '../pages/tackers/PrintPages'

import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import { CameraPages } from '../pages/tackers/CameraTest'
import { MicroPhonePages } from '../pages/tackers/MicrophoneTest'
import { SpeakerPages } from '../pages/tackers/SpeakerTest'
import { TestScreen } from '../pages/tackers/TestScreen'
import { ResumeTest } from '../pages/tackers/ResumeTest'




const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='takers' element={<UserTackers />} />
        <Route path='howoften' element={<HowOften />} />
        {/* <Route path='often-2' element={<Often2 />} /> */}
        {/* <Route path='often-3' element={<Often3 />} /> */}
        <Route path='letsconnect' element={<LetsConnect />} />
        <Route path='assessmentstage' element={<AssessmentStage />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='print-pages' element={<PrintPages />} />
        <Route path='cameratest' element={<CameraPages />} />
        <Route path='microphonetest' element={<MicroPhonePages />} />
        <Route path='speakertest' element={<SpeakerPages />} />
        <Route path='testscreen' element={<TestScreen />} />
        <Route path='resume-test' element={<ResumeTest />} />
        
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
