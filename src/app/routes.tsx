import { lazy, Suspense } from "react"
import { useRoutes } from "react-router-dom"
import MainLoading from "../layout/MainLoading"

const MainLayout = lazy(()=> import('../layout/MainLayout'))
const Home = lazy(() => import('../features/home/pages/Home'))
const Collections = lazy(() => import('../features/collections/pages/Collections'))
const NotFound = lazy(() => import('../features/notfound/pages/NotFound'))

const AppRoutes = () => {
    const routes = useRoutes([
    {   
        element: <MainLayout/>, 
        path: '/', 
        children: [
           {index: true, element: <Home/>},
           {path: 'collections', element: <Collections/>},
        ]
    },
    { path: '*', element: <NotFound /> },
  ])
  return (
    <Suspense fallback={<MainLoading/>}>
        {routes}
    </Suspense>
  )
}

export default AppRoutes