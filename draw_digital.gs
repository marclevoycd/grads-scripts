*popurse:: draw a digital with a circle
*x & y :: location(x, y are coordinate in the page)
*digital :: number
*sz:: size of the digital and the circle 
* color:: color of the circle
function draw_digital (arg)
x=subwrd(arg,1)
y=subwrd(arg,2)
digital=subwrd(arg,3)
sz=subwrd(arg,4)
color =subwrd(arg,5)
if ( digital='')
    say 'usage:: draw_digital x y digital size color' 
    return
endif

if (sz='')
   sz=0.1
endif

'set string 'color' c'
'set line 'color' '
'set strsiz 'sz''
'draw string  'x' 'y' 'digital
'q string 'digital
strwith=subwrd(result,4)
'draw mark 2 'x' 'y' 'strwith+0.2 

return