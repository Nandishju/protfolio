import react from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workAndEdu } from './data/data'
require("./work.scss")

export const Work = (props) => {
    return (<div className="work"><p>This is the work experience any my education chronology!</p>

        <VerticalTimeline>
            {workAndEdu.map(item => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={item.contentStyle}
                    contentArrowStyle={item.contentArrowStyle}
                    date={item.date}
                    iconStyle={item.iconStyle}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                    <p>{item.notes}</p>
                </VerticalTimelineElement>
            ))}

            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            />
        </VerticalTimeline></div >)
}