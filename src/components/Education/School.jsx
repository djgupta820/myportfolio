import React from "react";

const School = (props) => {
  const courseName = props.course == 10 || props.course == 12 
    ? `grade_${props.course}th` 
    : props.course.toLowerCase().replace(/\s+/g, '_');
  
  return (
    <div className="estyle">
      <div className="command-line">$ cat {courseName}.txt</div>
      <small>
        <p>{'>'} institution: {props.school}</p>
        <p>{'>'} period: {props.yos} - {props.yop}</p>
        <p>{'>'} score: <strong style={{color: '#10b981'}}>{props.score}%</strong></p>
        <p style={{color: '#666', marginTop: '8px'}}>// {props.type}</p>
      </small>
    </div>
  );
};

export default School;
