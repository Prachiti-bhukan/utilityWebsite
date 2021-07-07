window.addEventListener('load', () =>
{ 
   const input = document.querySelector('#input');
   const result = document.querySelector('#result');
   const inputType = document.querySelector('#inputType');
   const resultType = document.querySelector('#resultType');
   
   
  
   input.addEventListener('change',convert);
   inputType.addEventListener('change',convert);
   resultType.addEventListener('change',convert);
   
   let inputTypeValue= inputType.value;
   let resultTypeValue= resultType.value;
   
   
function convert()
   {
     console.log("convert");
    inputTypeValue= inputType.value;
    resultTypeValue= resultType.value;
       
    if(inputTypeValue ==='Meter' && resultTypeValue ==='Kilometer')
    {
        result.value = (parseInt(input.value) * 0.001);
      }

    else if(inputTypeValue ==='Meter' && resultTypeValue ==='Centimeter')
    {
        result.value = Number(input.value) * 100;
    }

    else if(inputTypeValue ==='Kilometer' && resultTypeValue ==='Meter')
    {
        result.value = Number(input.value) * 1000;
    }

    else if(inputTypeValue ==='Kilometer' && resultTypeValue ==='Centimeter')
    {
        result.value = Number(input.value) * 100000;
    }

    else if(inputTypeValue ==='Centimeter' && resultTypeValue ==='Kilometer')
    {
        result.value = Number(input.value) * 0.00001;
    }

    else if(inputTypeValue ==='Centimeter' && resultTypeValue ==='Meter')
    {
        result.value = Number(input.value) * 0.01;
    }

    else{
        result.value = input.value;
    }


   }
});