import React,{Component} from 'react';
import NumberInput from '../components/enter-guess';
import GuessButton from '../components/guess-button';
import OutputGuess from '../components/output-guess';

class GuessForm extends Component{
  constructor(props){
    super(props);
    this.state={
      guessData:1,
      result:'',
      num : Math.floor((Math.random() * 100) + 1)
    }
  }

  SetGuess(event){
      this.setState({
        guessData:event.target.value
      });
    }

    GuessValidate(guessInt){
      guessInt=(this.state.guessData);
     let guess = parseInt(guessInt,10);
      //let num = Math.floor((Math.random() * 100) + 1);
      console.log(guess);
      if (isNaN(guess)) {
        this.setState({ result: 'Please enter a valid number' });
        return;
      }

      const guessDiff= Math.abs(guess-this.state.num);

      let result;
      if (guessDiff >= 50) {
        result = 'You\'re Ice Cold...';
      } else if (guessDiff >= 30) {
        result = 'You\'re Cold...';
      } else if (guessDiff >= 10) {
        result = 'You\'re Warm.';
      } else if (guessDiff >= 1) {
        result = 'You\'re Hot!';
      } else {
        result = 'You got it!';
      }

      this.setState({
       result,
       guessData: guess
     });
    }



  render(){
  return(
    <form onSubmit={event => event.preventDefault()}>
        <NumberInput type="number" id="guess" label="Make Your Guess:  " min={1} max={100} value={this.state.guessData} onChange={this.SetGuess.bind(this)}/>
        <br/>
        <h3>Your guess is: </h3>{this.state.guessData}
        <br/><br/>
        <GuessButton value={this.state.guessData} displayGuessResult={guessData => this.GuessValidate(guessData)} />
        <br/> <br/>
        <OutputGuess id="guess" label="Your Guess:" value={this.state.result}/>
    </form>
  );
}
}

export default GuessForm;
