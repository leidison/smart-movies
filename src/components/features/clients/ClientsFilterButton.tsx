import { SearchOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

function ClientsFilterButton () {
  return <Tooltip title="Buscar">
    <Button type="link" shape="circle" icon={<SearchOutlined />} />
  </Tooltip>
}

export default ClientsFilterButton
