import { lazy, Suspense } from "react"
import { useRoutes } from "react-router-dom"
import MainLoading from "../layout/MainLoading"

const MainLayout = lazy(()=> import('../layout/MainLayout'))
const Home = lazy(() => import('../features/home/pages/Home'))
const Search = lazy(() => import('../features/search/pages/Search'))
const Contact = lazy(() => import('../features/contact/pages/Contact'))
const Company = lazy(() => import('../features/company/pages/Company'))
const About = lazy(() => import('../features/about/pages/About'))
const Collections = lazy(() => import('../features/collections/pages/Collections'))
const CollectionDetails = lazy(() => import('../features/collections/pages/CollectionDetails'))
const Team = lazy(() => import('../features/team/pages/Team'))
const NotFound = lazy(() => import('../features/notfound/pages/NotFound'))

const AppRoutes = () => {
    const routes = useRoutes([
    {   
        element: <MainLayout/>, 
        path: '/', 
        children: [
           {index: true, element: <Home/>},
           {path: 'collections', element: <Collections/>},
           {path: 'about', element: <About/>},
           {path: 'search', element: <Search/>},
           {path: 'contact', element: <Contact/>},
           {path: 'company', element: <Company/>},
           {path: 'team', element: <Team/>},
           {path: 'collections/:id', element: <CollectionDetails/>},
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