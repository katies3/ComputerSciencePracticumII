import Post from "../components/post";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import ShowHide from "../components/showHide";

export default function Home() {
    const [posts, setPosts] = useState("");

    //get Post data from API
    const url = "http://localhost:3080/api/posts";

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => console.log(`Error: ${error}`));
    }, []);

    return (
        <>
            <>
                <NavBar />
                <div className="container justify-contents-center">
                    <ShowHide />
                    <Post posts={posts} />
                </div>
            </>
        </>
    );
}
