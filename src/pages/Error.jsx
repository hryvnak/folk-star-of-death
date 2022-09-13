import React from 'react';
import { Helmet } from "react-helmet";
import Container from '../components/Container';
import GoHome from "../components/GoHome";
import { routes } from "../routes";
import { motion } from "framer-motion";
import { pageMotion } from "../page-motion";

const Error = () => {
  return (
    <motion.div 
      variants={ pageMotion }
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <main>
        <section>
          <Container>
          <GoHome to={routes.home.path} name={routes.home.name} />
            <h1>404 - цієї сторінки не існує</h1>
          </Container>
        </section>
      </main>
    </motion.div>
    
  )
}

export default Error