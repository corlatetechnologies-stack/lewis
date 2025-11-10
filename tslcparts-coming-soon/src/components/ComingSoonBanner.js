import React from 'react';

const ComingSoonBanner = () => {
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
        },
        header: {
            position: 'absolute',
            top: '30px',
            left: '40px',
            zIndex: 10,
        },
        headerLogo: {
            height: '180px',
            width: 'auto',
            objectFit: 'contain',
        },
        content: {
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '700px',
        },
        emoji: {
            fontSize: '4rem',
            marginBottom: '1rem',
        },
        smallText: {
            fontSize: '1.2rem',
            fontWeight: '500',
            color: '#1f4e45',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.7,
        },
        mainHeading: {
            fontSize: '4.5rem',
            fontWeight: '900',
            color: '#1f4e45',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
        },
        decorativeEmoji1: {
            position: 'absolute',
            fontSize: '4rem',
            left: '15%',
            top: '40%',
            opacity: 0.3,
        },
        decorativeEmoji2: {
            position: 'absolute',
            fontSize: '4rem',
            right: '15%',
            top: '45%',
            opacity: 0.3,
        },
        description: {
            fontSize: '1.1rem',
            color: '#1f4e45',
            marginBottom: '1rem',
            lineHeight: '1.6',
            opacity: 0.7,
        },
        subtitle: {
            fontSize: '1rem',
            color: '#1f4e45',
            marginBottom: '3rem',
            fontWeight: '600',
        },
        button: {
            backgroundColor: '#FF4E45',
            color: '#ffffff',
            padding: '15px 40px',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(255, 78, 69, 0.3)',
        },
        buttonHover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 15px 40px rgba(255, 78, 69, 0.5)',
            backgroundColor: '#ff3d34',
        },
        socialContainer: {
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '1.5rem',
        },
        socialIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#1f4e45',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid #e5e5e5',
        },
    };

    const [isHovered, setIsHovered] = React.useState(false);

    // Inject responsive styles
    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @media (max-width: 768px) {
                .main-heading {
                    font-size: 2.5rem !important;
                }
                .description-text {
                    font-size: 1rem !important;
                }
                .decorative-emoji {
                    display: none !important;
                }
            }
            
            @media (max-width: 480px) {
                .main-heading {
                    font-size: 2rem !important;
                }
                .header-text {
                    font-size: 1rem !important;
                }
                .notify-button {
                    padding: 12px 30px !important;
                    font-size: 0.9rem !important;
                }
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <div style={styles.container}>
            {/* Header Logo */}
            <div style={styles.header}>
                <img 
                    src="/images/corlate-logo.jpeg" 
                    alt="Corlate Technologies" 
                    style={styles.headerLogo}
                />
            </div>

            {/* Decorative Icons */}
            <div style={{...styles.decorativeEmoji1, color: '#1f4e45'}} className="decorative-emoji">⚙️</div>
            <div style={{...styles.decorativeEmoji2, color: '#1f4e45'}} className="decorative-emoji">🔧</div>

            {/* Main Content */}
            <div style={styles.content}>
                <div style={styles.emoji}>🤝</div>
                <p style={styles.smallText} className="header-text">WE'RE BUSY</p>
                <h1 style={styles.mainHeading} className="main-heading">Brewing TSL Commercial Parts Website.</h1>
                <p style={styles.subtitle}>Coming Soon.</p>
                
                <button 
                    style={{
                        ...styles.button,
                        ...(isHovered ? styles.buttonHover : {})
                    }}
                    className="notify-button"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <span>🏢</span>
                    Corlate Technologies
                    <span>→</span>
                </button>
            </div>

            {/* Social Media Icons */}
            <div style={styles.socialContainer}>
                <div style={styles.socialIcon}>🌐</div>
                <div style={styles.socialIcon}>�</div>
                <div style={styles.socialIcon}>💼</div>
            </div>
        </div>
    );
};

export default ComingSoonBanner;