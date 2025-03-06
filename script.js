 body {
  background-color: #000;
}

/* /* Header Adjustment logo  */
header {
  top: 18px;
  left: 0;
  padding: 10px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
}
/* Portfolio logo */ 
body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: #000000;
  }
  
  /* Header Styles */
  header {
     
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    z-index: 1000;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
    
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  
  .logo-icon {
    position: relative;
    width: 40px;
    height: 40px;
  }
  
  .circle {
    width: 100%;
    height: 100%;
    border: 3px solid #0077ff;
    border-radius: 50%;
    animation: circleSpin 3s linear infinite;
  }
  
  .line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 3px;
    background: #0077ff;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: center;
    animation: lineSpin 3s linear infinite;
  }
  
  .logo-text h1 {
    font-size: 20px;
    font-weight: bold;
    color: #0077ff;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateY(-10px);
    animation: textFadeIn 1s ease-out forwards 0.5s;
  }
  
  /* Animations */
  @keyframes circleSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes lineSpin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  
  @keyframes textFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
/* Portfolio Logo  End */

/* Social media Tags*/
ul {
  list-style: none;
}

.example-2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.example-2 .icon-content {
  margin: 20px 18px 0px 2px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="linkedin"] .filled,
.example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
  background-color: #0274b3;
}

.example-2 .icon-content a[data-social="github"] .filled,
.example-2 .icon-content a[data-social="github"] ~ .tooltip {
  background-color: #24262a;
}
.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
  background: linear-gradient(
    45deg,
    #405de6,
    #5b51db,
    #b33ab4,
    #c135b4,
    #e1306c,
    #fd1f1f
  );
}
.example-2 .icon-content a[data-social="youtube"] .filled,
.example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
  background-color: #ff0000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #000000;
  padding: 10px 20px;
  border-radius: 64px;
  animation: slide-in 0.8s ease-in-out;
}
/* body */ 
/* Body Section */
.body-section {
    padding: 60px 20px;
    background: #000000;
    text-align: center;
    color: #ffffff;
    animation: fadeInBody 1.5s ease-out;
  }
  
  .introduction {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .intro-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: capitalize;
    line-height: 1.4;
  }
  
  .highlight {
    color: #0077ff;
  }
  
  .intro-text {
    font-size: 1.2rem;
    margin-bottom: 25px;
  }
  
  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .button {
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 12px 20px;
    border: 2px solid #0077ff;
    border-radius: 25px;
    background: #fff;
    color: #0077ff;
    transition: all 0.3s ease;
  }
  
  .button:hover {
    background: #0077ff;
    color: #fff;
    transform: scale(1.1);
  }
  
  .resume-button {
    background: #0077ff;
    color: #fff;
  }
  
  .resume-button:hover {
    background: #005bb5;
    border-color: #005bb5;
  }
  
  /* Fade-in Animation */
  @keyframes fadeInBody {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  /* Animated Background */
  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
    overflow: hidden;
  }
  
  canvas {
    display: block;
  }

  /* Responsive Design */
@media (max-width: 1024px) {
  .buttons-container {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }
  .example-2 {
    flex-wrap: wrap;
    justify-content: center;
  }
  .body-section {
    padding: 40px 10px;
  }
  .intro-title {
    font-size: 2rem;
  }
  .intro-text {
    font-size: 1rem;
  }
  .button {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .logo-text h1 {
    font-size: 16px;
  }
  .buttons-container {
    flex-direction: column;
    align-items: center;
  }
  .button {
    width: 100%;
    text-align: center;
  }
  .example-2 .icon-content {
    margin: 10px;
  }
}


@media (max-width: 375px) { /* iPhone SE and similar small screens */
  .buttons-container {
    flex-direction: column; /* Stack buttons vertically */
    align-items: center;
    width: 100%; /* Ensure it doesn't overflow */
  }
  
  .button {
    width: 90%; /* Make buttons fit smaller screens */
    max-width: 250px; /* Prevent buttons from stretching too much */
    text-align: center;
  }
}
  



/* update for better responsive in all device */

body {
  background-color: #000;
}

/* Header Adjustment logo */
header {
  top: 18px;
  left: 0;
  padding: 10px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

/* Portfolio logo */ 
body, html {
  font-family: 'Arial', sans-serif;
  background: #000000;
}

header {
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.logo-icon {
  position: relative;
  width: 40px;
  height: 40px;
}

.circle {
  width: 100%;
  height: 100%;
  border: 3px solid #0077ff;
  border-radius: 50%;
  animation: circleSpin 3s linear infinite;
}

.line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 3px;
  background: #0077ff;
  transform: translate(-50%, -50%) rotate(0deg);
  transform-origin: center;
  animation: lineSpin 3s linear infinite;
}

.logo-text h1 {
  font-size: 20px;
  font-weight: bold;
  color: #0077ff;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(-10px);
  animation: textFadeIn 1s ease-out forwards 0.5s;
}

/* Social media Tags */
ul {
  list-style: none;
}

.example-2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
}

.example-2 .icon-content {
  margin: 20px 10px;
  position: relative;
}

/* Body Section */
.body-section {
  padding: 5vh 5vw;
  max-width: 90vw;
  margin: auto;
  text-align: center;
  color: #ffffff;
  animation: fadeInBody 1.5s ease-out;
}

.introduction {
  max-width: 800px;
  margin: 0 auto;
}

.intro-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: capitalize;
  line-height: 1.4;
}

.highlight {
  color: #0077ff;
}

.intro-text {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.button {
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 20px;
  border: 2px solid #0077ff;
  border-radius: 25px;
  background: #fff;
  color: #0077ff;
  transition: all 0.3s ease;
}

.button:hover {
  background: #0077ff;
  color: #fff;
  transform: scale(1.1);
}

.resume-button {
  background: #0077ff;
  color: #fff;
}

.resume-button:hover {
  background: #005bb5;
  border-color: #005bb5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .body-section {
    padding: 6vh 8vw;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }
  .example-2 {
    justify-content: center;
  }
  .body-section {
    padding: 5vh 6vw;
  }
  .intro-title {
    font-size: 2rem;
  }
  .intro-text {
    font-size: 1rem;
  }
  .buttons-container {
    flex-direction: column;
  }
  .button {
    width: 80%;
  }
}

@media (max-width: 375px) {
  .button {
    width: 100%;
  }
}
