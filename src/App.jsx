import { Navbar, Footer } from './Components';
import { Route, Switch } from 'react-router-dom'
import { Home, Login } from './Pages'
import { links } from './Util/const'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links.filter((link) => link.text != "Home").map((link) => {
          const { id, url, page } = link;
          return(
            <Route key={id} path={url}>
              {page}
            </Route>
          )
        })}
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
