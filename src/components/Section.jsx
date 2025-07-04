import React from 'react';
import '../css/Section.css'

function Section({ Icon, title, color, selected }) {
  return (
    <div className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}` ,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title} {selected}</h4>
    </div>
  )
}

export default Section