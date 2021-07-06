window.addEventListener('load', () =>
{ 
   const input = document.querySelector('#input');
   const result = document.querySelector('#result');
   const inputType = document.querySelector('#inputType');
   const resultType = document.querySelector('#resultType');
   
   
  
   input.addEventListener('change',changeType);
   inputType.addEventListener('change',changeType);
   resultType.addEventListener('change',changeType);
   
   let inputTypeValue= inputType.value;
   let resultTypeValue= resultType.value;
   

   function changeType()
   {
        
    inputTypeValue= inputType.value;
    resultTypeValue= resultType.value;
      
    if(inputTypeValue ==='Binary' && resultTypeValue ==='Decimal')
    {
        const digit = parseInt(input.value,2);
        result.value = digit;
    }

    else if(inputTypeValue ==='HexaDecimal' && resultTypeValue ==='Decimal')
    {
        const digit = parseInt(input.value,16);
        result.value = digit;
    }

    else if(inputTypeValue ==='Octal' && resultTypeValue ==='Decimal')
    {
        const digit = parseInt(input.value,8);
        result.value = digit;
    }

    else if(inputTypeValue ==='Decimal' && resultTypeValue ==='Binary')
    {
        const digit= (parseInt(input.value)).toString(2);
        result.value = digit;
    }

    else if(inputTypeValue ==='Decimal' && resultTypeValue ==='Octal')
    {
        const digit= (parseInt(input.value)).toString(8);
        result.value = digit;
    }

    else if(inputTypeValue ==='Decimal' && resultTypeValue ==='HexaDecimal')
    {
        const digit= (parseInt(input.value)).toString(16);
        result.value = digit;
    }

    else if(inputTypeValue ==='Binary' && resultTypeValue ==='HexaDecimal')
    {
        const digit= (parseInt(input.value,2)).toString(16);
        result.value = digit;
    }

    else if(inputTypeValue ==='Binary' && resultTypeValue ==='Octal')
    {
        const digit= (parseInt(input.value,2)).toString(8);
        result.value = digit;
    }

    else if(inputTypeValue ==='HexaDecimal' && resultTypeValue ==='Binary')
    {
        const digit= (parseInt(input.value,16)).toString(2);
        result.value = digit;
    }

    else if(inputTypeValue ==='HexaDecimal' && resultTypeValue ==='Octal')
    {
        const digit= (parseInt(input.value,16)).toString(8);
        result.value = digit;
    }

    else if(inputTypeValue ==='Octal' && resultTypeValue ==='Binary')
    {
        const digit= (parseInt(input.value,8)).toString(2);
        result.value = digit;
    }

    else if(inputTypeValue ==='Octal' && resultTypeValue ==='HexaDecimal')
    {
        const digit= (parseInt(input.value,8)).toString(16);
        result.value = digit;
    }
    
    else{
        result.value = input.value;
    }


   }
});