// src/components/MethodologySection.jsx (REFATORADO PARA VENDAS)

import React from 'react';
import styles from '../App.module.css';

// Ícones SVG Simples e de Custo Zero para os passos (Reuso do ícone genérico)
const IconStep = ({ icon, title, description, color }) => (
    <div className={styles.stepCard}>
        {/* Ícone Placeholder (Simplicidade e Custo Zero) */}
        <div className={styles.iconContainer} style={{ borderColor: color, color: color }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
        </div>
        <h4 className={styles.stepTitle}>{title}</h4>
        <p>{description}</p>
    </div>
);

const MethodologySection = () => {
    return (
        <section className="section" id="metodologia">
            <div className="container">
                {/* TÍTULO FOCADO EM LUCRO E VELOCIDADE */}
                <h2 className={styles.salesTitle + ' animate-on-scroll'}>O Caminho Mais Rápido e Barato para o Seu Lucro Digital</h2>
                <p className="section-subtitle animate-on-scroll">
                    Investir na imagem certa é investir em vendas. Veja como a Looq Digital transforma sua loja com **Custo Mínimo e Máximo Resultado**.
                </p>
                
                <div className={styles.methodologyGrid}>
                    <IconStep
                        title="1. Ponto de Partida: Clique e Economize Tempo"
                        description="Basta tirar uma foto com seu celular! Sem estúdio, sem iluminação complexa. Nós economizamos seu tempo (e dinheiro) na produção."
                        color="var(--color-accent)" // Destaque: Chama a atenção
                    />
                    <IconStep
                        title="2. A Mágica da Imagem Profissional"
                        description="Sua peça é instantaneamente transformada em uma foto de revista. Criamos modelos, cenários e contextos que realmente despertam o desejo de compra no seu cliente."
                        color="var(--color-button)" // Destaque: Promete o crescimento
                    />
                    <IconStep
                        title="3. Conteúdo Pronto para Vender (Hoje)"
                        description="Você recebe o material completo: Fotos profissionais + Textos de venda prontos para usar. Menos trabalho, mais seguidores e mais vendas **imediatas**."
                        color="var(--color-highlight)" // Destaque: Urgência e Ação
                    />
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;