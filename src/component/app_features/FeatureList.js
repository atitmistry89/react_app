import React from 'react'

const FeatureList = (props) => {
  return (
    <ul id="feature-list">
        {
        props.data.map ((content, i) =>(
            <li className="d-flex align-items-center mb-5" key={i}>
                <div className="image d-flex align-items-center justify-content-center">
                    <img src={content.image} alt={content.heading} />
                </div>
                <div className="text">
                    <h3 className="m-0">{content.heading}</h3>
                    <p className="m-0">{content.text}</p>
                </div>
            </li>
        ))
        }
    </ul>
  )
}

export default FeatureList;