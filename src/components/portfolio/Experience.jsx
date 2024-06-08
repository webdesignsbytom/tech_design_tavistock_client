import React from 'react';
// Components
import OrbitAnimation from '../../components/utils/OrbitAnimation';
// Data 
import { frontendSkills, backendSkills } from '../../utils/PortfolioDataUtils'
// Styles
import '../../styles/orbitAnimation.css';
// React icons
import { BsFillPatchCheckFill } from 'react-icons/bs';

function Experience() {
  return (
    <section
      id='experience'
      className='lg:h-[90vh] lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg mb-4 mx-2'
    >
      <section className='text-center mt-12 mb-4 dark:text-gray-100'>
        <h5 className='font-semibold'>What skills I have</h5>
        <h2 className='text-2xl font-bold'>My Experience and Skills</h2>
      </section>

      <section className='my-auto overflow-hidden grid md:grid-cols-faf gap-4 lg:mx-8 lg:gap-6'>
        <SkillCard title='Frontend Development' skills={frontendSkills} />
        <section className='bg-main-colour grid rounded-xl text-center p-4 min-h-[130px] w-full z-0 h-full'>
          <div className='outline-4 outline grid outline-yellow-500 rounded-lg w-full h-full'>
            <OrbitAnimation />
          </div>
        </section>
        <SkillCard title='Backend Development' skills={backendSkills} />
      </section>
    </section>
  );
}

// SkillItem Component
const SkillItem = ({ skill, level }) => (
  <article className='flex justify-center py-1 px-2'>
    <div className='grid justify-center lg:grid-cols-item w-fit'>
      <section className='flex items-center justify-center my-2 lg:pr-4'>
        <BsFillPatchCheckFill />
      </section>
      <section className='h-min'>
        <h4 className='font-semibold'>{skill}</h4>
        <small>{level}</small>
      </section>
    </div>
  </article>
);

// SkillCard Component
const SkillCard = ({ title, skills }) => (
  <section className='bg-main-colour rounded-xl text-center text-white p-4 w-full h-full'>
    <div className='px-4 py-8 outline-4 outline rounded-lg h-full'>
      <div className='mb-6 text-2xl font-semibold'>
        <h3>{title}</h3>
      </div>
      <section className='grid grid-cols-3 md:grid-cols-2 gap-2 lg:gap-6'>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill.name} level={skill.level} />
        ))}
      </section>
    </div>
  </section>
);

export default Experience;
