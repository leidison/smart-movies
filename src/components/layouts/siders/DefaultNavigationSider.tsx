import NavigationSider from '@/components/ui/siders/NavigationSider'
import { AuditOutlined, UsergroupAddOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function DefaultNavigationSider () {
  return <NavigationSider
    header={<div>leidison</div>}
    items={[
      {
        label: <Link to={'movies'}>Filmes</Link>,
        icon: VideoCameraOutlined
      },
      {
        label: <Link to={'clients'}>Clientes</Link>,
        icon: UsergroupAddOutlined
      },
      {
        label: <Link to={'rents'}>Aluguéis</Link>,
        icon: AuditOutlined
      }
    ]}
  />
}

export default DefaultNavigationSider
