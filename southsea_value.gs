*draw southsea and the value in the little panel.

function southsea_value(args)
if(args='')
usage()
return
endif

*ptype=GetVars(args,'ptype')
v1=GetVars(args,'v1')
v2=GetVars(args,'v2')
v3=GetVars(args,'v3')
sz=GetVars(args,'sz')
lab=GetVars(args,'lab')

*if(ptype='')
     'q gxinfo'
     rec=sublin(result,1)
     ptype=subwrd(rec,4)     
  if(ptype=Shaded2)
    ptype=Shaded
  endif
  if(ptype=Shaded2b)
    ptype=Shade2b
  endif  
*endif

*if(sz='');sz=1;endif
if(lab='');lab='on';endif

if(ptype=Shaded|ptype=Shaded2b|ptype=Fgrid)

'q shades'
rec=sublin(result,1)
ncol=subwrd(rec,5)
say ncol
nlev=ncol-1
levs=''
cols=''
 ii=1
 while(ii<=ncol)
   if(ii<ncol) 
     rec=sublin(result,ii+1)
     col.ii=subwrd(rec,1)
     lev.ii=subwrd(rec,3)
   else
     col.ii=subwrd(rec,1)
   endif
   
   if(ii<=nlev)
   levs=levs%' '%lev.ii
   endif
   if(ii<=ncol)
   cols=cols%' '%col.ii
   endif
 ii=ii+1
 endwhile
endif

****************************************
if(ptype=contour|ptype= Contour)
'q contours'
rec=sublin(result,1)
ncol=subwrd(rec,5)
nlev=ncol
 ii=1
 levs=''
cols=''
 while(ii<=ncol)
     rec=sublin(result,ii+1)
     col.ii=subwrd(rec,1)
     lev.ii=subwrd(rec,2)
   levs=levs%' '%lev.ii
   cols=cols%' '%col.ii   
 ii=ii+1
 endwhile
endif
************************************************

'q dim'
rec22 =sublin(result,2)
rec33 = sublin( result,3)
lon1 = subwrd( rec22,6)
lon2 = subwrd( rec22,8)
lat1 = subwrd( rec33,6)
lat2 = subwrd( rec33,8)
'q gxinfo'
rec1 = sublin( result,1)
screen = subwrd( rec1,4)
if( screen = 'Clear')
say 'Can not draw South China Sea'
return
endif
***************************************
     recx=sublin(result,3)
     recy=sublin(result,4)
     pax_l=subwrd(recx,4)
     pax_r=subwrd(recx,6)
     pay_l=subwrd(recy,4)
     pay_r=subwrd(recy,6)
     if(sz='')
     sz=(pax_r-pax_l)/8
     endif  
     vp=sublin(result,2)
     vp_x=subwrd(vp,4)
     vp_y=subwrd(vp,6)
**************************************
rec3=sublin(result,3)
rec4=sublin(result,4)
xright=subwrd(rec3,6)
ybottom=subwrd(rec4,4)
xleft=xright-1.2*sz
ytop=ybottom+2*sz

yytop=ytop+0.035*sz
xxleft=xleft-0.035*sz
x2=xleft+0.05*sz
y2=ytop-0.05*sz
x3=xxleft+0.07*sz
y3=yytop-0.07*sz
'set line 1 1 1'

'draw line 'x2' 'ytop' 'xright' 'ytop''
'draw line 'x3' 'yytop' 'xright' 'yytop''
'draw line 'xleft' 'ybottom' 'xleft' 'y2''
'draw line 'xxleft' 'ybottom' 'xxleft' 'y3''
'draw line 'xleft' 'y2' 'x2' 'ytop''
'draw line 'xxleft' 'y3' 'x3' 'yytop''

zx11=xright-0.8938*sz;zx12=zx11+0.06*sz;
zy11=ybottom+1.29*sz;zy12=zy11-0.08*sz;
'set line 1 1 6'
'draw line 'zx11' 'zy11' 'zx12' 'zy12''
zx21=zx11+0.07*sz;zx22=zx21-0.03*sz;
zy21=zy11-0.31*sz;zy22=zy21-0.1*sz;
'draw line 'zx21' 'zy21' 'zx22' 'zy22''
zx31=zx21-0.19*sz;zx32=zx31+0.02*sz;
zy31=zy21-0.41*sz;zy32=zy31-0.11*sz;
'draw line 'zx31' 'zy31' 'zx32' 'zy32''
zx41=zx31+0.35*sz;zx42=zx41-0.08*sz;
zy41=zy31-0.24*sz;zy42=zy41-0.05*sz;
'draw line 'zx41' 'zy41' 'zx42' 'zy42''
zx51=zx41+0.23*sz;zx52=zx51-0.05*sz;
zy51=zy41+0.30*sz;zy52=zy51-0.09*sz;
'draw line 'zx51' 'zy51' 'zx52' 'zy52''
zx61=zx51+0.21*sz;zx62=zx61-0.04*sz;
zy61=zy51+0.42*sz;zy62=zy61-0.10*sz;
'draw line 'zx61' 'zy61' 'zx62' 'zy62''
zx71=zx61+0.01*sz;zx72=zx71;
zy71=zy61+0.28*sz;zy72=zy71-0.10*sz;
'draw line 'zx71' 'zy71' 'zx72' 'zy72''
zx81=zx71+0.08*sz;zx82=zx81-0.07*sz;
zy81=zy71+0.22*sz;zy82=zy81-0.08*sz;
'draw line 'zx81' 'zy81' 'zx82' 'zy82''
zx91=zx81+0.12*sz;zx92=zx91-0.08*sz;
zy91=zy81+0.12*sz;zy92=zy91-0.05*sz;
'draw line 'zx91' 'zy91' 'zx92' 'zy92''
'set lon 105 123'
'set lat 0 25'
'set parea 'xleft' 'xright' 'ybottom' 'ytop''
'set mpdset cnworld cnhimap'
'draw map'
'set parea off'
'set vpage off'
* 段1 首: 在南海诸岛附图中标明经纬度。
'set lon 'lon1' 'lon2''
'set lat 'lat1' 'lat2''
'set cthick 1'
'set xlopts 1 3 0.12'
'set ylopts 1 3 0.12'
'set xlab on'
'set ylab on'
'set xlpos -20.0'
'set ylpos -20.0'
*'set ylevs 2 10 18'
*'set xlevs 110 120'
'set lon 105 123'
'set lat 0 25'
'set parea 'xleft' 'xright' 'ybottom' 'ytop''
* 段1 尾: 在南海诸岛附图中标明经纬度。
* 段2 首: 在南海诸岛附图中显示与主图一致的物理量分布。
'set grid off'
'set grads off'
'set gxout 'ptype
*'set time aug2013'
*'set t 1'
*say 111111
*say ptype
if(ptype=Contour | ptype=Shaded | ptype=Fgrid | ptype=shade2b)
say levs
say cols
'set clevs 'levs
'set ccols 'cols
'd 'v1''
endif

if(ptype= Vector | ptype = Stream)
    if(v3='')
    'd 'v1';'v2''    
    else
    'd 'v1';'v2';'v3''
    endif
endif

if(ptype=Value | ptype = Model | ptype = Grid)
 'd 'v1''  
endif

if(lab=on)
'axis -type t -position o -label on -start 110 -end 120 -interval 10   -sinterval 2 -lthick 5 -lsize 0.1 -voffset -0.08 -size 0.2'
'axis -type r  -position o -label on -start 10 -end 20 -interval 10   -sinterval 2 -lthick 5 -lsize 0.1 -hoffset -0.08 -size 0.15'
 endif
*'set gxout contour'
*'set cint 3'
'basemap cnout 0 1'
*'set mpdset  cnhimap'
*'draw map'
* 段2 尾: 在南海诸岛附图中显示与主图一致的物理量分布。

'set vpage 0 'vp_x' 0 'vp_y''
'set parea 'pax_l' 'pax_r' 'pay_l' 'pay_r''
'set mpdset cnhimap'
'set lon 'lon1' 'lon2''
'set lat 'lat1' 'lat2''
*'set gxout 'ptype
*if(ptype=contour)
*    'set cthick 4'
*endif



***************************************************************
function GetVars(ags,vname)
*idea by QingFeng from http://bbs.06climate.com 
res=''
wrd='var'
idx=1
while(wrd!='')
  wrd=subwrd(ags,idx)
  if(wrd='-'%vname)
      idx=idx+1
      res=subwrd(ags,idx)
      break;
  endif
  idx=idx+1
endwhile
return res
************************************************************************************
************************************************************************************
function usage()
*
* Print usage information.
*
say '  Draw southsea with values.'
say ''
say '   Usage: southsea_value -v1 val1 -v2 val2 -v3 val3  -sz sz -lab on | off'
say ''
say '  Example 1: southsea_value -v air'
say '   -v1 (v2,v3) :  variables name (v2 and v3 for stream or vector plot)'
say '    -sz: the real size of the southsea map is original*sz  (default sz=(pax_r-pax_l)/8)'
say '   -lab: plot the axis of the little map or not  (default = on)'
say '  writte by Chen Dong in Sep 12, 2014'
say '   Thanks for the Modification By LY  in Sep 14, 2014'
say '  update by Chen Dong in Sep 15, 2014'
return
