***************************************************************************************

function draw1dline(args)
*
* Draw 1-D line with colors.
*
if(args='')
usage()
return
endif

num=GetVars(args,'num')
xtype=GetVars(args,'xtype')
v=GetVars(args,'v')
lthick=GetVars(args,'lthick')
lstyle=GetVars(args,'lstyle')
lcolor=GetVars(args,'lcolor')

if(num='');num=10;endif
if(lstyle='');lstyle=1;endif
if(lthick='');lthick=5;endif
if(lcolor='');lcolor='blue->aqua->white->orange->red';endif
'q config'
line=sublin(result,1)
wrd=subwrd(line,2)
str=substr(wrd,2,3)
vers=str*1.0
if(vers>=2.1)
    say 'version=' vers
    lnum=13+math_int(lthick*1.0)
    say 'lnum,lthick=' lnum lthick
    'set lwid 'lnum'  'lthick''
endif


GetLineMaxMin(v)
lcint=(_lmax-_lmin)/(num*1.0)
'color '_lmin' '_lmax' 'lcint' -kind 'lcolor''

say 'lcint=' lcint xtype
'q gxinfo'
line=sublin(result,5)
xaxis=subwrd(line,3)
yaxis=subwrd(line,6)


*         if(xtype='Time')
********************************************************
*             'c'
              'set stat on'
              'set ccolor 0'
              'set cmark 0'
              'set cstyle 1'
              'set cthick 1'
              'd 'v''            
              line=sublin(result,3)
              xstart=subwrd(line,4)
              xend=subwrd(line,6)
              'set stat off'
*              'set gxout line'   
           if(xaxis = xtype)                                              
              nn=xstart             
              while(nn<xend)
               if(xtype='Time')
               'set t 'nn''
                'd 'v''
                y0= subwrd(result, 4)
                'q time'
                x0= subwrd(result, 3)
                nn1=nn+1
                'set t 'nn1''
                'd 'v''
                y1= subwrd(result, 4)
                'q time'
                x1= subwrd(result, 3)   
             
               endif
               if(xtype='Lon')
                'set x 'nn''
                x0= subwrd(result, 4)
                'd 'v''           
                y0= subwrd(result, 4)
                nn1=nn+1
                'set x 'nn1''
                x1= subwrd(result, 4)
                'd 'v''
                y1= subwrd(result, 4)                     
               endif
               if(xtype='Lat')
                'set y 'nn''
                x0= subwrd(result, 4)
                'd 'v''           
                y0= subwrd(result, 4)
                nn1=nn+1
                'set y 'nn1''
                x1= subwrd(result, 4)
                'd 'v''
                y1= subwrd(result, 4)                     
               endif                 
               if(xtype='Lev')
                'set z 'nn''
                x0= subwrd(result, 4)
                'd 'v''           
                y0= subwrd(result, 4)
                nn1=nn+1
                'set z 'nn1''
                x1= subwrd(result, 4)
                'd 'v''
                y1= subwrd(result, 4)
                endif          
                'q w2xy 'x0' 'y0''
                xcoor0=subwrd(result,3)
                ycoor0=subwrd(result,6)
 
                
                'q w2xy 'x1' 'y1''
                xcoor1=subwrd(result,3)
                ycoor1=subwrd(result,6) 
                if(ycoor1>ycoor0)
                     y0=y0+lcint 
        
                     'q w2xy 'x0' 'y0''               
                     ycoor2=subwrd(result,6)
                else                       
                      y0=y0-lcint          
                     'q w2xy 'x0' 'y0''               
                     ycoor2=subwrd(result,6)   
                endif
                 
                if ((ycoor1-ycoor0)!=0)              
                     aa=(xcoor1-xcoor0)/(ycoor1-ycoor0)
                     ycint=ycoor2-ycoor0
                     xcint=ycint*aa               
                     xx0=xcoor0; yy0=ycoor0
                     xx1=xx0+xcint; yy1=yy0+ycint         
                else
                     xx1=xcoor1
                     yy1=ycoor1                               
                endif
                if(xx1<xcoor1)
                      while(xx1<xcoor1)
*************************************************************************                    
                          idx=1
                        while(idx<num+1)
                                mmin=_lmin+(idx-1)*lcint
                                mmax=_lmin+idx*lcint
                                'q w2xy 'x0' 'mmin''               
                                 ymin=subwrd(result,6)
                                'q w2xy 'x0' 'mmax''               
                                ymax=subwrd(result,6)
                                 if(yy0>=ymin&yy1<=ymax)
                                     color=idx+16
                            endif
                                 if(yy0<=ymax&yy1>=ymin)
                                     color=idx+16
                                endif
                           idx=idx+1                        
                         endwhile    
*********************************************************************** 
                    if(vers>=2.1) 
                     'set line 'color' 'lstyle' 'lnum''                    
                     else                                         
                    'set line 'color' 'lstyle' 'lthick''
                    endif
                    'draw line 'xx0' 'yy0'  'xx1' 'yy1''
                     
                    xx0=xx1; yy0=yy1
                    xx1=xx0+xcint; yy1=yy0+ycint
                  endwhile
*************************************************************************                    
                  idx=1
                  while(idx<num+1)
                     mmin=_lmin+(idx-1)*lcint
                     mmax=_lmin+idx*lcint
                     'q w2xy 'x0' 'mmin''               
                    ymin=subwrd(result,6)
                    'q w2xy 'x0' 'mmax''               
                    ymax=subwrd(result,6)
                     inum=idx+16

                     if(yy0>=ymin&ycoor1<=ymax)
                      color=inum
                      endif
                     if(yy0<=ymax&ycoor1>=ymin)
                     color=inum
                     endif
                   idx=idx+1                        
                  endwhile    
                    if(vers>=2.1) 
                     'set line 'color' 'lstyle' 'lnum''   
                     
                     else                                         
                    'set line 'color' 'lstyle' 'lthick''
                    endif
                  'draw line 'xx0' 'yy0'  'xcoor1' 'ycoor1''        
                else   
*************************************************************************                    
                 idx=1
                 while(idx<num+1)
                     mmin=_lmin+(idx-1)*lcint
                     mmax=_lmin+idx*lcint
                     'q w2xy 'x0' 'mmin''               
                     ymin=subwrd(result,6)
                     'q w2xy 'x0' 'mmax''               
                     ymax=subwrd(result,6)
                     inum=idx+16

                     if(yy0>=ymin&ycoor1<=ymax)
                      color=inum
                     endif
                     if(yy0<=ymax&ycoor1>=ymin)
                         color=inum
                     endif
                 idx=idx+1                        
                 endwhile                  
                    if(vers>=2.1) 
                     'set line 'color' 'lstyle' 'lnum''
                       
                     else                                         
                    'set line 'color' 'lstyle' 'lthick''
                    endif
                 'draw line 'xx0' 'yy0'  'xcoor1' 'ycoor1''                                         
                endif                                                                         
              nn=nn+1    
              endwhile
           else
              nn=xstart             
              while(nn<xend)
               if(xtype='Time')
               'set t 'nn''
                'd 'v''
                x0= subwrd(result, 4)
                'q time'
                y0= subwrd(result, 3)
                nn1=nn+1
                'set t 'nn1''
                'd 'v''
                x1= subwrd(result, 4)
                'q time'
                y1= subwrd(result, 3)                     
               endif
               if(xtype='Lon')
                'set x 'nn''
                y0= subwrd(result, 4)
                'd 'v''           
                x0= subwrd(result, 4)
                nn1=nn+1
                'set x 'nn1''
                y1= subwrd(result, 4)
                'd 'v''
                x1= subwrd(result, 4)                     
               endif
               if(xtype='Lat')
                'set y 'nn''
                y0= subwrd(result, 4)
                'd 'v''           
                x0= subwrd(result, 4)
                nn1=nn+1
                'set y 'nn1''
                y1= subwrd(result, 4)
                'd 'v''
                x1= subwrd(result, 4)                     
               endif                 
               if(xtype='Lev')
                'set z 'nn''
                y0= subwrd(result, 4)
                'd 'v''           
                x0= subwrd(result, 4)
                nn1=nn+1
                'set z 'nn1''
                y1= subwrd(result, 4)
                'd 'v''
                x1= subwrd(result, 4)
                endif          
 
                'q w2xy 'x0' 'y0''
                xcoor0=subwrd(result,3)
                ycoor0=subwrd(result,6)
 
                
                'q w2xy 'x1' 'y1''
                xcoor1=subwrd(result,3)
                ycoor1=subwrd(result,6) 
                if(xcoor1>xcoor0)
                     x0=x0+lcint           
                     'q w2xy 'x0' 'y0''               
                     xcoor2=subwrd(result,3)
                else
                      x0=x0-lcint           
                     'q w2xy 'x0' 'y0''               
                     xcoor2=subwrd(result,3)   
                endif
                 
                if ((xcoor1-xcoor0)!=0)              
                     aa=(ycoor1-ycoor0)/(xcoor1-xcoor0)
                     xcint=xcoor2-xcoor0
                     ycint=xcint*aa               
                     xx0=xcoor0; yy0=ycoor0
                     xx1=xx0+xcint; yy1=yy0+ycint         
                else
                     xx1=xcoor1
                     yy1=ycoor1                               
                endif
                if(yy1<ycoor1)
                      while(yy1<ycoor1)
*************************************************************************                    
                          idx=1
                        while(idx<num+1)
                                mmin=_lmin+(idx-1)*lcint
                                mmax=_lmin+idx*lcint
                                'q w2xy 'mmin' 'y0''               
                                 xmin=subwrd(result,3)
                                'q w2xy 'mmax' 'y0''               
                                xmax=subwrd(result,3)
                                 if(xx0>=xmin&xx1<=xmax)
                                     color=idx+16
                                 endif
                                 if(xx0<=xmax&xx1>=xmin)
                                     color=idx+16
                                endif
                           idx=idx+1                        
                         endwhile    
***********************************************************************                     
                    if(vers>=2.1) 
                     'set line 'color' 'lstyle' 'lnum''
                     
                     else                                         
                    'set line 'color' 'lstyle' 'lthick''
                    endif
                    'draw line 'xx0' 'yy0'  'xx1' 'yy1''
                     
                    xx0=xx1; yy0=yy1
                    xx1=xx0+xcint; yy1=yy0+ycint
                  endwhile
*************************************************************************                    
                  idx=1
                  while(idx<num+1)
                                mmin=_lmin+(idx-1)*lcint
                                mmax=_lmin+idx*lcint
                                'q w2xy 'mmin' 'y0''               
                                 xmin=subwrd(result,3)
                                'q w2xy 'mmax' 'y0''               
                                xmax=subwrd(result,3)
                                 if(xx0>=xmin&xx1<=xmax)
                                     color=idx+16
                                 endif
                                 if(xx0<=xmax&xx1>=xmin)
                                     color=idx+16
                                endif
                           idx=idx+1                       
                  endwhile    
                    if(vers>=2.1) 
                     'set line 'color' 'lstyle' 'lnum''
                      
                     else                                         
                    'set line 'color' 'lstyle' 'lthick''
                    endif
                  'draw line 'xx0' 'yy0'  'xcoor1' 'ycoor1''        
                else   
*************************************************************************                    
                     idx=1
                     while(idx<num+1)
                                mmin=_lmin+(idx-1)*lcint
                                mmax=_lmin+idx*lcint
                                'q w2xy 'mmin' 'y0''               
                                 xmin=subwrd(result,3)
                                'q w2xy 'mmax' 'y0''               
                                xmax=subwrd(result,3)
                                 if(xx0>=xmin&xx1<=xmax)
                                     color=idx+16
                                 endif
                                 if(xx0<=xmax&xx1>=xmin)
                                     color=idx+16
                                endif
                           idx=idx+1                       
                     endwhile                  
                    if(vers>=2.1) 
                     'set line 'color' 'lstyle' 'lnum''
   
                     else                                         
                    'set line 'color' 'lstyle' 'lthick''
                    endif
                 'draw line 'xx0' 'yy0'  'xcoor1' 'ycoor1''                                         
                endif                                                                         
              nn=nn+1    
              endwhile           
*           
           endif

*********************************************************************************   
if(xtype='Time')
    'set t 'xstart' 'xend''  
endif
if(xtype='Lat')
    'set y 'xstart' 'xend''      
endif
if(xtype='Lon')
    'set x 'xstart' 'xend''      
endif
if(xtype='Lev')
    'set z 'xstart' 'xend''      
endif
return

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
function GetLineMaxMin(v)
'q gxout'
*line=sublin(result,1)
*old=subwrd(line,3)
***********modify by Chen Dong********************
line=sublin(result,2)
old=subwrd(line,6)
*******************************************************
'set gxout stat'
'd 'v''
_lmax=''
_lmin=''

idx=1
while(1)
    line=sublin(result,idx)
    wrd=subwrd(line,1)
    if(line='');break;endif
    if(wrd='Min,')
        _lmax=subwrd(line,5)
        _lmin=subwrd(line,4)
        break;
    endif
    idx=idx+1
endwhile
'set gxout 'old''
return
***************************************************************************************
function usage()
*
* Print usage information.
*
say '  Draw 1-D line with colors.'
say ''
say '   Usage: draw1dlin -v Val -xtype Lon|Lat|Lev|Time -lthick cthick -num number -lstyle cstyle'
say ''
say '  Example 1: draw1dline -v djf -xtype Time -lthick 6 -num 10 -lstyle 1 -lcolor blue->aqua->white->orange->red'
say '   -v :  variable name in the ctl'
say '   -xtype: the axis except the variable-scale axis'
say '   -lthick:  the thickness of line'
say '   -lstyle: the style of the line graph'
say '   -lcolor: the colors of the line graph'
say '   -num: from max to min the line was divided to 'num' parts, the big num make the color line more smooth'
say ''
say '  Note: Proper capitalization MUST be used for key words Lon, Lat, Lev and Time.'
say '  writte by Chen Dong in May 5, 2014'

return

