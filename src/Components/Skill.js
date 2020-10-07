import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Skill.css';


export const Skill = ({ sskill1, sskill2, sskill3 }) => {

    return (
        <div className="skill" id="skill">
            <section>
                <div  className="wow fadeInUp">
                    <h1>My skill stack</h1>
                    <hr></hr>
                    <p>I love to learn new technologies. Especially the one's that manke your company special</p>
                </div>

                <div className="gridContainer">
                    <div className="wow fadeInUp">
                        <h3>Web stack</h3>
                        <hr></hr>
                        <ul className="gridItems">
                            {sskill1.map((s, id) => {
                                if (typeof s.icon !== 'string') {
                                    return (
                                        <li key={id}><h6>{s.name} <FontAwesomeIcon icon={s.icon} size="lg" /></h6> </li>

                                    )
                                }
                                else {
                                    return (
                                        <li key={id}><b>{s.name}</b>  {s.icon}</li>

                                    )
                                }
                            })}

                        </ul>
                    </div>

                    <div className="gridMidContent software-dev">
                        <div className="wow fadeInUp">
                            <h3>Software stack</h3>
                            <hr></hr>
                            <ul className="gridItems ">
                                {sskill2.map((s, id) => {
                                    if (typeof s.icon !== 'string') {
                                        return (
                                            <li key={id}><h6>{s.name} <FontAwesomeIcon icon={s.icon} size="lg" /></h6> </li>

                                        )
                                    }
                                    else {
                                        return (
                                            <li key={id}><b>{s.name}</b>  {s.icon}</li>

                                        )
                                    }
                                })}


                            </ul>
                        </div>
                        <div className="wow fadeInUp">
                            <h3>Softskill</h3>
                            <hr></hr>
                            <ul className="gridItems softskill">
                                {sskill3.map((s, id) => {
                                    if (typeof s.icon !== 'string') {
                                        return (
                                            <li key={id}><h6>{s.name} <FontAwesomeIcon icon={s.icon} size="lg" /></h6> </li>

                                        )
                                    }
                                    else {
                                        return (
                                            <li key={id}><b>{s.name}</b>  {s.icon}</li>

                                        )
                                    }
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
