import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/IndexPage'
import DefaultLayout from './layouts/DefaultLayout'

function App () {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {RenderRoutes([
        {
          path: '',
          Element: DefaultLayout,
          routes: [
            {
              path: 'clients',
              Element: lazy(async () => await import('@/pages/clients/IndexPage')),
              routes: [
                {
                  path: 'add',
                  Element: lazy(async () => await import('@/pages/clients/AddPage')),
                  routes: []
                },
                {
                  path: ':id',
                  Element: lazy(async () => await import('@/pages/clients/EditPage')),
                  routes: []
                }
              ]
            },
            {
              path: 'movies',
              Element: lazy(async () => await import('@/pages/movies/IndexPage')),
              routes: [
                {
                  path: 'add',
                  Element: lazy(async () => await import('@/pages/movies/AddPage')),
                  routes: []
                },
                {
                  path: ':id',
                  Element: lazy(async () => await import('@/pages/movies/EditPage')),
                  routes: []
                }
              ]
            },
            {
              path: 'rents',
              Element: lazy(async () => await import('@/pages/rents/IndexPage')),
              routes: [
                {
                  path: 'add',
                  Element: lazy(async () => await import('@/pages/rents/AddPage')),
                  routes: []
                },
                {
                  path: ':id',
                  Element: lazy(async () => await import('@/pages/rents/EditPage')),
                  routes: []
                }
              ]
            }
          ]
        }
      ])}
    </Routes>
  )
}

function RenderRoute ({ routes: subRoutes, Element, ...props }: any) {
  return (
    <Route {...props} element={
      <Suspense fallback={<>Loading...</>}>
        <Element />
      </Suspense>
    }>
      {RenderRoutes(subRoutes ?? [])}
    </Route>
  )
}

function RenderRoutes (routes: any[]) {
  return routes.map((route: any) => RenderRoute({ key: route.path, ...route }))
}

export default App
