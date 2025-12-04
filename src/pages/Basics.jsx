import { motion } from 'framer-motion';

const Basics = () => {
    const commands = [
        { cmd: 'git init', desc: 'Initialize a new Git repository' },
        { cmd: 'git clone [url]', desc: 'Clone a repository into a new directory' },
        { cmd: 'git add [file]', desc: 'Add file contents to the index' },
        { cmd: 'git commit -m "[msg]"', desc: 'Record changes to the repository' },
        { cmd: 'git status', desc: 'Show the working tree status' },
        { cmd: 'git push', desc: 'Update remote refs along with associated objects' },
        { cmd: 'git pull', desc: 'Fetch from and integrate with another repository or a local branch' },
    ];

    return (
        <div className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-center">Git Basics</h1>
                <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Essential commands you need to know to start using Git effectively.
                </p>

                <div className="grid">
                    {commands.map((item, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <code style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>{item.cmd}</code>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background: var(--surface);
          padding: 1.5rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
        }
        .text-center { text-align: center; }
      `}</style>
        </div>
    );
};

export default Basics;
