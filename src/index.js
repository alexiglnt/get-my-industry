import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React Router
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

// Components
import App from "./components/App";
import InfoPost from './components/InfoPost';
import PageUser from './components/PageUser';
import Registration from './components/Elements/Registration';

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "InfoPost",
    element: <InfoPost />,
  },
  {
    path: "Login",
    element: <PageUser />,
  },
  {
    path: "Registration",
    element: <Registration />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
  

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
