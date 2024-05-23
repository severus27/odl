import React, { useState } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import './Feedback.css';

const Feedback = () => {
  const [isHelpful, setIsHelpful] = useState(null);

  const handleFeedback = (feedback) => {
    setIsHelpful(feedback);
    // Add your logic to handle the feedback (e.g., send it to a server)
  };

  return (
    <div className="feedback-container text-center">
      {isHelpful === null ? (
        <div className="feedback-options flex items-center justify-center gap-4">
          <p>Did this page help you?</p>
          <div className="feedback-buttons flex items-center justify-center gap-4">
            <div
              className={`feedback-button ${
                isHelpful === true ? "helpful" : ""
              }`}
              onClick={() => handleFeedback(true)}
            >
              <FiThumbsUp className="thumbs-up"/>
            </div>
            <div
              className={`feedback-button ${
                isHelpful === false ? "not-helpful" : ""
              }`}
              onClick={() => handleFeedback(false)}
            >
              <FiThumbsDown className="thumbs-down"/>
            </div>
          </div>
        </div>
      ) : (
        <p>Thanks for your feedback!</p>
      )}
    </div>
  );
};


export default Feedback;