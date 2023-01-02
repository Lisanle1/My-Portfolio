import React, { useContext } from 'react';
import certification from '../../assets/lottie/development.json';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Certification.css';

import { Container } from '@material-ui/core';
import { certificationData } from '../../data/certificationData';
import AnimationLottie from '../Animation';
import ExperienceCard from './CertificationCard';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="experience" id="experience">
                <div className="experience-body">
                    <div className="experience-image">
                        <AnimationLottie animationPath={certification} />
                    </div>
                    <div className="experience-description">
                        <h1 style={{ color: theme.primary }}>Certification</h1>
                        {certificationData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                courseTitle={exp.courseTitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
