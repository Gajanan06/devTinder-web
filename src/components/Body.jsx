import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";


const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if (userData) return;
        try {
            const res = await axios.get(`${BASE_URL}/profile/view`, {
                withCredentials: true,
            });
            dispatch(addUser(res.data));
            console.log(res.data);
        } catch (err) {
            if (err.response?.status === 401) {
                navigate("/login");
            }
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
    );
}

export default Body;