import React,{Component} from 'react';
//import OutputGuess from '../components/output-guess';
import GuessForm from '../components/guess-form';

class GameHotCold extends Component{
  constructor(props){
    super(props);
    this.state={
      guessData:[],
      result:'',
      num : Math.floor((Math.random() * 100) + 1)
    }
  }

  render(){
    const { result, guessData} = this.state;
    const guessCount = guessData.length;

    return(
      <div>
           <GuessForm result={result} guessCount={guessCount} />
      </div>
    );
  }
}

export default GameHotCold;
