function Footer(){
    return (
        <footer className="footer">
        <div className="social">
            <a href="https://www.linkedin.com/in/anderson-conterno-890754269/"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/andersonconterno-be"><i className='bx bxl-github' ></i></a>
            <a href="https://www.instagram.com/beconterno/"><i className='bx bxl-instagram-alt' ></i></a>
            <a href="https://x.com/"><i className='bx bxl-twitter' ></i></a>
        </div>

        <ul className="list">
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Sobre Mim</a>
            </li>
            <li>
                <a href="#">Serviços</a>
            </li>
            <li>
                <a href="#">Contato</a>
            </li>
        </ul>

        <p className="copyright">
            &copy; Anderson Conterno | Todos os Direitos Reservados
        </p>
        </footer>
    );

}

export default Footer