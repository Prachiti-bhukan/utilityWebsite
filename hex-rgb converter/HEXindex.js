window.addEventListener('load', () => {

    const redcolor = document.querySelector('#red');
    const greencolor = document.querySelector('#green');
    const bluecolor = document.querySelector('#blue');
    const gencolor = document.querySelector('#color');
    const hexinput = document.querySelector('#hc');

    hexinput.addEventListener('click', event =>
    {
         
          const pattern_color = "^#([A-Fa-f0-9]{6})$";
          if(hexinput.value.match(pattern_color)) {
            const hex_color = hexinput.value.replace("#", "")
            const r= parseInt(hex_color.substring(0,1),16);
            const g = parseInt(hex_color.substring(2,4),16);
            const b = parseInt(hex_color.substring(4,6),16);
          }  

         redcolor.value = r;
         greencolor.value = g;
         bluecolor.value = b;

    });

});