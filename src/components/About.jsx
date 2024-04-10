import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/about2.png";
import {motion} from "framer-motion"
import {fadeIn} from '../variants'
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      {/* Part 1 */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
        <motion.div className="md:w-1/2"
         variants={fadeIn("right",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        >
          <img src={aboutImg} alt="" />
        </motion.div>
        {/* About Content */}
        <motion.div className="md:w-2/5"
         variants={fadeIn("left",0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className=" text-secondary">for many years.</span>
          </h2>
          <p className=" text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnprimary">Get Started</button>
        </motion.div>
      </div>
      {/* Part 2 */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 ">
        <motion.div className="md:w-1/2"
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        >
          <img src={aboutImg2} alt="" />
        </motion.div>
        {/* About Content */}
        <motion.div className="md:w-2/5"
         variants={fadeIn("right",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any
            <span className=" text-secondary">time convinent for you.</span>
          </h2>
          <p className=" text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnprimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
