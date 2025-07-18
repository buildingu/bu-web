/**
 * Building-U Web (front-end)
 *
 * Author: David Bishop
 * Contributors: David Bishop
 *
 * Description:
 * ...
 */

import { Navigate, Outlet } from "react-router-dom";

import HistoryProvider from "./utils/History";

import { SigninSignup, Signin, Signup } from "./pages/signinSignup";
import { Home } from "./pages/home";
import { BlogAndBeyond } from "./pages/blogAndBeyond";
import { Contribute } from "./pages/contribute";
import { LetsTalk } from "./pages/letsTalk";
import { Resources } from "./pages/resources";
import { S4YT } from "./pages/s4yt";
import { Error404, Error500 } from "./pages/errors";

import { Blog as AdminBlog } from "./adminPanel/pages/blog";

import "./index.css";
import "./adminPanel/index.css";

export const routes = [
  {
    path: "/",
    element: (
      <>
        <HistoryProvider />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        path: "home",
        element: <Home />
      },
      {
        path: "signin-signup",
        element: <SigninSignup />
      },
      {
        // TODO: We should make a redirect if they go to this page on desktop when we figure what the exact breakpoint would be for this page (All pages should break around the same px (e.g. 500px, but might be too small for some pages)).
        path: "signin", // Mobile
        element: <Signin />
      },
      {
        path: "signup", // Mobile
        element: <Signup />
      },
      {
        path: "blog",
        element: <BlogAndBeyond />
      },
      {
        path: "contribute",
        element: <Contribute />
      },
      {
        path: "lets-talk",
        element: <LetsTalk />
      },
      {
        path: "resources",
        element: <Resources />
      },
      {
        path: "s4yt",
        element: <S4YT />
      },
      // {
      //   path: "support",
      //   element: <Support />
      // },
      {
        path: "error-404",
        element: <Error404 />
      },
      {
        path: "error-500",
        element: <Error500 />
      },
      {
        ...(typeof window !== "undefined" && {
          path: "*",
          element: <Navigate to="/error-404" replace />
        })
      },

      {
        path: "admin",
        children: [
          {
            path: "blog",
            element: <AdminBlog />
          }
        ]
      }
    ]
  }
];
