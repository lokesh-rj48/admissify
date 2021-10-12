import React from "react";
import "./Style.css";
import "font-awesome/css/font-awesome.min.css";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/admin/build",
    icon: <i class="fa fa-tachometer menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Course Management",
    to: "/admin/build/course-management",
    icon: <i class="fa fa-graduation-cap menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Data Management",
    to: "/admin/build/data-management",
    icon: <i class="fa fa-database menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Content Management",
    to: "/admin/build/contentmanagement",
    icon: <i class="fa fa-file menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Counsellors",
    to: "/admin/build/counsellor",
    icon: <i class="fa fa-user menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Coaches",
    to: "/admin/build/coaches",
    icon: <i class="fa fa-users menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Templates",
    to: "/admin/build/Templates",
    icon: <i class="fa fa-id-card menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Packages",
    to: "/admin/build/packages",
    icon: <i class="fa fa-tasks menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Users",
    to: "/admin/build/students",
    icon: <i class="fa fa-users menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Ads Management",
    to: "/admin/build/advertisement",
    icon: <i class="fa fa-picture-o menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Appointments",
    to: "/admin/build/appointments",
    icon: <i class="fa fa-list-alt menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Calling Management",
    to: "/admin/build/calling-dashboard",
    icon: <i class="fa fa-phone menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Leads",
    to: "/admin/build/lead-dashboard",
    icon: <i class="fa fa-user-plus menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Applicants",
    to: "/admin/build/student-dashboard",
    icon: <i class="fa fa-graduation-cap menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Request",
    to: "/admin/build/request",
    icon: <i class="fa fa-phone menu-icon"></i>,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Discussions",
    to: "/admin/build/student-discussion",
    icon: <i class="fa fa-commenting menu-icon"></i>,
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Reports",
  //   to: "/admin/build/reports",
  //   icon: <i class="fa fa-file-text-o menu-icon"></i>,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Admissify Users",
    to: "/admin/build/user",
    icon: <i class="fa fa-user menu-icon"></i>,
  },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Admin User Management",
  //   route: "/admin/build/datamanagement",
  //   route: "/admin/build/datamanagement",
  //   icon: "cil-user-follow",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Users",
  //       to: "/user",
  //       icon: "cil-user",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "User Role",
  //       to: "/user-role",
  //       icon: "cil-task",
  //     },
  //   ],
  // },
];

export default _nav;
