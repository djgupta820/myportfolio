import React, { useEffect, useState } from 'react'
import {skills} from '../../skills.json'
import Skill from './Skill'

const Skills = () => {
    const [skill, setSkill] = useState(null)

    useEffect(()=>{
        setSkill(skills)
    })

    return (
    <div className='container'>
        <h1 style={{textAlign: "center"}}>Skills</h1>
        <div className="skills-terminal">
            <div className="skills-content-wrapper">
                <div className="command-header">$ cat ~/skills.json | jq '.technologies'</div>
                <div className="projects">
                    {
                        skill? skill.map((item, idx)=>{
                            return <Skill data={item} key={idx} />    
                        }): <p>No skills yet</p>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills