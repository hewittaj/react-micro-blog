import React from "react";

function Home() {
    const handleClick = () => {
        console.log("hello")
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home