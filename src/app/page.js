"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import logo from '../../public/images/hero.png'
import Features from '../../public/images/features2.1.png'
import Features2 from '../../public/images/features2.2.png'
import Features3 from '../../public/images/features2.3.png'
import modelX from '../../public/images/modelX.png'
import img1 from '../../public/images/img1.png'
import img2 from '../../public/images/img2.png'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.png'
import rightLarge from '../../public/images/imgRightLarge.png'
import airx2 from '../../public/images/airx2.png'
import performance from '../../public/images/performance.png'
import Interiors from '../../public/images/Interiors.png'
import sustainable from '../../public/images/sustainable.png'
import airx from '../../public/images/airx.png'
import Link from "next/link";
import StatsSection from "@/components/StatsSection";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <Image 
            src={logo}  
            alt="hero"
            className="w-full h-auto"  
          />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-22 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button 
            className="border hover:text-gray-200 hover:border-gray-200 cursor-pointer border-white p-2 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Test Drive
          </motion.button>
        </motion.div>
      </div>

      {/* Features 2.1 */}
      <motion.div 
        className="bg-[#1A1A1A] relative flex flex-col justify-center items-center h-[893px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div variants={item}>
          <Image src={Features} alt="hero" className="w-[980px] h-[553px]" />
        </motion.div>
        
        <motion.h1 
          className="font-regular mt-2 w-full mx-auto max-w-4xl text-3xl text-start text-white text-md"
          variants={item}
        >
          Accelerate into a New Era
        </motion.h1>
        
        <motion.h1 
          className="absolute text-start top-28 font-light text-6xl left-80 text-white text-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Air X
        </motion.h1>
      </motion.div>

      {/* Features 2.2 */}
      <motion.div 
        className="bg-[#1A1A1A] grid grid-cols-2 justify-center items-center h-[801px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div 
          className="flex justify-center items-center"
          variants={slideInFromLeft}
        >
          <div className="max-w-lg mx-auto space-y-8">
            <motion.h1 variants={item} className="text-white text-[48px] font-normal">Lexo Z</motion.h1>
            <motion.h1 variants={item} className="text-white text-[30px] font-normal">Accelarate into a New Era</motion.h1>
            <motion.div variants={item} className="space-y-6">
              <h1 className="text-white text-[13.5px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h1 className="text-white text-[13.5px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h1 className="text-white text-[13.5px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </motion.div>
            <motion.div variants={item} className="flex justify-start items-center gap-8">
              <motion.button 
                className="bg-white text-black px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
              <Link href={"/"} className="text-md text-white font-normal">
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div variants={slideInFromRight}>
          <Image src={Features2} alt="features2" className="w-full h-full" />
        </motion.div>
      </motion.div>  

      {/* Features 2.3 */}
      <motion.div 
        className="bg-white relative max-w-8xl mx-auto space-y-6 pt-30"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div 
          className="space-y-6 absolute left-56 max-w-2xl top-16"
          variants={slideInFromLeft}
        >
          <h1 className="text-6xl font-normal">Air X</h1>
          <h1 className="text-4xl font-normal">Accelarate into a New Era</h1>
          <h1 className="text-[16.5px] font-normal max-w-md">
            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Sed do eiusmod tempor
          </h1>
          <motion.div 
            className="flex justify-start items-center gap-12"
            variants={item}
          >
            <motion.button 
              className="bg-black text-white px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
            <Link href={"/"} className="text-md font-normal">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="h-[450px] overflow-hidden"
          variants={fadeIn}
        >
          <Image src={Features3} alt="features3" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Model X */}
      <div className="bg-black w-full relative">
        <motion.div 
          className="absolute w-[400px] space-y-12 top-60 right-60"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-normal text-white">Model Air X Specifications</h1>
          <div className="grid grid-cols-2 w-full">
            <div className="space-y-8">
              <motion.div 
                className="text-white font-normal space-y-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h1 variants={item}>Range (EPA. est)</motion.h1>
                <motion.h1 variants={item}>Upto 300 miles</motion.h1>
              </motion.div>
              {/* Repeat for other items */}
            </div>
            {/* Second column */}
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full max-h-[900px] h-[900px] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image src={modelX} alt="modelX" className="w-full h-full object-cover object-left" />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="bg-[#1A1A1A]">
        <StatsSection/>
        
        <motion.div 
          className="max-w-6xl mx-auto space-y-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div 
            className="flex justify-between space-y-2 items-center"
            variants={container}
          >
            {[img1, performance, Interiors].map((img, index) => (
              <motion.div 
                key={index}
                className="space-y-2"
                variants={scaleUp}
              >
                <Image src={img} alt={`img${index+1}`} className="w-[328px] h-[286px]"/>
                <h1 className="text-2xl font-normal text-center text-white">
                  {['Impeccable Design', 'Elevated Performance', 'Great Interiors'][index]}
                </h1>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex justify-start items-start gap-32"
            variants={container}
          >
            <motion.div variants={slideInFromLeft}>
              <Image src={sustainable} className="h-full w-[480px]" alt="sustainable" />
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              variants={slideInFromRight}
            >
              <Image src={airx} className="h-full w-full" alt="sustainable" />
              <h1 className="text-white text-2xl font-normal">Drive to a sustainable future</h1>
              <h1 className="text-lg text-white font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              </h1>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-between my-6 pb-20 gap-12"
            variants={container}
          >
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={container}
            >
              {[img1, img2, img3, img4].map((img, index) => (
                <motion.div key={index} variants={scaleUp}>
                  <Image src={img} alt={`img${index+1}`} />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={scaleUp}>
              <Image src={rightLarge} alt="rightLarge" className="object-cover" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div 
            className="space-y-6 absolute left-56 max-w-2xl bottom-16"
            variants={slideInFromLeft}
          >
            <h1 className="text-6xl text-white font-normal">Air X</h1>
            <h1 className="text-4xl text-white font-normal">Accelarate into a New Era</h1>
            <motion.div 
              className="flex justify-start items-center gap-12"
              variants={item}
            >
              <motion.button 
                className="bg-white text-black px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
              <Link href={"/"} className="text-md text-white font-normal">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Image className="w-full h-full" src={airx2} alt="airx2"/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}