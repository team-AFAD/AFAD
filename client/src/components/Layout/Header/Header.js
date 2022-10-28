const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };
    return(
        <>
            <styledHeader>
                <div className="nav_logo">
                    <Link to={"/"} className="nav-logo-link">
                        AFAD
                    </Link>
                </div>
                <NavMenu isToggleOpen={isToggleOpen}>
                    
                </NavMenu>
            </styledHeader>
        </>
    )
}

export default Header
