import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Notifications from "../views/Notifications/Notifications.jsx";
import Icons from "../views/Icons/Icons.jsx";
import Typography from "../views/Typography/Typography.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Maps from "../views/Maps/Maps.jsx";
import UserPage from "../views/UserPage/UserPage.jsx";
import SliderEditor from '../views/SliderEditor/SliderEditor';
import Products from "../views/Products/Products.jsx";
import PaymentConfrimation from "../views/PaymentConfirmation/PaymentConfirmation.jsx";
import OrderListToDeliver from "../views/OrderListToDeliver/OrderListToDeliver.jsx";

var dashRoutes = [
  {
    path: "/dashboard/index",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/dashboard/products",
    name: "Product",
    icon: "nc-icon nc-atom",
    component: Products
  },
  {
    path: "/dashboard/slider",
    name: "Slider Front",
    icon: "nc-icon nc-layout-11",
    component: SliderEditor
  },
  {
    path: "/dashboard/payment-confirmation",
    name: "Payment Confirmation",
    icon: "nc-icon nc-money-coins",
    component: PaymentConfrimation
  },
  {
    path: "/dashboard/order-to-deliver",
    name: "Order to Deliver",
    icon: "nc-icon nc-box",
    component: OrderListToDeliver
  },
  {
    path: "/dashboard/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons
  },
  // { path: "/dashboard/maps", name: "Maps", icon: "nc-icon nc-pin-3", component: Maps },
  // {
  //   path: "/dashboard/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications
  // },
  // {
  //   path: "/dashboard/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage
  // },
  // {
  //   path: "/dashboard/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList
  // },
  // {
  //   path: "/dashboard/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography
  // },
  // {
  //   pro: true,
  //   path: "/dashboard/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship"
  // },  

  // { 
  //   redirect: true, 
  //   path: "/", 
  //   pathTo: "/dashboard", 
  //   name: "Dashboard" 
  // }
];
export default dashRoutes;
