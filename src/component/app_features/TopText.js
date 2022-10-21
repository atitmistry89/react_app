import React from 'react';

const TopText = (props) => {
  return (
    props.data.map ((content, i) =>(
        <>
            <h2 className="mb-3">{content.title}</h2>
            <p>{content.paragraph}</p>
        </>
      ))
  )
}

export default TopText;