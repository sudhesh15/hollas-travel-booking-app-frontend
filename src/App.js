import './App.css';
import {Route,Routes} from "react-router-dom";
import Layout from './components/Layout';
import IndexPage from './components/Pages/IndexPage';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './components/Pages/CreatePost';
import TrekDetailsPage from "./components/Pages/TrekDetailsPage.js";
import BookTrekPage from './components/Pages/BookTrekPage';
import HomePage from './components/Pages/HomePage';
import DisplayTreks from './components/Pages/DisplayTreks';
import ViewTreksPage from './components/Pages/ViewTreksPage';
import ViewParticipantsPage from './components/Pages/ViewParticipantsPage';
import EditTrek from './components/Pages/EditTrek';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/trekDetails/:id" element={<TrekDetailsPage />} />
          <Route path="/bookTrek/:id" element={<BookTrekPage />} />
          <Route path="/getAllTreks" element={<DisplayTreks />} />
          <Route path="/viewAllTreks" element={<ViewTreksPage />} />
          <Route path="/viewAllParticipants/:trekName" element={<ViewParticipantsPage />} />
          <Route path="/editTrek/:id" element={<EditTrek />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
