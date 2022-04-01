import logo from './logo.svg';
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
    <div className='App'>
      <GameBar />
      <GameArea />
    </div>
  );
}

export default App;

function CentreContainer(props) {
  return (
    <div className='CentreContainer'>
      {props.children}
    </div>
  );
}

// GameBar: =============================================================================================

function GameBar() {
  return (
    <div className='GameBar'>
      <CentreContainer>
        <div className='GameBarMenu'>
          <GameBarMenuGroupLeft />
          <GameBarMenuGroupRight />
        </div>
      </CentreContainer>
    </div>
  );
}

function GameBarMenuGroup(props) {
  return (
    <div className='GameBarMenuGroup'>
      {props.children}
    </div>
  );
}

function GameBarMenuGroupLeft() {
  return (
    <div className='GameBarMenuGroupLeft'>
      <GameBarMenuGroup>
        <IconImage />
        <TitleLabel />
      </GameBarMenuGroup>
    </div>
  );
}

function IconImage() {
  return (
    <div>
      <img src={logo} alt='Xordle Icon' />
    </div>
  );
}

function TitleLabel() {
  return (
    <div>
      Xordle
    </div>
  );
}

function GameBarMenuGroupRight() {
  return (
    <div className='GameBarMenuGroupRight'>
      <GameBarMenuGroup>
        <WordCountBar />
        <GameBarButton desc='Help' onClick={alert} imgSrc={logo} />
      </GameBarMenuGroup>
    </div>
  );
}

function WordCountBar() {
  return (
    <div className='WordCountBar'>
      <WordCountLabel wordCount={'X'} />
      <GameBarButton desc='Increment Word Count' onClick={alert} imgSrc={logo} />
      <GameBarButton desc='Decrement Word Count' onClick={alert} imgSrc={logo} />
    </div>
  );
}

function WordCountLabel(props) {
  return (
    <div>
      Words: {props.wordCount}
    </div>
  );
}

function GameBarButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>
        <img src={props.imgSrc} alt={props.desc + 'Button Image'} />
      </button>
    </div>
  );
}


// GameArea: ========================================================================================================

function GameArea() {
  return (
    <div className='GameArea'>
      <CentreContainer>
        <AllWordsGrid />
      </CentreContainer>
      <CentreContainer>
        <KeyboardGrid />
      </CentreContainer>
    </div>
  );
}

function AllWordsGrid() {
  return (
    <ul className='AllWordsGrid'>
      <li><OneWordGrid /></li>
      <li><OneWordGrid /></li>
      <li><OneWordGrid /></li>
      <li><OneWordGrid /></li>
    </ul>
  );
}

function OneWordGrid() {
  return (
    <ul className='OneWordGrid'>
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
  );
}

function GuessRow() {
  return (
    <ul className='GuessRow'>
      <li><LetterCell /></li>
      <li><LetterCell /></li>
      <li><LetterCell /></li>
      <li><LetterCell /></li>
      <li><LetterCell /></li>
    </ul>
  );
}

function LetterCell() {
  return (
    <div className='LetterCell'>
      X
    </div>
  );
}

function KeyboardGrid() {
  return (
    <ul className='KeyboardGrid'>
      <li><KeyboardRow /></li>
      <li><KeyboardRow /></li>
      <li><KeyboardRow /></li>
    </ul>
  );
}

function KeyboardRow() {
  return (
    <ul className='KeyboardRow'>
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
  );
}

function KeyboardCell() {
  return (
    <div className='KeyboardCell'>
      <button>
        <LetterCell />
      </button>
    </div>
  );
}