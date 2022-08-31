import { Link, Outlet } from 'react-router-dom'
import { Button, PageHeader } from 'antd'
import ClientsFilterButton from '@/components/features/clients/ClientsFilterButton'
import Container from '@/components/ui/box/Container'
import AddButton from '@/components/ui/buttons/AddButton'

function IndexPage () {
  return <div>
    <PageHeader
        title="Filmes"
        extra={[
          <Link key={'1'} to={'/movies/add'}>
            <AddButton />
          </Link>,
          <ClientsFilterButton key={'2'} />
        ]}
      />

    <Container>
      <div>
        list...
        <Link to={'/movies/1'}>
          <Button type='primary'>editar</Button>
        </Link>
      </div>
    </Container>

    <div>
      <Outlet />
    </div>
  </div>
}

export default IndexPage
