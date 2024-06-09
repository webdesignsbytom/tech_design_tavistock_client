import React from 'react';
// Components
import OrbitAnimation from '../utils/OrbitAnimation';
// Data
import { frontendSkills, backendSkills } from '../../utils/PortfolioDataUtils';
// Styles
import '../../styles/orbitAnimation.css';
// React icons
import { BsFillPatchCheckFill } from 'react-icons/bs';

function ExperienceComponent() {
  return (
    <section
      id='experience-section'
      className='lg:h-[90vh] lg:max-h-screen overflow-x-hidden lg:overflow-hidden grid lg:grid-rows-reg'
    >
      <div className='px-4'>
        <section className='text-center mt-20 mb-6'>
          <h5 className='font-semibold'>What skills I have</h5>
          <h2 className='text-3xl font-bold text-text-alt poppins_title'>
            My Experience and Skills
          </h2>
        </section>

        <section className='my-auto overflow-hidden grid gap-4 lg:mx-8 lg:gap-6'>
          <SkillCard title='Frontend Development' bg={'outline-alt-colour'} skills={frontendSkills} />
          <section className='bg-alt-colour grid rounded-xl text-center p-4 min-h-[130px] w-full z-0 h-full'>
            <div className='outline-4 outline grid outline-yellow-500 rounded-lg w-full h-full'>
              <OrbitAnimation />
            </div>
          </section>
          <SkillCard title='Backend Development' bg={'outline-green-1'} skills={backendSkills} />
        </section>
      </div>
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
const SkillCard = ({ title, skills, bg }) => (
  <section className='bg-alt-colour rounded-xl text-center text-white p-4 w-full h-full'>
    <div className={`px-4 py-8 outline-4 outline ${bg} rounded-lg h-full`}>
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

export default ExperienceComponent;
