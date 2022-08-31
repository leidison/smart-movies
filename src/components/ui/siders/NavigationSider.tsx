import { Layout, Menu } from 'antd'
import { IRouter } from '@/components/interfaces'
import { createElement, ReactNode } from 'react'

interface Props {
  items: IRouter[]
  header?: ReactNode
  theme?: 'light' | 'dark'
}

function NavigationSider ({ items, header, theme = 'light' }: Props) {
  return <Layout.Sider
      theme={theme}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      {header}

      <Menu
        theme={theme}
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items.map(
          ({ label, icon }, index) => ({
            key: String(index + 1),
            label,
            icon: createElement(icon)
          })
        )}
      />
    </Layout.Sider>
}

export default NavigationSider
