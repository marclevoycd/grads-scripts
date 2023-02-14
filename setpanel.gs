function setpanel(args)
* modified by SUN Xuguang, Nov 26, 2003,sunxg007@yahoo.com.cn
* modified by SUN Xuguang, Oct 08, 2007, xgsun@nju.edu.cn
* modified by CD, Apr. 23, 2014
* This function sets the vpage to do multiple panel plots based on
*      command line arguments
* syntax is: run setpanel i imax j jmax [xoff] [yoff]
* where: 'i' is the index for the panel in the x dimension
* where: 'imax' is the total number panels in the x dimension
* where: 'j" is the index for the panel in the y dimension
* where: 'jmax' is the total number panels in the y dimension
*        'xoff' is the offset in inches from the left side of the page (can be negative)
*        'yoff' is the offset in inches from the bottom of the page (can be negative)
* PARSE COMMAND LINE INPUT
i=subwrd(args,1)
imax=subwrd(args,2)
j=subwrd(args,3)
jmax=subwrd(args,4)
xoff=subwrd(args,5)
yoff=subwrd(args,6)
gapx=subwrd(args,7)
gapy=subwrd(args,8)


if( i = 'help' | i = '?') 
say 'Usage: setpanel i imax j jmax [xoff] [yoff] [gapx] [gapy]'
say '       i      is the index for the panel in the x dimension'
say '       imax   is the total number panels in the x dimension'
say '       j      is the index for the panel in the y dimension'
say '       jmax   is the total number panels in the y dimension'
say '       xoff   is the offset in inches from each side of the page (width)'
say '       yoff   is the offset in inches from each side of the page (height)'
say '       gapx   is the horizontal gaps between each panel'
say '       gapy   is the vertical gaps between each panel'
return
endif

if(i='');i=1;endif
if(imax='');imax=1;endif
if(j='');j=1;endif
if(jmax='');jmax=1;endif
if(xoff='');xoff=0.0;endif
if(yoff='');yoff=0.0;endif

'q gxinfo'
tmp1 = sublin(result,2)
xlen = subwrd(tmp1,4)
ylen = subwrd(tmp1,6)

xoff_2 = xoff * 2
yoff_2 = yoff * 2

if(xoff_2>=xlen); say 'xoff is so large!'; return; endif
if(yoff_2>=ylen); say 'yoff is so large!'; return; endif

dx=(xlen-xoff_2)/imax
dy=(ylen-yoff_2)/jmax
*******change by cd******************
if(gapx='');gapx=dx/10;endif
if(gapy='');gapy=dy/10;endif
*gapx=dx/10
*gapy=dy/10

x1=(0.0+(i-1)*dx)+xoff+gapx
x2=(i*dx)+xoff-gapx
y2=(ylen-(j-1)*dy)-yoff-gapy
y1=(ylen-j*dy)-yoff+gapy
'set vpage 0 'xlen' 0 'ylen''
'set parea 'x1' 'x2' 'y1' 'y2
*****change by cd*******************
if(gapx = 0)
    if(i>1)
      'set ylpos -20'
    endif
endif
if(gapy = 0)
    if(j<jmax)
        'set xlpos -20'
    endif
endif

