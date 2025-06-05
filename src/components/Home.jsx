function Home(){
    return (
        <section className="home" id="home">
        <div className="home-content">
            <h1>Olá!, sou <span>Anderson</span></h1>
            <h3 className="text-animation">Eu sou um <span></span></h3>
            <p>Desde meus 16 anos dediquei meus estudos a programação, desenvolvimento web, design e UX/UI. Não há como negar que atualmente uma página na WEB pode transaformar o seu negócio e é por este motivo que sempre me interessei nestes projetos</p>
            
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/anderson-conterno-890754269/"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/andersonconterno-be"><i className='bx bxl-github' ></i></a>
                <a href="https://www.instagram.com/beconterno/"><i className='bx bxl-instagram-alt' ></i></a>
                <a href="https://x.com/"><i className='bx bxl-twitter' ></i></a>
            </div>

            <div className="btn-group">
                <a href="#" className="btn">Contrate</a>
                <a href="#contact" className="btn">Contato</a>
            </div>
        </div>
        <div className="home-img">
            <img src="./homeimg.jpeg" alt="home-img"/>
        </div>
        </section>
    );
}

export default Home;