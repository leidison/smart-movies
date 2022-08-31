import { Outlet } from 'react-router-dom'

function IndexPage () {
  return <>
    <div>Clientes</div>

    <div><Outlet/></div>
  </>
}

export default IndexPage
