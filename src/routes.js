import React from "react";
const Users = React.lazy(() => import("./views/user/Users"));
const EditUser = React.lazy(() => import("./views/user/users/EditUser"));
const Support = React.lazy(() => import("./views/support/Support"));
const Blog = React.lazy(() => import("./views/blog/Blog"));
const EditBlog = React.lazy(() => import("./views/blog/EditBlog"));
const EditBlogCategory = React.lazy(() =>
  import("./views/blog/EditBlogCategory")
);
const EditUserRole = React.lazy(() =>
  import("./views/user/userrole/EditUserRole")
);
const Datadashboard = React.lazy(() =>
  import("./views/datamanagement/Datadashboard")
);
const EditCountry = React.lazy(() =>
  import("./views/datamanagement/country/EditCountry")
);
const Courses = React.lazy(() => import("./views/coursemanagement/Courses"));
const EditCourse = React.lazy(() =>
  import("./views/coursemanagement/course/EditCourse")
);
const EditStream = React.lazy(() =>
  import("./views/coursemanagement/stream/EditStream")
);
const EditCourseLevel = React.lazy(() =>
  import("./views/coursemanagement/courselevel/EditCourseLevel")
);
const EditSpecialization = React.lazy(() =>
  import("./views/coursemanagement/specialization/EditSpecialization")
);
const DataManagement = React.lazy(() =>
  import("./views/datamanagement/DataManagement")
);
const EditImportFile = React.lazy(() =>
  import("./views/datamanagement/importfile/EditImportFile")
);
const EditUniversity = React.lazy(() =>
  import("./views/datamanagement/university/EditUniversity")
);
const EditUniversityCourse = React.lazy(() =>
  import("./views/datamanagement/universitycourse/EditUniversityCourse")
);
const ContentManagement = React.lazy(() =>
  import("./views/contentmanagement/ContentManagement")
);
const EditArticle = React.lazy(() =>
  import("./views/contentmanagement/article/EditArticle")
);
const EditLocation = React.lazy(() =>
  import("./views/contentmanagement/location/EditLocation")
);
const ContentDashboard = React.lazy(() =>
  import("./views/contentmanagement/ContentDashboard")
);
const EditPopup = React.lazy(() =>
  import("./views/contentmanagement/addpopup/EditPopup")
);
const EditFaq = React.lazy(() =>
  import("./views/contentmanagement/faq/EditFaq")
);
const EditPageMeta = React.lazy(() =>
  import("./views/contentmanagement/static-page-meta/EditPageMeta")
);
const CourseManagement = React.lazy(() =>
  import("./views/coursemanagement/CourseManagement")
);
const Templates = React.lazy(() => import("./views/templates/Templates"));
const EditSmsTemplate = React.lazy(() =>
  import("./views/templates/EditSmsTemplate")
);
const EditWhatsAppTemp = React.lazy(() =>
  import("./views/templates/EditWhatsAppTemp")
);
const EditEmailTemplate = React.lazy(() =>
  import("./views/templates/EditEmailTemplate")
);
const EditWebsiteTemplate = React.lazy(() =>
  import("./views/templates/EditWebsiteTemplate")
);
const Packages = React.lazy(() => import("./views/packages/Packages"));
const EditPackages = React.lazy(() => import("./views/packages/EditPackages"));
const LeadDashboard = React.lazy(() =>
  import("./views/leadmanagement/LeadDashboard")
);
const LeadManagement = React.lazy(() =>
  import("./views/leadmanagement/LeadManagement")
);
const EditLead = React.lazy(() => import("./views/leadmanagement/EditLead"));
const ImportFile = React.lazy(() =>
  import("./views/leadmanagement/ImportFile")
);
const Students = React.lazy(() => import("./views/students/Students"));
const EditStundent = React.lazy(() => import("./views/students/EditStundent"));
const AppliedDashboard = React.lazy(() =>
  import("./views/studentapplied/AppliedDashboard")
);
const AppliedStudent = React.lazy(() =>
  import("./views/studentapplied/AppliedStudent")
);
const ViewApplied = React.lazy(() =>
  import("./views/studentapplied/ViewApplied")
);
const EditStudent = React.lazy(() =>
  import("./views/studentapplied/EditStudent")
);
const Reports = React.lazy(() => import("./views/reports/Reports"));
const Request = React.lazy(() => import("./views/request/Request"));
const Counsellor = React.lazy(() => import("./views/counsellor/Counsellor"));
const EditCounsellor = React.lazy(() =>
  import("./views/counsellor/EditCounsellor")
);
const Coaches = React.lazy(() => import("./views/coaches/Coaches"));
const EditCoaches = React.lazy(() => import("./views/coaches/EditCoaches"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Callingdashboard = React.lazy(() =>
  import("./views/calling/Callingdashboard")
);
const Discussion = React.lazy(() => import("./views/discussion/Discussion"));
const EditDiscussion = React.lazy(() =>
  import("./views/discussion/EditDiscussion")
);
const EditCategory = React.lazy(() =>
  import("./views/discussion/EditCategory")
);
const Calling = React.lazy(() => import("./views/calling/Calling"));
const EditClient = React.lazy(() => import("./views/calling/EditClient"));
const Importfile = React.lazy(() => import("./views/calling/Importfile"));
const EditCity = React.lazy(() =>
  import("./views/datamanagement/city/EditCity")
);
const EditState = React.lazy(() =>
  import("./views/datamanagement/state/EditState")
);
const Advertisement = React.lazy(() =>
  import("./views/advertisement/Advertisement")
);
const EditAdvertisement = React.lazy(() =>
  import("./views/advertisement/EditAdvertisement")
);
const Appointments = React.lazy(() =>
  import("./views/appointments/Appointments")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/admin/build/edit-city", name: "Edit City", component: EditCity },
  { path: "/admin/build/edit-state", name: "Edit State", component: EditState },
  { path: "/admin/build/support", name: "Support", component: Support },
  { path: "/admin/build/blog", name: "Blog", component: Blog },
  { path: "/admin/build/edit-blog", name: "Edit Blog", component: EditBlog },
  {
    path: "/admin/build/edit-blog-category",
    name: "Edit Blog Category",
    component: EditBlogCategory,
  },
  {
    path: "/admin/build/student-discussion",
    name: "Discussion",
    component: Discussion,
  },
  {
    path: "/admin/build/edit-discussion",
    name: "Edit Discussion",
    component: EditDiscussion,
  },
  {
    path: "/admin/build/edit-category",
    name: "Edit Category",
    component: EditCategory,
  },
  {
    path: "/admin/build/calling-dashboard",
    name: "Calling",
    component: Callingdashboard,
  },
  { path: "/admin/build/calling", name: "Calling", component: Calling },
  {
    path: "/admin/build/edit-client",
    name: "Edit Student",
    component: EditClient,
  },
  {
    path: "/admin/build/import-client",
    name: "Import Student List",
    component: Importfile,
  },
  { path: "/admin/build/user", name: "User Management", component: Users },
  { path: "/admin/build/edit-user", name: "Edit User", component: EditUser },
  {
    path: "/admin/build/edit-user-role",
    name: "Edit User Role",
    component: EditUserRole,
  },
  {
    path: "/admin/build/counsellor",
    name: "Counsellor List",
    component: Counsellor,
  },
  {
    path: "/admin/build/edit-counsellor",
    name: "Edit Counsellor",
    component: EditCounsellor,
  },
  {
    path: "/admin/build/coaches",
    name: "Coaches",
    component: Coaches,
  },
  {
    path: "/admin/build/edit-coach",
    name: "Edit Coach",
    component: EditCoaches,
  },
  {
    path: "/admin/build/data-management",
    name: "Data Management",
    component: Datadashboard,
  },
  {
    path: "/admin/build/course-management",
    name: "Course Management",
    component: CourseManagement,
  },
  {
    path: "/admin/build/edit-country",
    name: "Edit Country",
    component: EditCountry,
  },
  {
    path: "/admin/build/edit-course",
    name: "Edit Course",
    component: EditCourse,
  },
  {
    path: "/admin/build/location",
    name: "Location List",
    component: Location,
  },
  {
    path: "/admin/build/edit-location",
    name: "Edit Location",
    component: EditLocation,
  },
  {
    path: "/admin/build/edit-stream",
    name: "Edit Stream",
    component: EditStream,
  },
  {
    path: "/admin/build/edit-course-level",
    name: "Edit Course Level",
    component: EditCourseLevel,
  },
  {
    path: "/admin/build/edit-specialization",
    name: "Edit Specialization",
    component: EditSpecialization,
  },
  {
    path: "/admin/build/edit-import-file",
    name: "Edit Imported Files",
    component: EditImportFile,
  },
  {
    path: "/admin/build/edit-university",
    name: "Edit University",
    component: EditUniversity,
  },
  {
    path: "/admin/build/edit-university-course",
    name: "Edit University Course List",
    component: EditUniversityCourse,
  },

  {
    path: "/admin/build/datamanagement",
    name: "Data Management",
    component: DataManagement,
  },
  {
    path: "/admin/build/contentmanagement",
    name: "Content Management",
    component: ContentDashboard,
  },
  {
    path: "/admin/build/content-management",
    name: "Content Management",
    component: ContentManagement,
  },
  {
    path: "/admin/build/edit-article",
    name: "Edit Article",
    component: EditArticle,
  },
  {
    path: "/admin/build/edit-popup",
    name: "Edit Popup",
    component: EditPopup,
  },
  {
    path: "/admin/build/edit-faq",
    name: "Edit FAQ",
    component: EditFaq,
  },
  {
    path: "/admin/build/edit-static-page-meta",
    name: "Edit Static Page Meta",
    component: EditPageMeta,
  },
  {
    path: "/admin/build/courses",
    name: "Course Management",
    component: Courses,
  },
  {
    path: "/admin/build/templates",
    name: "Templates",
    component: Templates,
  },
  {
    path: "/admin/build/edit-sms-template",
    name: "Edit SMS Template",
    component: EditSmsTemplate,
  },
  {
    path: "/admin/build/edit-whatsapp-template",
    name: "Edit WhatsApp Template",
    component: EditWhatsAppTemp,
  },
  {
    path: "/admin/build/edit-email-template",
    name: "Edit Email Template",
    component: EditEmailTemplate,
  },
  {
    path: "/admin/build/edit-website-template",
    name: "Edit Website Template",
    component: EditWebsiteTemplate,
  },
  {
    path: "/admin/build/packages",
    name: "Packages List",
    component: Packages,
  },
  {
    path: "/admin/build/edit-packages",
    name: "Edit Packages",
    component: EditPackages,
  },
  {
    path: "/admin/build/lead-dashboard",
    name: "Lead Management",
    component: LeadDashboard,
  },
  {
    path: "/admin/build/lead-management",
    name: "Lead Management",
    component: LeadManagement,
  },
  {
    path: "/admin/build/edit-lead",
    name: "Edit Lead",
    component: EditLead,
  },
  {
    path: "/admin/build/importfile",
    name: "Import File",
    component: ImportFile,
  },
  {
    path: "/admin/build/request",
    name: "Request",
    component: Request,
  },
  {
    path: "/admin/build/students",
    name: "Students List",
    component: Students,
  },
  {
    path: "/admin/build/edit-student",
    name: "Edit Students",
    component: EditStundent,
  },
  {
    path: "/admin/build/reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/admin/build/student-dashboard",
    name: "Student Dashboard",
    component: AppliedDashboard,
  },
  {
    path: "/admin/build/student-applied",
    name: "Applied Student",
    component: AppliedStudent,
  },
  {
    path: "/admin/build/edit-applied-student",
    name: "Edit Student",
    component: EditStudent,
  },
  {
    path: "/admin/build/view-applicant",
    name: "View Student Details",
    component: ViewApplied,
  },
  {
    path: "/admin/build/advertisement",
    name: "Advertisement Management",
    component: Advertisement,
  },
  {
    path: "/admin/build/edit-advertisement",
    name: "Edit Advertisement",
    component: EditAdvertisement,
  },
  {
    path: "/admin/build/appointments",
    name: "Appointments",
    component: Appointments,
  },
];

export default routes;
