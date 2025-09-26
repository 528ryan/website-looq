// src/components/SocialProof.jsx

import React from 'react';
import styles from '../App.module.css'; // Usando estilos modulares já existentes

// Dados de prova social para manutenção fácil
const testimonials = [
    {
        videoUrl: "[URL_DO_DEPOIMENTO_VIDEO_1]",
        quote: "Graças à Looq Digital, minhas vendas no Instagram triplicaram! O trabalho é impecável e o suporte é sensacional.",
        client: "- Nome do Cliente, Loja X"
    },
    {
        videoUrl: "[URL_DO_DEPOIMENTO_VIDEO_2]",
        quote: "O catálogo online é um sucesso! Agora recebo pedidos no WhatsApp o dia todo, sem ter que gerenciar tudo manualmente.",
        client: "- Nome do Cliente, Loja Y"
    }
];

// URLs Placeholder para os logos dos clientes
const clientLogos = [
    "[URL_DO_LOGO_CLIENTE_1]",
    "[URL_DO_LOGO_CLIENTE_2]",
    "[URL_DO_LOGO_CLIENTE_3]",
    "[URL_DO_LOGO_CLIENTE_4]"
];

const SocialProof = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }} id="provasocial">
            <div className="container">
                <h2 className="section-title animate-on-scroll">A Confiança de Quem Já Cresceu com a Gente</h2>
                <p className="section-subtitle animate-on-scroll">As marcas parceiras que transformaram seus resultados com a Looq Digital.</p>

                {/* Grid de Depoimentos em Vídeo */}
                <div className={styles.socialProofGrid}>
                    {testimonials.map((t, index) => (
                        <div className={styles.testimonialCard + ' animate-on-scroll'} key={index}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={t.videoUrl}
                                    title={`Depoimento de Cliente ${index + 1}`} // Acessibilidade WCAG
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy" // Performance: Lazy Loading para evitar bloqueio do LCP
                                ></iframe>
                            </div>
                            <p>{t.quote}</p>
                            <span>{t.client}</span>
                        </div>
                    ))}
                </div>

                {/* Seção de Logos de Clientes */}
                <div style={{ marginTop: '60px' }}>
                    <h3 className={styles.clientLogosTitle}>Marcas que Confiam no Nosso Trabalho</h3>
                    <div className={styles.clientLogosGrid}>
                        {clientLogos.map((logoUrl, index) => (
                            <img
                                key={index}
                                src={logoUrl}
                                alt={`Logo do Cliente ${index + 1}`}
                                className={styles.clientLogo + ' animate-on-scroll'}
                                loading="lazy" // Performance: Lazy Loading para imagens que estão abaixo da dobra
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;