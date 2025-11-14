import React from 'react';

const Skills = () => {
    const skills = [
        'Java', 'Python', 'C/C++', 'C#', 'JavaScript', 'React', 'Spring Boot', 
        'Flask', 'FastAPI', 'AI / LLM', 'OpenAI API', 'LangChain', 
        'Discord.py', 'AWS', 'Linux', 'MySQL', 'Git'
    ];

    return (
        <>
            <h2>기술 스택</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <span key={skill} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </>
    );
};

export default Skills;