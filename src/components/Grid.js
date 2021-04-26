import React  from 'react';
import useDb from '../hooks/useDb';
import { motion } from 'framer-motion';

const Grid = ({ setSelectedImg }) => {
  const { docs } = useDb('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => {
            setSelectedImg({url:doc.url, id:doc.id})
          }}

        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default Grid;