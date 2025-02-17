import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  console.log(props);
  const urlEls = props.urls.map(url => {
    return (
      <div className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        {/* <button onClick={props.deleteUrl(url.id)}>Delete</button> */}
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
