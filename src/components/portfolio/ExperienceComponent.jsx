import React from 'react';
// Components
import OrbitAnimation from '../utils/OrbitAnimation';
// Data
import { frontendSkills, backendSkills } from '../../utils/PortfolioDataUtils';
// Styles
import '../../styles/orbitAnimation.css';
import ComponentTitles from '../global/ComponentTitles';

function ExperienceComponent() {
  return (
    <section
      id='experience-section'
      className='overflow-x-hidden lg:overflow-hidden grid'
    >
      <div className='px-4 mt-20'>
        <section className='text-center py-8'>
          <ComponentTitles
            title={'Experience and Skills'}
            subtitle={'Codebases and Servers'}
          />
        </section>

        <section className='my-auto overflow-hidden grid lg:mx-8 lg:gap-6'>
          <div className='grid lg:grid-cols-faf gap-4'>
            <SkillCard
              title='Frontend Development'
              bg={'outline-text-alt'}
              skills={frontendSkills}
            />
            <section className='bg-alt-colour grid rounded-xl text-center p-4 min-h-[130px] my-auto w-full z-0 h-full'>
              <div className='outline-4 outline grid outline-yellow-500 rounded-lg w-full h-full'>
                <OrbitAnimation />
              </div>
            </section>
            <SkillCard
              title='Backend Development'
              bg={'outline-green-1'}
              skills={backendSkills}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

// SkillItem Component
const SkillItem = ({ skill, icon, level }) => (
  <article className='flex justify-center py-1 px-2'>
    <div className='grid justify-center lg:grid-cols-item w-fit'>
      <section className='flex items-center justify-center my-2 lg:pr-4'>
        <div className='text-text-alt'>{icon}</div>
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
      <section className='grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-2'>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            skill={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </section>
    </div>
  </section>
);

export default ExperienceComponent;
