// src/App.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import './styles/global.css'; // Importa estilos globais
import styles from './App.module.css'; // Estilos específicos do App e do Timer
import Navbar from './components/Navbar'; // ⬅️ IMPORT CORRIGIDO
import SocialProof from './components/SocialProof'; // ⬅️ IMPORT CORRIGIDO
import MethodologySection from './components/MethodologySection'; // ⬅️ NOVO IMPORT

// --- Ícones SVG de Custo Zero ---
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--color-in-light)">
        <path d="M20.285 2l-11.285 11.285-5.285-5.285-1.414 1.414 6.7 6.7 12.7-12.7z"/>
    </svg>
);
const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--color-not-in-light)">
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-1.414-1.414-8.282 8.2-8.2-8.315-1.414 1.414 8.315 8.2-8.209 8.315 1.414 1.414 8.2-8.315 8.315 8.209z"/>
    </svg>
);


// --- Componentes (Módulos) ---

// Componente para o Hero/Header
const Hero = ({ logoUrl }) => (
    <div className={styles.hero} id="hero">
        <div className="container animate-on-scroll">
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
                                <span className={styles.beforeLabel}>ANTES</span>
                            </div>
                            <div className={styles.imageBox}>
                                <img src={`[URL_DA_FOTO_GERADA_${i}]`} alt={`Foto gerada ${i}`} loading="lazy" />
                                <span className={styles.afterLabel}>DEPOIS</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// Componente para a Seção de Planos (Redesign Aplicado)
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

                <div className={styles.plansWrapper}>
                    {pricingPlans.map((plan, index) => (
                        <div className={`${styles.planCardNew} ${plan.isFeatured ? styles.featuredNew : ''} animate-on-scroll`} key={index}>
                            
                            {plan.isFeatured && <span className={styles.planTag}>MAIS POPULAR</span>}

                            <h3 className={styles.planTitleNew}>{plan.title}</h3>
                            
                            <div className={styles.priceSectionNew}>
                                {plan.oldPrice && <span className={styles.oldPrice}>{plan.oldPrice}</span>}
                                <span className={styles.priceNew}>{plan.price}</span>
                                <span className={styles.priceNote}>{plan.note}</span>
                            </div>
                            
                            <ul className={styles.planBenefitList}>
                                {plan.included.map((item, i) => (
                                    <li key={`inc-${i}`} className={styles.benefitItem}>
                                        <CheckIcon />
                                        {item}
                                    </li>
                                ))}
                                
                                {plan.notIncluded.length > 0 && plan.notIncluded[0] !== 'Nenhum' && (
                                    <>
                                        {plan.notIncluded.map((item, i) => (
                                            <li key={`not-inc-${i}`} className={styles.benefitItemDisabled}>
                                                <CrossIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </>
                                )}
                            </ul>

                            <a 
                                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(plan.whatsappMessage)}`}
                                className={styles.planCtaNew} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {plan.isFeatured ? 'CONTRATAR AGORA' : 'FALAR COM CONSULTOR'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Novo Componente BlogSection
const BlogSection = () => (
    <section className="section" id="conteudo">
        <div className="container">
            <h2 className="section-title animate-on-scroll">Conteúdo Exclusivo: O Guia da Looq Digital</h2>
            <p className="section-subtitle animate-on-scroll">Leia nossos posts para transformar a sua visão sobre marketing
                digital para a moda.</p>
            <div className={styles.blogPostGrid}>
                <div className={styles.blogPostCard + ' animate-on-scroll'}>
                    <h3><a href="#" className={styles.blogPostTitle}>5 Segredos para Vender Mais Roupas no Instagram</a></h3>
                    <p>Descubra como criar posts que engajam, usar hashtags corretamente e transformar seu perfil em um
                        ponto de venda.</p>
                </div>
                <div className={styles.blogPostCard + ' animate-on-scroll'}>
                    <h3><a href="#" className={styles.blogPostTitle}>Catálogo Online: Por que sua Loja Precisa de Um Agora</a></h3>
                    <p>Entenda como um catálogo digital profissional pode aumentar suas vendas e facilitar a vida dos
                        seus clientes.</p>
                </div>
                <div className={styles.blogPostCard + ' animate-on-scroll'}>
                    <h3><a href="#" className={styles.blogPostTitle}>O Poder dos Anúncios Pagos para Lojas de Bairro</a></h3>
                    <p>Aprenda a atrair clientes do seu próprio bairro e de toda a cidade com campanhas de baixo custo e
                        alta conversão.</p>
                </div>
            </div>
        </div>
    </section>
);


// Componente para o Formulário de Contato (FIX para usar contactFormButton)
const ContactForm = () => {
    const phoneNumber = "SEU_NUMERO"; // Placeholder para o número de WhatsApp
    const [whatsappInput, setWhatsappInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateWhatsapp = (value) => {
        const phoneRegex = /^\(?\d{2}\)?[\s-]?9?\s?\d{4}-?\d{4}$/; 
        const numericValue = value.replace(/\D/g, ''); 
        return numericValue.length >= 8 && numericValue.length <= 15 && phoneRegex.test(value);
    };

    const handleWhatsappChange = (e) => {
        const value = e.target.value;
        setWhatsappInput(value);
        setIsValid(validateWhatsapp(value)); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements['name'].value;
        const whatsapp = form.elements['whatsapp'].value;
        const storeName = form.elements['store-name'].value;
        
        if (!validateWhatsapp(whatsapp)) {
            alert("Por favor, insira um número de WhatsApp válido.");
            return;
        }

        const message = `Olá, sou ${name}, dono(a) da loja ${storeName}. Vi seu site e gostaria de agendar uma consultoria gratuita. Meu WhatsApp é: ${whatsapp}.`;
        
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
        form.reset();
    };

    return (
        <section className="section" id="contato">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Transforme Sua Marca. Agora.</h2>
                <p className="section-subtitle animate-on-scroll">Preencha o formulário para um diagnóstico gratuito e imediato via WhatsApp.</p>
                <div className={styles.contactFormWrapper + ' animate-on-scroll'}>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <input type="text" name="name" placeholder="Nome Completo" required aria-label="Nome Completo"/>
                        
                        <input 
                            type="tel" 
                            name="whatsapp" 
                            placeholder="(99) 99999-9999" 
                            required 
                            value={whatsappInput}
                            onChange={handleWhatsappChange}
                            aria-label="WhatsApp para Contato"
                            className={!isValid && whatsappInput.length > 0 ? styles.invalidInput : ''}
                        />
                        {!isValid && whatsappInput.length > 0 && (
                            <p className={styles.errorText}>
                                Verifique o número. Use um formato válido.
                            </p>
                        )}
                        
                        <input type="text" name="store-name" placeholder="Nome da Loja/Instagram" required aria-label="Nome da Loja ou Instagram"/>
                        
                        {/* ⬅️ NOVO: Usando a classe simples contactFormButton para evitar o erro PostCSS */}
                        <button type="submit" className={styles.contactFormButton} disabled={!isValid}>
                            Agendar Consultoria Gratuita
                        </button>
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

        // FIX: Observar a rolagem geral se plansRef for null ou não estiver anexado
        const targetElement = plansRef.current || document.body; 

        const timerObserver = new IntersectionObserver(([entry]) => {
            // Se a seção de planos estiver visível OU o usuário rolou o suficiente para o body
            // Vamos simplificar o trigger para apenas quando a ref for visível.
            if (entry.isIntersecting && !timerStarted.current) {
                setTimerIsVisible(true);
                timerStarted.current = true;
            }
        }, { threshold: 0.2 });
        
        // Verifica se plansRef está anexado antes de observar
        if (plansRef.current) {
            timerObserver.observe(plansRef.current);
        }

        return () => timerObserver.disconnect();
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
            <Navbar /> {/* ⬅️ Navbar Fixa integrada */}
            <Hero logoUrl="/logo.png" />
            <BeforeAfter />
            <MethodologySection />
            <BlogSection /> 
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