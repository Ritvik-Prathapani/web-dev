import React  from "react";

function Body() {
    return (
        <main style = {styles.main}>
            <h2>Welcome to my Website</h2>
            <p>This is a simple React application with a structured layout.</p>
        </main>
    );
}

const styles = {
    main: {
        padding: "20px",
        textAlign: "center"
    }
}

export default Body;