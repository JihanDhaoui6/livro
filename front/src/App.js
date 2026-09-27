import "./App.css";


import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  LivresPage,
  BestSelling,
  AboutPage,
  FAQPage,
  LivreDetailsPage,
  CheckoutPage,
  PaymentPage,
  ProfilePage,
  LibraryCreatePage,
  SellerActivationPage,
  LibraryLoginPage,
  OrderSuccessPage,
  UserInbox,
  OrderDetailsPage,
  TrackOrderPage,
 
} from "./routes/Routes.js";

import {
  LibrarieDashboardPage,
 LibrarieDashboardPages,
  LibrarieCreatePost,
  LibrarieAllBooks,
  LibrarieCreateEvents,
  LibrarieAllEvents,
  LibrarieAllCoupouns,
  LibrariePreviewPage,
  LibrarieInboxPage,
  MessagesPage,
  DashboardMain ,
  LibrarieAllOrdersPage,
  LibrarieOrderDetails ,

 
} from "./routes/LibrarieRoutes";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";

import ProtectedRoute from "./routes/ProtectedRoute.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute.js";
import { LibrarieHomePage } from "./librarieRoutes.js";
import { getAllBooks } from "./redux/actions/book.js";
import ServicesPage from "./pages/ServicesPage.jsx";
import { getAllEvents } from "./redux/actions/event.js";
import Orders from "./components/Profile/Orders.jsx"
import Password  from './components/Profile/Password.jsx'
import Adresse from './components/Profile/Adresse.jsx'
// import OrderSuccessPage from "./pages/OrderSuccessPage.jsx";
const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllBooks());
    Store.dispatch(getAllEvents());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/Activation/:activation_token"
          element={<ActivationPage />}
        ></Route>
        <Route
          path="/seller/Activation/:activation_token"
          element={<SellerActivationPage />}
        ></Route>
        <Route path="/livres" element={<LivresPage />}></Route>
        <Route path="/Service" element={<BestSelling />}></Route>
        <Route path="/promotion" element={<AboutPage />}></Route>
        <Route path="/faq" element={<FAQPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/livre/:id" element={<LivreDetailsPage />}></Route>

        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        ></Route>

<Route
          path="/update-user-password"
          element={
            <ProtectedRoute>
              <Password/>
            </ProtectedRoute>
          }
        ></Route>
     

        <Route
          path="/address"
          element={
            <ProtectedRoute>
              <Adresse/>
            </ProtectedRoute>
          }
        ></Route>

          <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders/>
            </ProtectedRoute>
          }
        ></Route>

<Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        ></Route>


<Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        ></Route>

<Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        ></Route>


        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          }
        />

        {/* <Route path="/payment" element={<PaymentPage />} /> */}

        <Route path="/librarie/preview/:id" element={<LibrariePreviewPage />} />
        <Route path="/librarie-create" element={<LibraryCreatePage />}></Route>
        <Route path="/librarie-login" element={<LibraryLoginPage />}></Route>
        <Route
          path="/librarie/:id"
          element={
            <SellerProtectedRoute>
              <LibrarieHomePage />
            </SellerProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <LibrarieDashboardPage />
            </SellerProtectedRoute>
          }
        ></Route>



<Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <DashboardMain />
            </SellerProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard-create-post"
          element={
            <SellerProtectedRoute>
              <LibrarieCreatePost />
            </SellerProtectedRoute>
          }
        ></Route>

        <Route
          path="/dashboard-books"
          element={
            <SellerProtectedRoute>
              <LibrarieAllBooks />
            </SellerProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <LibrarieCreateEvents />
            </SellerProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <LibrarieAllEvents />
            </SellerProtectedRoute>
          }
        ></Route>


<Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <MessagesPage />
            </SellerProtectedRoute>
          }
        ></Route>

<Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRoute>
              <LibrarieAllOrdersPage />
            </SellerProtectedRoute>
          }
        ></Route>


<Route
          path="/order/:id"
          element={
            <SellerProtectedRoute>
              <LibrarieOrderDetails />
            </SellerProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <LibrarieAllCoupouns />
            </SellerProtectedRoute>
          }
        ></Route>

        <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
              <LibrarieInboxPage />
            </SellerProtectedRoute>
          }
        ></Route>
        <Route path="/order/success" element={<OrderSuccessPage />}></Route>
        {/* <Route path="/" element={<TestPage />}></Route> */}
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;
