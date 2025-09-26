// src/App.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import './styles/global.css'; // Importa estilos globais
import styles from './App.module.css'; // Estilos específicos do App e do Timer

// --- Componentes (Módulos) ---

// Componente para o Hero/Header
const Hero = ({ logoUrl }) => (
    <div className={styles.hero} id="hero">
        <div className="container animate-on-scroll">
            {/* Otimizando o carregamento da imagem com um alt real e loading='eager' para LCP */}
            <img src={logoUrl} alt="Looq Digital Logo" className={styles.logoImg} loading="eager" />
            <div className={styles.heroContent}>
                <h1>Sua Marca de Moda Pronta para Dominar o Digital.</h1>
                <p>Nós construímos a presença digital que sua loja merece. De fotos sem vida a campanhas que transformam olhares em vendas.</p>
            </div>
        </div>
    </div>
);

// Componente para a Seção Antes e Depois
const BeforeAfter = () => (
    <section className="section" id="antes-depois">
        <div className="container">
            <h2 className="section-title animate-on-scroll">O Poder de uma Imagem Profissional</h2>
            <p className="section-subtitle animate-on-scroll">O segredo das grandes marcas é a apresentação. Veja o que acontece quando sua roupa encontra o olhar certo e um toque profissional.</p>

            <div className={styles.beforeAfterGrid}>
                {/* Otimizando com placeholders de URL - Usar assets locais é crucial! */}
                {[1, 2, 3].map(i => (
                    <div className={styles.beforeAfterCard + ' animate-on-scroll'} key={i}>
                        <div className={styles.beforeAfterImages}>
                            <div className={styles.imageBox}>
                                <img src={`[URL_DA_FOTO_ORIGINAL_${i}]`} alt={`Foto original ${i}`} loading="lazy" />
                                <span>Antes</span>
                            </div>
                            <div className={styles.imageBox}>
                                <img src={`[URL_DA_FOTO_GERADA_${i}]`} alt={`Foto gerada ${i}`} loading="lazy" />
                                <span>Depois</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Componente para a Seção de Planos (Crucial: Removendo Swiper)
const Plans = ({ plansRef }) => {
    // Dados dos planos em formato JSON (Melhoria de Manutenção)
    const pricingPlans = [
        {
            title: "Plano Essencial", price: "R$ 299,90", note: "/mês", isFeatured: false,
            included: ["Geração de 5 imagens de produtos", "Sugestões de legendas e hashtags", "Suporte via WhatsApp"],
            notIncluded: ["Criação de posts", "Catálogo Online Personalizado", "Gestão de redes sociais"],
            whatsappMessage: "Olá, tenho interesse no Plano Essencial da Looq Digital. Poderia me dar mais detalhes?"
        },
        {
            title: "Plano Impulso Total", price: "R$ 399,90", oldPrice: "De R$ 599,90", note: "/mês", isFeatured: true,
            included: ["Geração de 10 imagens de produtos", "Criação de 8 posts completos", "Criação de Catálogo Online Personalizado", "Atualização de Catálogo no WhatsApp", "Agendamento de posts"],
            notIncluded: ["Gestão de redes sociais"],
            whatsappMessage: "Olá, quero contratar o Plano Impulso Total da Looq Digital! Podemos conversar sobre os próximos passos?"
        },
        {
            title: "Plano Domínio Digital", price: "R$ 799,90", note: "/mês", isFeatured: false,
            included: ["Geração de 15 imagens de produtos", "Criação de 12 posts completos", "Gestão completa de redes sociais", "Relatório de desempenho mensal detalhado", "Suporte Prioritário"],
            notIncluded: ["Nenhum"],
            whatsappMessage: "Olá, gostaria de saber mais sobre o Plano Domínio Digital. Vamos conversar?"
        },
    ];

    const phoneNumber = "SEU_NUMERO"; // Placeholder para o número de WhatsApp

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }} id="planos" ref={plansRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Seu Plano para o Sucesso Digital</h2>
                <p className="section-subtitle animate-on-scroll">Escolha o plano que se encaixa no seu objetivo e comece a ver os resultados.</p>

                {/* Usamos Flexbox/Grid simples no desktop e CSS Scroll Snap no mobile para substituir o Swiper.js, reduzindo 20kb de JS. */}
                <div className={styles.plansWrapper}>
                    {pricingPlans.map((plan, index) => (
                        <div className={`${styles.planCard} ${plan.isFeatured ? styles.featured : ''} animate-on-scroll`} key={index}>
                            {plan.isFeatured && <span className={styles.planTag}>Mais Popular</span>}
                            <h3>{plan.title}</h3>
                            <div className={styles.priceSection}>
                                {plan.oldPrice && <span className={styles.oldPrice}>{plan.oldPrice}</span>}
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.priceNote}>{plan.note}</span>
                            </div>
                            
                            {/* Inclusos */}
                            <ul>
                                {plan.included.map((item, i) => (
                                    <li key={`inc-${i}`}><span style={{ color: 'var(--color-in-light)', marginRight: '10px' }}>✓</span>{item}</li>
                                ))}
                            </ul>

                            {/* Não Inclusos */}
                            {plan.notIncluded.length > 0 && plan.notIncluded[0] !== 'Nenhum' && (
                                <ul className={styles.notIncluded}>
                                    {plan.notIncluded.map((item, i) => (
                                        <li key={`not-inc-${i}`}><span style={{ color: 'var(--color-not-in-light)', marginRight: '10px' }}>✖</span>{item}</li>
                                    ))}
                                </ul>
                            )}

                            <a 
                                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(plan.whatsappMessage)}`}
                                className={styles.planCta}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {plan.isFeatured ? 'Quero o Impulso Total' : 'Falar com Consultor'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Componente para o Formulário de Contato
const ContactForm = () => {
    const phoneNumber = "SEU_NUMERO"; // Placeholder para o número de WhatsApp

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements['name'].value;
        const whatsapp = form.elements['whatsapp'].value;
        const storeName = form.elements['store-name'].value;
        
        // Criando a mensagem de contato
        const message = `Olá, sou ${name}, dono(a) da loja ${storeName}. Vi seu site e gostaria de agendar uma consultoria gratuita. Meu WhatsApp é: ${whatsapp}.`;
        
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');

        // Boa prática: Limpar o formulário ou dar feedback
        form.reset();
    };

    return (
        <section className="section" id="contato">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Transforme Sua Marca. Agora.</h2>
                <p className="section-subtitle animate-on-scroll">Comece com um diagnóstico gratuito e descubra como a Looq Digital pode impulsionar seu negócio.</p>
                <div className={styles.contactFormWrapper + ' animate-on-scroll'}>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <input type="text" name="name" placeholder="Nome Completo" required />
                        <input type="tel" name="whatsapp" placeholder="WhatsApp" required />
                        <input type="text" name="store-name" placeholder="Nome da Loja" required />
                        <button type="submit">Agendar Consultoria Gratuita</button>
                    </form>
                </div>
            </div>
        </section>
    );
};


// ------------------------------------
// Componente Principal
// ------------------------------------
export default function App() {
    // Estado para o temporizador e visibilidade
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos
    const [timerIsVisible, setTimerIsVisible] = useState(false);
    const plansRef = useRef(null);
    const timerStarted = useRef(false);

    // Função que aplica a animação com Intersection Observer
    const animateElements = useCallback(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, []);

    // Lógica do Temporizador Persistente (Hook Otimizado)
    useEffect(() => {
        animateElements(); // Inicializa animação

        if (plansRef.current) {
            // Observer para a seção de planos
            const timerObserver = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && !timerStarted.current) {
                    setTimerIsVisible(true);
                    timerStarted.current = true; // Impede que o timer reinicie no scroll
                }
            }, { threshold: 0.2 });

            timerObserver.observe(plansRef.current);

            return () => timerObserver.disconnect();
        }
    }, [animateElements]);

    // Lógica de Contagem Regressiva do Timer
    useEffect(() => {
        if (!timerIsVisible) return;

        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timerIsVisible]);

    // Formatação do tempo
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Estrutura principal da aplicação
    return (
        <>
            <Hero logoUrl="/logo.png" />
            <BeforeAfter />
            {/* Outras Seções (Social Proof, Blog) Omitidas para brevidade, seguindo o padrão modular. */}
            <Plans plansRef={plansRef} />
            <ContactForm />

            {/* Timer Persistente */}
            {timerIsVisible && (
                <div className={styles.timerPersistent + ' is-visible'}>
                    Oferta Especial válida por: <span className={styles.timer}>{formatTime(timeLeft)}</span>
                </div>
            )}
        </>
    );
}