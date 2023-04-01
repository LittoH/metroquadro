import { motion } from 'framer-motion';

export const ShimmerText = ({ children }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%)',
        }}
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <span style={{ position: 'relative' }}>{children}</span>
    </div>
  );
};