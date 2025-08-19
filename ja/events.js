console.log('extranal file')

// option 2 to handle event
  function makeYellow(){
            document.body.style.backgroundColor='yellow'
        }
        function makered(){
            document.body.style.backgroundColor='red'
        }

        // option 3: get Element by Id and then set onclick 
          const btnMakeBlue =document.getElementById('btn-make-blue');
    //   console.log(btnMakeBlue);
    btnMakeBlue.onclick = function makeBlue(){
        document.body.style.backgroundColor='blue'
    }

    // option 3: differents varsun
    const btnmakepurple = document.getElementById('btn-make-purple');
    // console.log(btnmakepurple);
        btnmakepurple.onclick=makepurple;
    function makepurple (){
        document.body.style.backgroundColor='purple'
    }