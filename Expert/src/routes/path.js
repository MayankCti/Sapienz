import Dashboard from "../pages/Dashboard";
import AddFlashCard from "../pages/AddFlashCard";
import AllMockTest from "../pages/AllMockTest";
import ChangePassword from "../pages/ChangePassword";
import EditFlashCard from "../pages/EditFlashCard";
import FlashCard from "../pages/FlashCardList";
import NewMockTest from "../pages/NewMockTest";
import Profile from "../pages/Profile";
import StudentDetails from "../pages/StudentDetails";
import Student from "../pages/Student";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import NewPassword from "../pages/NewPassword";
import Signup from "../pages/Signup";


export const pageRoutes = {
  dashboard: "/expert/",
  login: "/expert/login",
  signup: "/expert/signup",
  forgotPassword: "/expert/forgot",
  newPassword: "/expert/new-password",
  addFlashCard: "/expert/add-flashCard",
  allMockTest: "/expert/all-mocktest",
  changePassword: "/expert/change-password",
  editFlashCard: "/expert/edit-flashcard",
  flashCard: "/expert/flashcard",
  newMocktest : "/expert/new-mocktest",
  profile : "/expert/profile",
  studentDetails : "/expert/student-details",
  student : "/expert/student",
};
const expertRoutes = [
  {
    name: "dashboard",
    path: pageRoutes?.dashboard,
    element: <Dashboard />,
    isPrivate: true,
  },
  {
    name: "login",
    path: pageRoutes?.login,
    element: <Login />,
    isPrivate: false,
  },
  {
    name: "signup",
    path: pageRoutes?.signup,
    element: <Signup />,
    isPrivate: false,
  },
  {
    name: "forgotPassword",
    path: pageRoutes?.forgotPassword,
    element: <ForgetPassword />,
    isPrivate: false,
  },
  {
    name: "newPassword",
    path: pageRoutes?.newPassword,
    element: <NewPassword />,
    isPrivate: false,
  },
  {
    name: "addFlashCard",
    path: pageRoutes?.addFlashCard,
    element: <AddFlashCard />,
    isPrivate: true,
  },
  {
    name: "allMockTest",
    path: pageRoutes?.allMockTest,
    element: <AllMockTest />,
    isPrivate: true,
  },
  {
    name: "changePassword",
    path: pageRoutes?.changePassword,
    element: <ChangePassword/>,
    isPrivate: true,
  },
  {
    name: "editFlashCard",
    path: pageRoutes?.editFlashCard,
    element: <EditFlashCard/>,
    isPrivate: true,
  }, 
    {
    name: "flashCard",
    path: pageRoutes?.flashCard,
    element: <FlashCard/>,
    isPrivate: true,
  }, 
  {
  name: "newMocktest",
  path: pageRoutes?.newMocktest,
  element: <NewMockTest/>,
  isPrivate: true,
},
{
name: "profile",
path: pageRoutes?.profile,
element: <Profile/>,
isPrivate: true,
},
{
name: "studentDetails",
path: pageRoutes?.studentDetails,
element: <StudentDetails/>,
isPrivate: true,
},
{
name: "student",
path: pageRoutes?.student,
element: <Student/>,
isPrivate: true,
},
];

export default expertRoutes;
