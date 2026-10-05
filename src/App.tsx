import './App.css'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout/Layout'
import { LikePost } from './component/LikePost'
import { Greeting } from './component/UserGreeting'
import { StatusSelector } from './component/StatusSelector'
import { NumberList } from './component/NumberList'
import { ProductDetail, ProductListView } from './component/ProductDetailView'
import { Dashboard } from './component/Dashboard'
import { Profile } from './component/Profile'
import { Settings } from './component/settings'
import { ReduxCounterPage } from './component/ReduxCounter'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/like-posts' element={<LikePost />} />
          <Route path='/greetings' element={<Greeting />} />
          <Route path='/status-selector' element={<StatusSelector />} />
          <Route path='/number-list' element={<NumberList />} />
          <Route path='/product-detail' element={<ProductListView />} />
          <Route path='/product-detail-view/:id' element={<ProductDetail id={0} />} />
          <Route path='/redux-counter' element={<ReduxCounterPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
