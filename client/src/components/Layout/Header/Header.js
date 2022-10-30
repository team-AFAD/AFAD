import React, { useEffect, useState,useContext } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import "../../../styles/index.scss"; // header csss
import { AuthContext } from "../../../context/AuthContext";
import { logout } from "../../../apiCalls"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const {user, dispatch} = useContext(AuthContext);
    const history = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    const LogOut = async () => {
        logout(dispatch);
        history("/");
    }

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/page-cta");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    AFAD
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/post" onClick={menuToggleHandler}>
                                co-buying
                            </Link>
                        </li>
                        {
                            user?
                            (
                                <li>
                                    <Link to="/mypage" onClick={menuToggleHandler}>
                                        My Page
                                    </Link>
                                </li>                               
                            )
                            :
                            (

                                <li>
                                    <Link to="/register" onClick={menuToggleHandler}>
                                        Sign up
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    {
                        user?
                        (
                            <>
                                <h2>{user.nickname}님</h2>
                                <button onClick={LogOut}>로그아웃</button>
                            </>
                        )
                        :
                        (
                            <Link to="login">
                                <button onClick={ctaClickHandler}>Sign in</button>
                            </Link>
                        )
                    }

                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
