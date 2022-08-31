import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { PropsWithChildren } from 'react'

function AddButton ({ children }: PropsWithChildren) {
  return <Button type='primary' icon={<PlusOutlined />}>Adicionar</Button>
}

export default AddButton
