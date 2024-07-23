  //steps
        //when click a button , the computwer will randomly pick a move
        //compare the move to get the result
        // them  display the result\\
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

        function rock(){
            let result = '';
                if(computerMove === 'rock'){
                    result = 'Tie';
                }else if(computerMove === 'paper'){
                    result = 'You lose';
                }
                else if(computerMove === 'scissor'){
                    result = 'You  Won';
                }
                alert(`You picked rock , computer picked ${computerMove} you ${result} `);
      }
