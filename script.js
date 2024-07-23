  //steps
        //when click a button , the computwer will randomly pick a move
        //compare the move to get the result
        // them  display the result\\
  const score = {
    wins: 0,
    losses: 0,
    ties :0
  }
  document.querySelector('.js-score').innerHTML =`{computerMove} you ${result}
                    Wins: ${score.wins},  Wins: ${score.losses},  Wins: ${score.ties} ` ;
  const inStore = localStorage.getItem('Message');
  console.log(inStore);

        let computerMove ='';
        function pickComputerMove(){
        
                    const randomNumber =  Math.random();
                    if(randomNumber >= 0 && randomNumber <= 1/3){
                    computerMove = 'paper';
                    }
                    else if(randomNumber >= 1/3 && randomNumber <= 2/3){
                    computerMove = 'paper';
                    }
                    else if(randomNumber >= 2/3 && randomNumber <=3){
                    computerMove = 'scissor';
                    }
                    console.log(computerMove);


        }
        function scissor(){
            let result = '';
                if(computerMove === 'rock'){
                    result = 'You Lose';
                }else if(computerMove === 'paper'){
                    result = 'Win';
                }
                else if(computerMove === 'scissor'){
                    result = 'Tie';
                }
                alert(`You picked rock , computer picked ${computerMove} you ${result} `)
                
        }
        function paper(){
            let result = '';
                if(computerMove === 'rock'){
                    result = 'Won';
                }else if(computerMove === 'paper'){
                    result = 'Tie';
                }
                else if(computerMove === 'scissor'){
                    result = 'You  Lose';
                }
                alert(`You picked rock , computer picked ${computerMove} you ${result} `);
                

        }

        function rock(playerMove){
            let result = '';
                if(computerMove === 'rock'){
                    result = 'Tie';
                }else if(computerMove === 'paper'){
                    result = 'You lose';
                }
                else if(computerMove === 'scissor'){
                    result = 'You  Won';
                }


                if(result ==='You won'){
                    score.wins +=1;
                }
                else if(result === 'You lose'){
                    score.losses +=1;
                }
                else if(result === 'Tie'){
                    score.ties +=1;

                }
                alert(`You picked rock , computer picked ${computerMove} you ${result}
                    Wins: ${score.wins},  Wins: ${score.losses},  Wins: ${score.ties} `);

                    localStorage.setItem('Message', 'Hello');
      }

      function playGame(){

      }