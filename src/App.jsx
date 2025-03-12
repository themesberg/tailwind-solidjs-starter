import { render } from "solid-js/web";
import { Router, Route, A } from "@solidjs/router";

import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import Carousel from "./pages/Carousel";
import Collapse from "./pages/Collapse";
import SpeedDial from "./pages/SpeedDial";
import Dismiss from "./pages/Dismiss";
import Drawer from "./pages/Drawer";
import Modal from "./pages/Modal";
import Dropdown from "./pages/Dropdown";
import Popover from "./pages/Popover";
import Tabs from "./pages/Tabs";
import Tooltip from "./pages/Tooltip";
import InputCounter from "./pages/InputCounter";
import Datepicker from "./pages/Datepicker";

const App = (props) => (
  <>
    {props.children}
  </>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/accordion" component={Accordion} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/collapse" component={Collapse} />
      <Route path="/speed-dial" component={SpeedDial} />
      <Route path="/dismiss" component={Dismiss} />
      <Route path="/drawer" component={Drawer} />
      <Route path="/modal" component={Modal} />
      <Route path="/dropdown" component={Dropdown} />
      <Route path="/popover" component={Popover} />
      <Route path="/tabs" component={Tabs} />
      <Route path="/tooltip" component={Tooltip} />
      <Route path="/input-counter" component={InputCounter} />
      <Route path="/datepicker" component={Datepicker} />
    </Router>
  ),
  document.getElementById("root")
);

export default App;