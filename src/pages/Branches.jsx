import { motion } from 'framer-motion';
import { GitBranch, GitMerge } from 'lucide-react';

const Branches = () => {
    return (
        <div className="section container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 className="text-center">Branching & Merging</h1>
                <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Branching allows you to diverge from the main line of development and continue to do work without messing with that main line.
                </p>

                <div className="flex gap-4" style={{ flexDirection: 'column' }}>
                    <Section
                        title="Creating a Branch"
                        icon={<GitBranch size={32} color="var(--primary)" />}
                        content={
                            <div>
                                <p>Use a branch to isolate development work without affecting other branches in the repository.</p>
                                <pre><code>git branch [branch-name]</code></pre>
                                <p>Switch to the new branch:</p>
                                <pre><code>git checkout [branch-name]</code></pre>
                                <p>Or do both in one command:</p>
                                <pre><code>git checkout -b [branch-name]</code></pre>
                            </div>
                        }
                    />

                    <Section
                        title="Merging a Branch"
                        icon={<GitMerge size={32} color="var(--accent)" />}
                        content={
                            <div>
                                <p>Merging is the way you combine the work of different branches together.</p>
                                <p>First, switch to the branch you want to merge <i>into</i> (usually main):</p>
                                <pre><code>git checkout main</code></pre>
                                <p>Then merge the branch:</p>
                                <pre><code>git merge [branch-name]</code></pre>
                            </div>
                        }
                        delay={0.2}
                    />
                </div>
            </motion.div>
        </div>
    );
};

const Section = ({ title, icon, content, delay = 0 }) => (
    <motion.div
        className="card"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
    >
        <div className="icon-box">{icon}</div>
        <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
            {content}
        </div>
        <style>{`
      .card {
        background: var(--surface);
        padding: 2rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        border: 1px solid var(--border);
      }
      .icon-box {
        padding: 1rem;
        background: var(--background);
        border-radius: 50%;
      }
      @media (max-width: 768px) {
        .card { flexDirection: column; }
      }
    `}</style>
    </motion.div>
);

export default Branches;
