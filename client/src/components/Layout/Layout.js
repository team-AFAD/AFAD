import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import React from "react"
import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;