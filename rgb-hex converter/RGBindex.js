window.addEventListener('load', () =>
{ const redcolor = document.querySelector('#red');
  const greencolor = document.querySelector('#green');
  const bluecolor = document.querySelector('#blue');
  const gencolor = document.querySelector('#color');
  const hexoutput = document.querySelector('#hc');

    redcolor.addEventListener('change',changeRange);

    greencolor.addEventListener('change',changeRange);

    bluecolor.addEventListener('change',changeRange);

    function changeRange()
    {
      const r = Number(redcolor.value);
      const g = Number(greencolor.value);
      const b = Number(bluecolor.value);
      
     document.querySelector('#r').innerHTML=r;
     document.querySelector('#g').innerHTML=g;
     document.querySelector('#b').innerHTML=b;
      const hexcolor = "#" + hex(r) + hex(g) + hex(b);
      document.body.style.background = hexcolor;
     hexoutput.innerHTML = hexcolor;
      
      
    }

    function hex(v)
    {
       const hexcode = v.toString(16);
       if(v<16)
       {
         hexcode = "0" + hexcode;
         
       }
       return hexcode;
    }
     


});