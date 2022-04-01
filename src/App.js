import logo from './logo.svg';
import './App.css';
import React from 'react';

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

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      wordCount: 4
    };
    this.setWordCount = this.setWordCount.bind(this);
  }

  setWordCount(value){
    const min = 1;
    const max = 10;
    if (value < min || value > max) return;

    this.setState({
      wordCount: value
    });
  }

  render(){
    const wordCount = this.state.wordCount;
    const wordCountDict = {
      value: wordCount,
      setter: this.setWordCount
    }

    return (
      <div className='App'>
        <GameBar wordCountDict={wordCountDict} />
        <GameArea wordCount={wordCount} />
      </div>
    );
  }
}

export default App;


function calculateGuesses(wordCount){
  let guesses = 5 + wordCount;
  if (wordCount >= 2) guesses++;

  return guesses;
}


function CentreContainer(props) {
  return (
    <div className='CentreContainer'>
      {props.children}
    </div>
  );
}

// GameBar: =============================================================================================

function GameBar(props) {
  return (
    <div className='GameBar'>
      <CentreContainer>
        <div className='GameBarMenu'>
          <GameBarMenuGroupLeft />
          <GameBarMenuGroupRight wordCountDict={props.wordCountDict} />
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

function GameBarMenuGroupRight(props) {
  return (
    <div className='GameBarMenuGroupRight'>
      <GameBarMenuGroup>
        <WordCountBar wordCountDict={props.wordCountDict} />
        <GameBarButton desc='Help' onClick={alert} imgSrc={logo} />
      </GameBarMenuGroup>
    </div>
  );
}

function WordCountBar(props) {
  const wordCount = props.wordCountDict.value;
  const wordCountSetter = props.wordCountDict.setter;

  return (
    <div className='WordCountBar'>
      <WordCountLabel wordCount={wordCount} />
      <GameBarButton desc='Increment Word Count' onClick={() => wordCountSetter(wordCount + 1)} imgSrc={logo} />
      <GameBarButton desc='Decrement Word Count' onClick={() => wordCountSetter(wordCount - 1)} imgSrc={logo} />
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

function GameArea(props) {
  return (
    <div className='GameArea'>
      <CentreContainer>
        <AllWordsGrid wordCount={props.wordCount} />
      </CentreContainer>
      <CentreContainer>
        <KeyboardGrid />
      </CentreContainer>
    </div>
  );
}

function AllWordsGrid(props) {
  const wordCount = props.wordCount;
  const guessCount = calculateGuesses(wordCount);
  const wordGrids = new Array(wordCount).fill(0).map((_, i) => <li key={i}><OneWordGrid guessCount={guessCount} /></li>)

  return (
    <ul className='AllWordsGrid'>
      {wordGrids}
    </ul>
  );
}

function OneWordGrid(props) {
  const guessRows = new Array(props.guessCount).fill(0).map((_, i) => <li key={i}><GuessRow /></li>)
  
  return (
    <ul className='OneWordGrid'>
      {guessRows}
    </ul>
  );
}

function GuessRow() {
  const wordLength = 5;
  const cells = new Array(wordLength).fill(0).map((_, i) => <li key={i}><LetterCell /></li>);

  return (
    <ul className='GuessRow'>
      {cells}
    </ul>
  );
}

function LetterCell(props) {
  return (
    <div className='LetterCell'>
      {props.letter}
    </div>
  );
}

function KeyboardGrid() {
  return (
    <ul className='KeyboardGrid'>
      <li key={0}><KeyboardRow letters='qwertyuiop' /></li>
      <li key={1}><KeyboardRow letters='asdfghjkl' /></li>
      <li key={2}><KeyboardRow letters='zxcvbnm' lastRow={true}/></li>
    </ul>
  );
}

function KeyboardRow(props) {
  const lettersArray = props.letters.split('');
  if (props.lastRow){
    lettersArray.unshift('backspace');
    lettersArray.push('enter');
  }
  const cells = lettersArray.map((letter) =>
    <li key={letter}>
      <KeyboardCell letter={letter} />
    </li>
  );

  return (
    <ul className='KeyboardRow'>
      {cells}
    </ul>
  );
}

function KeyboardCell(props) {
  return (
    <div className='KeyboardCell'>
      <button>
        <LetterCell letter={props.letter} />
      </button>
    </div>
  );
}