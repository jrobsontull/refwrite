import React from 'react';
import Header from '../general/Header';

const Create = () => {
  return (
    <div className="create-page">
      <Header />
      <div className="content">
        <div className="left">
          <input placeholder="Write reference title here..." />
          <div className="box">
            <p>
              Use this section to fill out general information about the
              reference. We need the name of the person you are writing the
              reference for, the organisation they worked for and your
              relationship with them.
            </p>
            <div className="input-row">
              <input placeholder="First name" />
              <input placeholder="Job" />
            </div>
            <div className="input-row">
              <input placeholder="Relationship" />
              <input placeholder="Organisation" />
            </div>
          </div>
          <div className="box">
            <h3>Which mode would you like to use?</h3>
            <div className="btn primary">Simple</div>
            <div className="btn primary">Custom</div>
          </div>
        </div>
        <div className="right">
          <div className="preview-pane">
            <div className="preview">
              <p>To whom it may concern,</p>
              <p>Some other text in a paragraph.</p>
              <p>Some other text in a second paragraph.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
