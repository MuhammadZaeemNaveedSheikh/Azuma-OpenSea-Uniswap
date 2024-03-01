import { Route } from 'react-router-dom'
import Layout from './components/Layout'

export const PublicRoute = (props) => {
  return (
    <Layout themeMode={props.colorTheme} pageName={props.pageName}>
      <Route {...props} />
    </Layout>
  )
}

export const PrivateRoute = (props) => {
  return (
    <Layout>
      <Route {...props} />
    </Layout>
  )
}
