import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout,LoginLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import Errors from "./views/Errors";
import Tables from "./views/Tables";
import ReportStore from "./views/ReportStore.jsx"
import Login from "./views/login/Login";
export default [
  {
    path: "/",
    exact: true,
    layout: LoginLayout,
    component: () => <Login/>
    },
      { path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
   {
    path: "/reports-staore",
    layout: DefaultLayout,
    component: ReportStore
  },
  // {
  //   path: "/user-profile-lite",
  //   layout: DefaultLayout,
  //   component: UserProfileLite
  // },
  // {
  //   path: "/add-new-post",
  //   layout: DefaultLayout,
  //   component: AddNewPost
  // },
  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  //   component: BlogPosts
  // }
];
