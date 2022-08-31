import { SaveOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { PropsWithChildren } from 'react'

function SaveButton ({ children }: PropsWithChildren) {
  return <Button type='primary' icon={<SaveOutlined />}>
    Salvar
  </Button>
}

export default SaveButton
