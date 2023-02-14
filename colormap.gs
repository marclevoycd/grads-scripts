*
*  This function change ncl_colormaps to 
*  GrADS colormaps.
*
*  Written by Lanxi
*  Last updated: 2013-11-29
* 
function colormap(args)

*** You should change the "coltabdir" by yourself ***
*coltabdir = "C:\Program Files\OpenGrADS\Contents\Resources\ncl_colormaps\"
coltabdir = "/opt/opengrads/Resources/ncl_colormaps/"
*** --------------------------------------------- ***

coltable  = subwrd(args,1) ;* "MPL_autumn"
coltrasp  = subwrd(args,2) ;* "transparent value"
if(coltable='')
  say ''
  say ' Usage: colormap Color-table-name'
  say ''
  say ' Examples:'
  say '   1. colormap ncl_default'
  say '   2. colormap MPL_terrain'
  say ''
  say ' The Color-table-name can be got from:'
  say '  http://www.ncl.ucar.edu/Document/Graphics/color_table_gallery.shtml'
  say ''
  say ' colormap version "1.0" of NOV 29 2013 $'
  say ' Copyright (c) Lanxi'
  say ''
  return
endif
if(coltrasp='')
   coltrasp=255
endif

coltablefile = coltabdir''coltable'.rgb'

res = read(coltablefile)
res1 = sublin(res,1)

if(res1=1)
  say ' Color table file open error!'
  return
endif

cmd = 'set rbcols'


while(1)
  res2 = sublin(res,2)
  m1 = subwrd(res2,1)
  m2 = subwrd(res2,2)
  
  if(m1='#' & (m2='r' | m2='R'))
    res = read(coltablefile)
    res2 = sublin(res,2)
    R = subwrd(res2,1)
    G = subwrd(res2,2)
    B = subwrd(res2,3)
    n = 16   
    while(R!='' & G!='' & B!='' & n<=255)
*      say n'  'R' 'G'  'B

*    Judge R/G/B in [0,1] OR [0,255]
      RL = strlen(R)
*      say R'  'RL
      Ri = 1
      while(Ri<=RL)
        tmp = substr(R,Ri,1)
*        say tmp
        if(tmp='.')
          rgbI = 'True'
          break
        else
          rgbI = 'False'
        endif
        Ri = Ri + 1
      endwhile
*     say rgbI

      if(rgbI='True')
         'set rgb 'n' '%R*255%' '%G*255%' '%B*255%' 'coltrasp
      else
         'set rgb 'n' '%R%' '%G%' '%B%' 'coltrasp
      endif
      cmd = cmd%' '%n

      res  = read(coltablefile)
      res2 = sublin(res,2)
      R   = subwrd(res2,1)
      G   = subwrd(res2,2)
      B   = subwrd(res2,3)
      n   = n + 1
    endwhile
    break
  else
    res = read(coltablefile)
    continue
  endif
 
endwhile

*say cmd
cmd
return
;
