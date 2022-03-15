/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Standards from "layouts/standards";
import Prestige from "layouts/prestige";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import MKTypography from "@mui/material/Typography";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    key: "organization",
    title: "Organizational tool",
  },
  {
    type: "collapse",
    name: "Finance",
    key: "finance",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-piggy-bank" />
      </MKTypography>
    ),
    route: "/org/finance",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Domains",
    key: "domain",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-globe" />
      </MKTypography>
    ),
    route: "/org/domains",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Polling",
    key: "polling",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-check-to-slot" />
      </MKTypography>
    ),
    route: "/org/polls",
    component: <Billing />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    key: "membership",
    title: "Membership",
  },
  {
    type: "collapse",
    name: "Members",
    key: "members",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-image-portrait" />
      </MKTypography>
    ),
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Standards",
    key: "stadards",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-chalkboard" />
      </MKTypography>
    ),
    route: "/standards",
    component: <Standards />,
  },
  {
    type: "collapse",
    name: "Prestige",
    key: "prestige",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-user-graduate" />
      </MKTypography>
    ),
    route: "/prestige",
    component: <Prestige />,
  },
  {
    type: "collapse",
    name: "Investigation",
    key: "behavior",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-handshake-angle" />
      </MKTypography>
    ),
    route: "/org/investigation",
    component: <Billing />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    key: "Narration Tool",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-user-graduate" />
      </MKTypography>
    ),
    route: "/narration",
    title: "Narration Tool",
  },
  {
    type: "collapse",
    name: "Chronicles",
    key: "chronicles",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-hand-lizard" />
      </MKTypography>
    ),
    route: "/narration/chronicles",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Venues",
    key: "venues",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-hand-spock" />
      </MKTypography>
    ),
    route: "/narration/chronicles/venues",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Characters",
    key: "characters",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-hand-scissors" />
      </MKTypography>
    ),
    route: "/narration/chronicles/venues/characters",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Approvals",
    key: "approvals",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-hand-paper" />
      </MKTypography>
    ),
    route: "/narration/chronicles/venues/characters/approvals",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Investigation",
    key: "investigation",
    icon: (
      <MKTypography>
        <i className="fa-solid fa-hand-rock" />
      </MKTypography>
    ),
    route: "/chronicles/investigation",
    component: <Notifications />,
  },
  {
    type: "divider",
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="medium">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
