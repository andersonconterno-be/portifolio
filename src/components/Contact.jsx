function Contact() {
    return (

        <section className="contact" id="contact">
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
        </section>

    );

}

export default Contact