import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import DefaultNavigationSider from '@/components/layouts/siders/DefaultNavigationSider'

import './DefaultLayout.less'

const { Content } = Layout

function DefaultLayout () {
  return <>
    <Layout className="site-layout-root">
      <DefaultNavigationSider />

      <Layout className="site-layout-content">
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>

  </>
}

export default DefaultLayout
