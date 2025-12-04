import { motion } from 'framer-motion';
import { GitPullRequest, Users, MessageSquare } from 'lucide-react';

const Collaboration = () => {
    return (
        <div className="section container">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-center">Collaboration</h1>
                <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                    GitHub shines when working with others. Learn how to contribute and manage projects.
                </p>

                <div className="grid">
                    <Card
                        icon={<GitPullRequest size={40} color="#00C853" />}
                        title="Pull Requests"
                        desc="Propose changes to a repository. A PR lets you tell others about changes you've pushed to a branch in a repository on GitHub."
                    />
                    <Card
                        icon={<Users size={40} color="var(--primary)" />}
                        title="Forking"
                        desc="A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project."
                    />
                    <Card
                        icon={<MessageSquare size={40} color="var(--accent)" />}
                        title="Issues"
                        desc="Issues are used to track ideas, enhancements, tasks, or bugs for work on GitHub."
                    />
                </div>
            </motion.div>
            <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .collab-card {
          background: var(--surface);
          padding: 2rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          text-align: center;
          border: 1px solid var(--border);
          transition: transform 0.3s;
        }
        .collab-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
        </div>
    );
};

const Card = ({ icon, title, desc }) => (
    <motion.div
        className="collab-card"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
    >
        <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'var(--background)', borderRadius: '50%' }}>
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </motion.div>
);

export default Collaboration;
