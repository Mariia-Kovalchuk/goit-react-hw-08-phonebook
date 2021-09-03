// import Phonebook from './components/Phonebook';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';

// function App() {
//   return (
//     <Phonebook>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Phonebook>
//   );
// }

import { lazy, Suspense, } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Loader from "react-loader-spinner";
// import styles from './views/HomeView/HomeView.module.css';
import AppBar from './components/AppBar/AppBar';



const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-view" */));
// const NotFoundView =lazy(()=>import('./views/NotFoundView' /* webpackChunkName: "error404" */))


function App() {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<Loader  type="Circles" color="#3f51b5" height={100} width={100} timeout={5000} />}>
        <Switch>
          <Route path="/register" exact>
            <RegisterView />
          </Route>

          <Route path='/login' exact>
            <LoginView />
          </Route>

          <Route path='/contacts' exact>
            <ContactsView />
          </Route>

          {/* <Route >
            <NotFoundView />
          </Route>
 */}
        </Switch>



      </Suspense>
      

    </div>
  );
}

export default App;
