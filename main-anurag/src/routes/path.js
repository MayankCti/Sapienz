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
import EditProfile from "../pages/EditProfile";
import Categories from "../pages/Categories";
import Experts from "../pages/Experts";
import CreateExpert from "../pages/NewExpert";
import ExpertDetail from "../pages/ExpertDetail";
import EditExpertDetail from "../pages/EditExpertDetail";

export const pageRoutes = {
  dashboard: "/",
  login: "/login",
  forgotPassword: "/forgot",
  addFlashCard: "/add-flashCard",
  allMockTest: "/all-mocktest",
  changePassword: "/change-password",
  editFlashCard: "/edit-flashcard",
  flashCard: "/flashcard",
  newMocktest: "/new-mocktest",
  profile: "/profile",
  editProfile: "/edit-profile",
  studentDetails: "/student-details",
  student: "/student",
  categories: "/categories",
  experts: "/experts",
  createExpert: "/create-experts",
  expertDetail: "/expert-detail",
  editExpertDetail: "/edit-expert-detail",
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
    name: "forgotPassword",
    path: pageRoutes?.forgotPassword,
    element: <ForgetPassword />,
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
    element: <ChangePassword />,
    isPrivate: true,
  },
  {
    name: "editFlashCard",
    path: pageRoutes?.editFlashCard,
    element: <EditFlashCard />,
    isPrivate: true,
  },
  {
    name: "flashCard",
    path: pageRoutes?.flashCard,
    element: <FlashCard />,
    isPrivate: true,
  },
  {
    name: "newMocktest",
    path: pageRoutes?.newMocktest,
    element: <NewMockTest />,
    isPrivate: true,
  },
  {
    name: "profile",
    path: pageRoutes?.profile,
    element: <Profile />,
    isPrivate: true,
  },
  {
    name: "editProfile",
    path: pageRoutes?.editProfile,
    element: <EditProfile />,
    isPrivate: true,
  },
  {
    name: "studentDetails",
    path: pageRoutes?.studentDetails,
    element: <StudentDetails />,
    isPrivate: true,
  },
  {
    name: "student",
    path: pageRoutes?.student,
    element: <Student />,
    isPrivate: true,
  },
  {
    name: "categories",
    path: pageRoutes?.categories,
    element: <Categories />,
    isPrivate: true,
  },
  {
    name: "experts",
    path: pageRoutes?.experts,
    element: <Experts />,
    isPrivate: true,
  },
  {
    name: "createExpert",
    path: pageRoutes?.createExpert,
    element: <CreateExpert />,
    isPrivate: true,
  },
  {
    name: "expertDetail",
    path: pageRoutes?.expertDetail,
    element: <ExpertDetail />,
    isPrivate: true,
  },
  {
    name: "editExpertDetail",
    path: pageRoutes?.editExpertDetail,
    element: <EditExpertDetail />,
    isPrivate: true,
  },
];

export default expertRoutes;
