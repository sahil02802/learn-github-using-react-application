import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero section">
                <div className="container flex items-center justify-between gap-4" style={{ minHeight: '60vh' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ flex: 1 }}
                    >
                        <h1 className="hero-title">
                            Master <span className="text-primary">Git</span> & <span className="text-primary">GitHub</span>
                        </h1>
                        <p className="hero-subtitle">
                            The ultimate interactive guide to version control. Learn by doing, from basics to advanced workflows.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/basics" className="btn btn-primary flex items-center gap-2">
                                Start Learning <ArrowRight size={20} />
                            </Link>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">
                                Visit GitHub
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                    >
                        <div className="hero-visual">
                            <GitBranch size={200} color="var(--primary)" strokeWidth={1} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section bg-surface">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Learn Git?</h2>
                    <div className="grid">
                        <FeatureCard
                            icon={<GitCommit size={40} color="var(--accent)" />}
                            title="Version Control"
                            description="Track changes, revert to previous stages, and never lose your work again."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<GitBranch size={40} color="var(--primary)" />}
                            title="Branching"
                            description="Experiment safely in isolated environments without affecting the main codebase."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<GitPullRequest size={40} color="#00C853" />}
                            title="Collaboration"
                            description="Work with teams, review code, and merge contributions seamlessly."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            <style>{`
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 2rem;
          border-radius: var(--radius);
          background: var(--background);
          transition: transform 0.3s;
          border: 1px solid var(--border);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        @media (max-width: 768px) {
          .hero .container {
            flex-direction: column;
            text-align: center;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .flex.gap-4 {
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, delay }) => (
    <motion.div
        className="feature-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </motion.div>
);

export default Home;
