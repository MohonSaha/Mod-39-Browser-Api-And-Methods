// alert('ma is coming');

const maComing = () => {
    alert('ma is coming. alert all');
}

const askPicnic = () => {
    const response = confirm('Are you Going to picnic?');
    // console.log(response);
    if(response == true){
        alert("send me the fee bikash");
    }
    else{
        console.log("Okay as your wish");
    }
}


const askName = () => {
   const name = prompt('What is your name?')
   if(name){
    console.log(name);
   }
   
}