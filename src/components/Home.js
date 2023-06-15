import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHome } from "../store/reducers";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome());
    },[dispatch])
    return (
        <div className="home">
            <div className="icon">
                <i className="fa-regular fa-comments"></i>
                <h4>Select a Chat To Continue.</h4>
            </div>
        </div>
    )
}


export default Home;