import { BrowserRouter as Router, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { PublicRoute } from "./Routes";
import Home from "./containers/home";
import Kanemiverse from "./containers/kanemiverse";
import Pathway from "./containers/pathway";
import Team from "./containers/team";
import FAQ from "./containers/faq";
import Mint from "./containers/mint";
import Decree from "./containers/decree";
import Ourstory from "./containers/ourstory";
import HomeContent from "./containers/home/content";
import useEagerConnect from "hooks/useEagerConnect";
import "react-notifications/lib/notifications.css";
import Coinomics from "containers/coinomics";
import Nfts from "containers/nfts";

function App() {
  useEagerConnect();

  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} pageName="home-page" />
        <PublicRoute
          path="/homecontent"
          component={HomeContent}
          colorTheme="dark"
          pageName="homecontent-page"
        />
        <PublicRoute
          path="/erc-404"
          component={Kanemiverse}
          pageName="erc-404-page"
        />
        <PublicRoute
          path="/pathway"
          component={Pathway}
          pageName="pathway-page"
        />
        <PublicRoute path="/team" component={Team} pageName="team-page" />
        <PublicRoute path="/faq" component={FAQ} pageName="faq-page" />
        <PublicRoute
          path="/mint"
          component={Mint}
          colorTheme="dark"
          pageName="mint-page"
        />
        <PublicRoute path="/decree" component={Decree} pageName="decree-page" />
        <PublicRoute
          path="/ourstory"
          component={Ourstory}
          pageName="ourstory-page"
        />
        <PublicRoute
          path="/coinomics"
          component={Coinomics}
          pageName="coinomics-page"
        />
        <PublicRoute
          path="/nfts"
          colorTheme="secondary"
          component={Nfts}
          pageName="nfts-page"
        />
        <PublicRoute path="*">
          <p>Page not found</p>
        </PublicRoute>
      </Switch>
      <NotificationContainer />
    </Router>
  );
}

export default App;
