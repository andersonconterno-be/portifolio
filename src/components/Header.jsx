function Header() {
    return (
        <header className="header">
            <a href="#home" className="logo">Anderson
            <span>Conterno</span></a>
            
            <i className="bx bx-menu" id="menu-icon"></i>

            <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#education">Formação</a>
            <a href="#services">Serviços</a>
            <a href="#footer">Contato</a>
            </nav>
        </header>
    );
}

export default Header;