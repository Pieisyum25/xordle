//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <GameBar />
      <GameArea />
    </div>
  );
}

export default App;

// GameBar: =============================================================================================

function GameBar() {
  return (
    <div>
      <GameBarGroupLeft />
      <GameBarGroupRight />
    </div>
  );
}

function GameBarGroup(props){
  return (
    <div>
      {props.children}
    </div>
  );
}

function GameBarGroupLeft(){
  return (
    <div>
      <GameBarGroup>
        <IconImage />
        <TitleLabel />
      </GameBarGroup>
    </div>
  );
}

function IconImage(){
  return (
    <div>
      <img src='logo.svg' alt='Xordle Icon' />
    </div>
  );
}

function TitleLabel(){
  return (
    <div>
      Xordle
    </div>
  );
}

function GameBarGroupRight(){
  return (
    <div>
      <GameBarGroup>
        <WordCountBar />
        <GameBarButton desc='Help' onClick={alert} imgSrc='logo.svg'/>
      </GameBarGroup>
    </div>
  );
}

function WordCountBar(){
  return (
    <div>
      <WordCountLabel wordCount={'X'} />
      <GameBarButton desc='Increment Word Count' onClick={alert} imgSrc='logo.svg' />
      <GameBarButton desc='Decrement Word Count' onClick={alert} imgSrc='logo.svg' />
    </div>
  );
}

function WordCountLabel(props){
  return (
    <div>
      Words: {props.wordCount}
    </div>
  );
}

function GameBarButton(props){
  return (
    <div>
      <button onClick={props.onClick}>
        <img src={props.imgSrc} alt={props.desc + 'Button Image'} />
      </button>
    </div>
  );
}


// GameArea: ========================================================================================================

function GameArea(){
  return (
    <div>
      <AllWordsGrid />
      <KeyboardGrid />
    </div>
  );
}

function AllWordsGrid(){
  return (
    <div>
      <ul>
        <li><OneWordGrid /></li>
        <li><OneWordGrid /></li>
        <li><OneWordGrid /></li>
        <li><OneWordGrid /></li>
      </ul>
    </div>
  );
}

function OneWordGrid(){
  return (
    <div>
      <ul>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
        <li><GuessRow /></li>
      </ul>
    </div>
  );
}

function GuessRow(){
  return (
    <div>
      <ul>
        <li><LetterCell /></li>
        <li><LetterCell /></li>
        <li><LetterCell /></li>
        <li><LetterCell /></li>
        <li><LetterCell /></li>
      </ul>
    </div>
  );
}

function LetterCell(){
  return (
    <div>
      X
    </div>
  );
}

function KeyboardGrid(){
  return (
    <div>
      <ul>
        <li><KeyboardRow /></li>
        <li><KeyboardRow /></li>
        <li><KeyboardRow /></li>
      </ul>
    </div>
  );
}

function KeyboardRow(){
  return (
    <div>
      <ul>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
        <li><KeyboardCell /></li>
      </ul>
    </div>
  );
}

function KeyboardCell(){
  return (
    <div>
      <button>
        <LetterCell />
      </button>
    </div>
  );
}