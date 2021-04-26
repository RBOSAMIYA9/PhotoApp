import React  from 'react';
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebaseConfig';

const Modal = ({ setSelectedImg, selectedImg, docId }) => {
  console.log("setSelectedImg",setSelectedImg);
  console.log("selectedImg",selectedImg);
  console.log("docId",docId);
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }
  const deleteById = (id) =>{
    const collectionRef = projectFirestore.collection('images');
    collectionRef.doc(id).delete().then(
      console.log("deleted")
      // .click()
    )
  }
  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
       
      <motion.img src={selectedImg.url} alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <div className="btn-div">
       
        <button className="btn-delete" onClick={()=>deleteById(selectedImg.id)}>Delete</button>
      </div>

    </motion.div>
  )
}

export default Modal;