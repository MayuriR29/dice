const displayRandomNumber = () => {
    const inputNum = document.querySelector('#sides').value;
    console.log(inputNum);
    
    // console.log(randomNum);
    
    if (inputNum === ''){
        alert('Please enter a number of sides!');
    }
    else if(Number(inputNum) === 0 || Number(inputNum)<0 || isNaN(inputNum)){
        alert('Please enter a valid number of sides!');
    }
    else{
        let randomNum = Math.ceil((Math.random() * inputNum));
        document.querySelector('#dice').textContent = randomNum;

    }
    
}
    //make separate function for random number
    

