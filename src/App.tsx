import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import Community from './pages/Community';
import Journal from './pages/Journal';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route 
          path="/" 
          element={
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/progetto" 
          element={
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Project />
            </motion.div>
          } 
        />
        <Route 
          path="/comunita" 
          element={
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Community />
            </motion.div>
          } 
        />
        <Route 
          path="/journal" 
          element={
            <motion.div
              key="journal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Journal />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-20">
        <Navbar />
        <main className="flex-1 py-12">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}


