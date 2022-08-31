import { PageHeader } from 'antd'
import { useNavigate } from 'react-router-dom'
import Container from '@/components/ui/box/Container'
import SaveButton from '@/components/ui/buttons/SaveButton'

function EditPage () {
  const navigate = useNavigate()

  return <>
    <PageHeader
        title="Procurando Nemo"
        subTitle={<div>...</div>}
        extra={[
          <SaveButton key={'1'}/>
        ]}
        onBack={() => navigate('/movies')}
      />

    <Container>
      formulário
    </Container>
  </>
}

export default EditPage
