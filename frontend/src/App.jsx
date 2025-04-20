import { useSelector } from 'react-redux'
import './App.scss'
import Header from '@Containers/Header';
import Main from '@Pages/_Main';
import Footer from '@Containers/Footer';
import "@Sass/global.scss"
import Dashboard_Page from '@Pages/Dashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import ROUTES from '@Constants/Routes';
import Events_Page from '@Pages/EventsList';
import { Flip, ToastContainer } from 'react-toastify';

function App() {

  const location = useLocation()

  return (
    <>
      <Header/>
      <Main>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard_Page/>}/>
          <Route path={ROUTES.EVENTS} element={<Events_Page/>}/>
        </Routes>
      </Main>
      <Footer/>
      <ToastContainer
        toastStyle={{width:"fit-content", paddingLeft:"2rem", paddingRight:"2rem", backgroundColor:"rgb(52, 3, 27)", top:"5rem"}}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={true}
        pauseOnFocusLoss
        draggable
        limit={3}
        pauseOnHover
        theme="dark"
        closeButton={false}
        transition={Flip}
      />
    </>
  )
}

export default App
