import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="header">
        <a href="#home" className="logo">Anderson
        <span>Conterno</span></a>
        
        <i className="bx bx-menu" id="menu-icon"></i>

    <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Formação</a>
        <a href="#services">Serviços</a>
        {/* <a href="#contact">Contato</a> */}

    </nav>
    </header>

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

    <section className="education" id="education">
        <h2 className="heading">Formação</h2>
        <div className="timeline-items">
        <div className="timeline-item">
            <div className="timeline-dot"></div>
                
                <div className="timeline-date">2021</div>
                
                <div className="timeline-content">
                    <h3>Ensino Médio</h3>
                    <p>Formado no Colégio Adventista de Cachoeirinha, aluno fidelidade, formado sem recuperção.</p>
                </div>

            
        </div>

        <div className="timeline-item">
            <div className="timeline-dot"></div>
                
                <div className="timeline-date">2022</div>
                
                <div className="timeline-content">
                    <h3>Curso Profissionalizante</h3>
                    <p>Curso de desenvolvimento WEB na escola OneBitCode, documentado o progresso e desenvolvimento de projetos práticos, focados no mercado de trabalho.</p>
                </div>
                
            
        </div>

        <div className="timeline-item">
            <div className="timeline-dot"></div>
                
                <div className="timeline-date">2025</div>
                
                <div className="timeline-content">
                    <h3>Ensino Superior</h3>
                    <p>Início dos estudos na Faculdade Adventista do Paraná, curso de Redes, afim de aprofundar os conhecimentos para ser um profisioanl completo.</p>
                </div>
                
            
        </div>
        </div>
    </section>

    <section className="service" id="services">
        <h2 className="heading">Serviços</h2>

        <div className="services-container">
            <div className="service-box">
                <div className="service-info">
                    <h4>UI Design</h4>
                    <p>transformo uma ideia funcional em uma interface visualmente agradável, fácil de usar e que comunique bem com o usuário, focado na aparência e na interação visual do sistema.</p>
                </div>
            </div>
            <div className="service-box">
                <div className="service-info">
                    <h4>Desenvolvimento WEB</h4>
                    <p>Construo as "engrenagens" e a "fachada" de sites e sistemas web, garantindo que funcionem bem, sejam rápidos, seguros e atendam às necessidades dos usuários.</p>
                </div>
            </div>
            <div className="service-box">
                <div className="service-info">
                    <h4>QA Testing</h4>
                    <p>Garanto a qualidade do sistema, com o papel de encontrar falhas antes dos usuários, garantindo que o software seja confiável, funcional e pronto para uso.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <section className="contact" id="contact">
        <h2 className="heading">Entre em Contato <span>Comigo</span></h2>

            <form action="">
                <div className="input-group">
                    <div className="input-box">
                        <input type="text" placeholder="Nome Completo"/>
                        <input type="email" placeholder="Email"/> 
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder="Telefone"/>
                        <input type="text" placeholder="Assunto"/>
                    </div>
                </div>

                <div className="input-group-2">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                    <input type="submit" value="Send Message" className="btn"/>
                </div>
            </form>
    </section> */}

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
    
    <script src="/script.js"></script>

    </>
  )
}

export default App
