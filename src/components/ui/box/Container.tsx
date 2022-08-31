import { PropsWithChildren } from 'react'

function Container ({ children }: PropsWithChildren) {
  return <div style={{ padding: '4px 24px' }}>{children}</div>
}

export default Container
