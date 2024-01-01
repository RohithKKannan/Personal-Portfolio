import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import '../styles/Experience.css'

function Experience() {
    return (
        <div class="experience">
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement date="Aug 2018 - May 2022" iconStyle={{ background: '#3e497a', color: '#fff' }} icon={<SchoolIcon />}>
                    <h2 className='vertical-timeline-element-title'>B.E Computer Science and Engineering</h2>
                    <p>Mepco Schlenk Engineering College, Sivakasi</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date="Feb 2022 - Apr 2022" iconStyle={{ background: 'orange', color: '#fff' }} icon={<WorkIcon />}>
                    <h2 className='vertical-timeline-element-title'>Software Engineering Intern</h2>
                    <p>MaxLinear, Chennai</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date="May 2022 - Jun 2022" iconStyle={{ background: 'orange', color: '#fff' }} icon={<WorkIcon />}>
                    <h2 className='vertical-timeline-element-title'>Unity Developer Intern</h2>
                    <p>EFFE Technology, Chennai</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date="July 2022 - Feb 2023" iconStyle={{ background: 'orange', color: '#fff' }} icon={<WorkIcon />}>
                    <h2 className='vertical-timeline-element-title'>Unity Developer</h2>
                    <p>EFFE Technology, Chennai</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date="Dec 2022 - Jun 2023" iconStyle={{ background: '#3e497a', color: '#fff' }} icon={<SchoolIcon />}>
                    <h2 className='vertical-timeline-element-title'>Full Stack Game Development</h2>
                    <p>Outscal</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date="July 2023 - Sept 2023" iconStyle={{ background: 'orange', color: '#fff' }} icon={<WorkIcon />}>
                    <h2 className='vertical-timeline-element-title'>Game Developer Intern</h2>
                    <p>TomoClub</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date="Oct 2023 - Present" iconStyle={{ background: 'orange', color: '#fff' }} icon={<WorkIcon />}>
                    <h2 className='vertical-timeline-element-title'>Game Developer</h2>
                    <p>TomoClub</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience