import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>GitMaster</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Master Version Control today.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="social-icon"><Github size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    © 2024 GitMaster. All rights reserved.
                </div>
            </div>
            <style>{`
        .footer {
          background-color: var(--secondary);
          color: white;
          padding: 3rem 0;
          margin-top: auto;
        }
        .social-icon {
          color: white;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .social-icon:hover {
          opacity: 1;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
