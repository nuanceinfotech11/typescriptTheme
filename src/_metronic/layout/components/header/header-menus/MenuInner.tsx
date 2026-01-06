import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='My Profile' to='/crafted/pages/profile' />
      <MenuItem title='Account Settings' to='/crafted/accounts' />
      <MenuItem title='Tutorials' to='/crafted/accounts' />
    </>
  )
}
