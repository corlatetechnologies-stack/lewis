import React from 'react';
import { colors } from '../utils/colors';

const ComingSoonBanner = () => {
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: colors.jetBlack,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
        },
        '@keyframes flyBanner': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' }
        },
        backgroundOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.steelGray,
            opacity: 0.1,
            backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                ${colors.steelGray} 35px,
                ${colors.steelGray} 70px
            )`,
        },
        content: {
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '800px',
        },
        logo: {
            fontSize: '4rem',
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: '2rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: "'Arial Black', sans-serif",
        },
        logoAccent: {
            color: colors.crimsonRed,
        },
        comingSoon: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: colors.crimsonRed,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            animation: 'flyBanner 15s linear infinite',
            whiteSpace: 'nowrap',
            position: 'relative',
        },
        flyingBannerContainer: {
            position: 'absolute',
            top: '5%',
            left: '5%',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
        },
        flagPole: {
            width: '10px',
            height: '200px',
            backgroundColor: colors.silver,
            marginRight: '-5px',
            zIndex: 11,
            position: 'relative',
            boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
            animation: 'flagPole 3s ease-in-out infinite',
        },
        flagPoleTop: {
            width: '20px',
            height: '20px',
            backgroundColor: colors.crimsonRed,
            borderRadius: '50%',
            position: 'absolute',
            top: '-10px',
            left: '-5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        },
        flyingBanner: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: colors.white,
            backgroundColor: colors.crimsonRed,
            padding: '30px 80px 30px 20px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            border: `4px solid ${colors.silver}`,
            borderLeft: 'none',
            position: 'relative',
            transformOrigin: 'left center',
            animation: 'wave 3s ease-in-out infinite, flutter 3s ease-in-out infinite',
            boxShadow: '0 10px 30px rgba(178, 34, 34, 0.5)',
            background: `linear-gradient(135deg, ${colors.crimsonRed} 0%, #8B0000 100%)`,
        },
        description: {
            fontSize: '1.25rem',
            color: colors.silver,
            marginBottom: '3rem',
            lineHeight: '1.8',
        },
        divider: {
            width: '100px',
            height: '3px',
            backgroundColor: colors.crimsonRed,
            margin: '2rem auto',
        },
        subtitle: {
            fontSize: '1.1rem',
            color: colors.steelGray,
            marginTop: '2rem',
        },
        iconContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
        },
        icon: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: colors.steelGray,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            color: colors.silver,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
        },
    };

    // Inject keyframe animations and media queries
    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes wave {
                0%, 100% { 
                    transform: perspective(400px) rotateY(0deg);
                    border-radius: 0px;
                }
                25% { 
                    transform: perspective(400px) rotateY(-15deg);
                    border-radius: 20px 0px 20px 0px;
                }
                50% { 
                    transform: perspective(400px) rotateY(0deg);
                    border-radius: 0px 20px 0px 20px;
                }
                75% { 
                    transform: perspective(400px) rotateY(15deg);
                    border-radius: 20px 0px 20px 0px;
                }
            }
            @keyframes flagPole {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(3deg); }
            }
            @keyframes flutter {
                0%, 100% { box-shadow: 0 10px 30px rgba(178, 34, 34, 0.5); }
                50% { box-shadow: 5px 15px 40px rgba(178, 34, 34, 0.7); }
            }
            
            /* Mobile Responsive Styles */
            @media (max-width: 768px) {
                .mobile-logo {
                    font-size: 2.5rem !important;
                    margin-bottom: 1rem !important;
                }
                .mobile-coming-soon {
                    font-size: 1.5rem !important;
                    letter-spacing: 0.1em !important;
                }
                .mobile-description {
                    font-size: 1rem !important;
                    padding: 0 10px !important;
                }
                .mobile-subtitle {
                    font-size: 0.9rem !important;
                }
                .mobile-flag-container {
                    top: 2% !important;
                    left: 2% !important;
                    transform: scale(0.6) !important;
                    transform-origin: left top !important;
                }
                .mobile-icon-container {
                    gap: 1rem !important;
                }
                .mobile-icon {
                    width: 45px !important;
                    height: 45px !important;
                    font-size: 1.2rem !important;
                }
            }
            
            @media (max-width: 480px) {
                .mobile-logo {
                    font-size: 2rem !important;
                }
                .mobile-coming-soon {
                    font-size: 1.2rem !important;
                }
                .mobile-description {
                    font-size: 0.9rem !important;
                    margin-bottom: 2rem !important;
                }
                .mobile-flag-container {
                    transform: scale(0.5) !important;
                }
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.backgroundOverlay}></div>
            
            {/* Flag Banner */}
            <div style={styles.flyingBannerContainer} className="mobile-flag-container">
                <div style={styles.flagPole}>
                    <div style={styles.flagPoleTop}></div>
                </div>
                <div style={styles.flyingBanner}>
                    🚗 COMING SOON • TSLCPARTS 🔧
                </div>
            </div>

            <div style={styles.content}>
                <h1 style={styles.logo} className="mobile-logo">
                    TSLC<span style={styles.logoAccent}>PARTS</span>
                </h1>
                <div style={styles.divider}></div>
                <h2 style={{ ...styles.comingSoon, animation: 'none' }} className="mobile-coming-soon">
                    Coming Soon
                </h2>
                <p style={styles.description} className="mobile-description">
                    We're building something exceptional for your automotive needs. 
                    Quality car parts, expert repairs, and reliable service you can trust.
                </p>
                <p style={styles.subtitle} className="mobile-subtitle">
                    Your go-to destination for genuine auto parts and professional car repairs.
                </p>
                <div style={styles.iconContainer} className="mobile-icon-container">
                    <div style={styles.icon} className="mobile-icon">⚙️</div>
                    <div style={styles.icon} className="mobile-icon">🔧</div>
                    <div style={styles.icon} className="mobile-icon">⚡</div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonBanner;