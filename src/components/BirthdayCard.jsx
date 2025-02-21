import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../BirthdayCard.css"; // Import the CSS file

const BirthdayCard = () => {
  const titleText = "TANUJA ❤️"; 
  const messageText =
    "Happiest birthday to you Tanu jii(urf motuus)🥳🥳🎂❤️❤️ Wishing uh a great and happy year ahead...To be honest, you are the best and purest soul I have met and known over the years.....I just cant explain it in words that how much you have supported me in my difficult times. After knowing you for 6 years I can just say that after my parents and family you are the most important person for me ..... actually now  I consider you my family only🫂🫂so bs thoda sa preshan ho jata hu as I have seen your emotional side..Mtlb aisa hai na yrr ki at any point of life if you ever feel like ki you are alone or like something.....you can always contact me and will have my back. Its just when I think of you, its just comes out please keep this girl always happy in her life. Most importantly, I can never forget your support during me JEE period and will always be thankful for that🫶🫶..Now I just wish that our this bond and friendship remains constant over the years 🥺🥺 Ofcourse I will never leave you in any situation....wrna bejatti kiski krunga bhai🙄 wese to bhot miss krta wo bejatti days because ab to nai ho pata tmse one sided jeet jata😂😂 Sahi btaun yrr...in salon me bohot kuch seekha hai tmse as a person, how to deal with things and many more ....shi me as a person you are just too good ❤️ Yrr abhi to success bhi dekhna apn ko jisk liye itne time se mehnat krre..fir mauka mila to ghummi bi to chlna 😏🥺 I just pray that you achieve everything in your life that you dream and think of and make your parents proud🤞🤞Just waiting for that day...krlegi tu♥ If I ever get a chance to make you happy, I will always try that Baki pata mere ko ki kaam wgrh rhta teko but in sb cheezon k bich me apna bhi dhyan rkha kr bhot beemar pdti hai....I just want one thing from you that of you are sad don't hide things from me if you are ok to tell that....At last I just want to say that birthday hai tmhara bhot time se mara nai hai tmko marne ka to bhot mann hai😂😂 And always stay same yrr 🤞🫂wrna shi me bhot marunga....I have made many things worst in past and for that i will always and always be sorry to you....if I ever made you cry...sorry for that.....Mtlb bhot si cheezein pta tmko in sb me se but reading this if it brings even a little smile to your face it's worth it for me..... Always keep Smiling ❤️❤️ Now I don't have much more to say but have a song for you KEEMTI HAI HEERON SI and you will always have a special place in my heart By the way, kon si coaching jati ho😂😂 Once again Happy wala birthday to you motuuss..Just be Happy and always keep smiling ❤️❤️❤️❤️❤️❤️❤️❤️🫶";
  const signatureText = "Always keep smiling!! 🤗🤗"; 

  const [typedMessage, setTypedMessage] = useState("");
  const [showSignature, setShowSignature] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    let i = 0;
    const typeMessage = () => {
      if (i <= messageText.length) {
        setTypedMessage(messageText.slice(0, i));
        i++;
        setTimeout(typeMessage, 30);
      } else {
        setShowCursor(false);
        setTimeout(() => {
          setShowSignature(true);
          setTimeout(() => setShowButton(true), 1000); // Show button after 1s delay
        }, 500);
      }
    };
    typeMessage();
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="subtitle">Wishing You A Very Happy Birthday</h2>

        {/* Title (appears instantly) */}
        <h1 className="title">{titleText}</h1>

        {/* Message (typed effect) */}
        <p className="message">
          {typedMessage}
          {showCursor && <span className="cursor">|</span>}
        </p>

        {/* Signature (appears after message is fully typed) */}
        {showSignature && <p className="signature">{signatureText}</p>}

        {/* Button (appears after signature) */}
        {showButton && (
          <button className="memories-button" onClick={() => navigate("/memories")}>
            Click to look at our memories! 📸
          </button>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;
