import React, { useState } from 'react';

function App() {
  const waysToSayNo = [
    "Negatory",
    "Not a chance",
    "No dice",
    "Nuh-uh",
    "No way, José",
    "I must respectfully decline",
    "Sorry, but that's a hard pass",
    "Negative, captain",
    "I'll have to take a rain check on that",
    "I'm afraid the answer is a firm no",
    "Ain't gonna happen",
    "No can do"
  ];

  const [currentPhrase, setCurrentPhrase] = useState("No");
  const [size, setSize] = useState(200);
  const [showBtn, setShowBtn] = useState(true)

  const handleClickNo = () => {
    const randomIndex = Math.floor(Math.random() * waysToSayNo.length);
    setCurrentPhrase(waysToSayNo[randomIndex]);
    if(size < 400) {
      setSize(size * 1.1);
    }
  };

  const handleClickYes = () => {
    setShowBtn(false);
  }


  return (
    <div className='body'>
      <p>Will you be mine valentine?</p>
      <iframe title="ptacci" src="https://giphy.com/embed/12aC2hH2jrDpDi" width="480" height="395" className='ptacci' allowFullScreen></iframe>
      {showBtn?
        <div className='buttons'>
          <button className='yes'
            style={{ width: size +'px' }}
            onClick={handleClickYes}>
            Yes
          </button>
          <button className='no'
            onClick={handleClickNo}>
            {currentPhrase}
          </button>
        </div>
      :
        <div className='yespress'>
          <h1>Okaaaaay! It's a deal! &lt;3</h1>
          <iframe title='oh yeaaa' src="https://giphy.com/embed/eVEe3oOO8BkoecDtpY" width="250" height="250"className='ptacci2' allowFullScreen></iframe>
        </div>  
    }
    </div>
  );
}

export default App;
