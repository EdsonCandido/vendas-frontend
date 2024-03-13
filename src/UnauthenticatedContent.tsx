import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";

const UnauthenticatedContent = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    );
}

export default UnauthenticatedContent;