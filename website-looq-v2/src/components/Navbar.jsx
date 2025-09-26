// src/components/Navbar.jsx

import React from 'react';
import navStyles from './Navbar.module.css'; 
// Usaremos Font Awesome (Free Tier) para o ícone do CTA.

const Navbar = () => {
    return (
        <header className={navStyles.navbarContainer}>
            <nav className={navStyles.navbar} aria-label="Navegação Principal do Site">
                <a href="#hero" className={navStyles.logoLink}>
                    <span style={{color: 'var(--color-accent)', fontWeight: 'bold'}}>LOOQ</span> Digital
                </a>
                
                <div className={navStyles.navLinks}>
                    <a href="#antes-depois" className={navStyles.navItem}>Resultados</a>
                    <a href="#planos" className={navStyles.navItem}>Planos</a>
                    
                    {/* Botão de Conversão Sempre Visível */}
                    <a href="#contato" className={navStyles.ctaButton}>
                        {/* Ícone de Destaque (Substitua por um ícone Font Awesome ou SVG) */}
                        Diagnóstico Gratuito
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;