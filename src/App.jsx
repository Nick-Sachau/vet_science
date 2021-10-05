import { Navbar, Footer, Login } from './Components';
import { Route, Switch } from 'react-router-dom'
import { Home } from './Pages'
import { links } from './Util/const'
import { useGlobalContext } from './Util/context';

function App() {
  const { login, signUp } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links.filter((link) => link.text !== "Home").map((link) => {
          const { id, url, page } = link;
          return(
            <Route key={id} path={url}>
              {page}
            </Route>
          )
        })}
      </Switch>
      {login && <Login type='login'/>}
      {/* {signUp && <Login type='signup'/>} */}
      {/* <Login type="login"/> */}
      <Footer />
    </>
  );
}

export default App;
