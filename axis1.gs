*******************鑴氭湰浣跨敤璇存�?**********
*****************************************************************
*[绋嬪簭璁捐锛氭竻椋庯紝鏉ヨ嚜姘旇薄瀹跺洯璁哄潧 http://bbs.06climate.com] *
*                                                                                              *
*Modify by Chen Dong, April 10, 2014
******************************************************************************
*                  娉ㄦ剰锛氬湪浣燿isplay鍙橀噺鍓嶉渶瑕佸厛璁剧疆濡備笅涓や釜鍛戒�?                      *
*                  'set xlpos -20'                                                                            *
*                  'set ylpos -20'                                                                            *
*                  杩欐牱鑳藉灞忚斀GrADS鑷甫鐨勫潗鏍囪酱锛屽惁鍒欎細鍑虹幇鍧愭爣杞撮噸�?        *
******************************************************************************
*璇峰厛display鍙橀噺锛屽啀杩愯璇ヨ剼�?
*璇ヨ剼鏈富瑕佸疄鐜颁簡鑷畾涔夌殑鍧愭爣杞存樉绀猴紝鎮ㄥ彲浠ュ厤璐逛娇鐢ㄨ鑴氭湰 *
*璇ヨ剼鏈殑鐢ㄦ硶瑙勫垯濡備笅锛?
*axis -param1 val1 -param2 val2...
*鍏朵腑锛?param琛ㄧず闇€瑕佽嚜瀹氫箟鐨勫弬鏁扮被鍨嬶紝val琛ㄧず璇ュ弬鏁扮殑鍏蜂綋璁惧畾鍊?
*鍙傛暟鍜屽弬鏁板€煎繀椤绘垚瀵瑰嚭鐜帮紝渚嬪�?
*axis -type b -position o -sinterval 2
*涓婇潰鐨勮鍙ヨ〃绀虹粯鍒剁被鍨嬫槸搴曢儴鐨剎杞达紝鍒诲害浣嶇疆鏄湞澶栵紝姣忎袱涓ぇ鐨勫埢搴︿箣闂存樉绀轰袱涓皬鍒诲害�?
*娉ㄦ剰锛?type鏄繀閫夊弬鏁?
*鎵€鏈夊弬鏁板涓嬫墍绀猴細
*-type 锛氳〃绀虹粯鍒剁被鍨嬶紝鍙傛暟鍊兼湁锛歜/l/t/r 鍒嗗埆琛ㄧず搴曢儴锛屽乏渚э紝涓婇儴锛屽彸�?
*-label锛氳〃绀烘槸鍚︾粯鍒舵暟鍊兼爣绛撅紝鍙傛暟鍊兼湁锛歰n/off 鍒嗗埆琛ㄧず缁樺埗鍜屼笉缁樺�?
*-position锛氳〃绀哄埢搴︾殑浣嶇疆锛屽弬鏁板€兼湁锛歰/i/m 鍒嗗埆琛ㄧず澶栦晶锛屽唴渚э紝涓�?
*-start锛氳〃绀哄埢�?浠庤澶勫紑濮嬬粯鍒讹紝鍙傛暟鍊间负璇ヨ酱鑼冨洿鍐呯殑鏁板瓧
*褰撹杞翠负鏃堕棿杞存椂锛岃〃绀哄紑濮嬬粯鍒剁殑鏃舵锛?,2,3...�?
*-end锛氳〃绀哄埢搴︾殑缁撴潫浣嶇疆锛屽弬鏁板€艰寖鍥村悓start锛屾椂闂磋酱鏃惰〃绀虹粨鏉熺殑鏃跺埢(1,2,3...)                              
*-interval锛氳〃绀哄埢搴︾殑闂撮殧锛岄殧澶氬皯鍊肩粯鍒朵竴涓埢搴﹀拰鏍囩
*渚嬪锛屽綋x杞磋〃绀虹粡�?10-150E锛屽鏋渋nterval�?0锛岄粯璁ゆ儏鍐典笅浼氭爣�?10,120,130,140,150
*涓嶇粰瀹氳鍙傛暟鏃讹紝榛樿鎯呭喌涓嬶紝浼氱粯鍒?涓埢搴︼紝浠ユ纭畾榛樿闂撮殧
*-sinterval锛氳〃绀烘病涓や釜澶у埢搴︿箣闂磋缁樺埗鍑犱釜灏忕殑鍒诲害锛屼笉缁欏畾璇ュ弬鏁板垯涓嶇粯�?
*-size锛氳〃绀哄埢搴︾殑闀垮害锛屽崟浣嶆槸鑻卞锛岄粯璁や�?.1
*-color锛氳〃绀哄潗鏍囪酱鍜屽埢搴︽爣绛剧殑棰滆壊锛岄粯璁や�?
*-cthick锛氳〃绀哄潗鏍囪酱鍒诲害鐨勭矖缁嗭紝榛樿cthick=4
*-lfont锛氳〃绀哄潗鏍囪酱鏍囩鐨勫瓧浣擄紝榛樿涓哄綋鍓嶇幆澧冧笅璁剧疆鐨勫瓧�?
*-lsize锛氳〃绀哄潗鏍囪酱鏍囩鐨勫瓧浣撳ぇ灏忥紝榛樿�?.12
*-lthick锛氳〃绀哄潗鏍囪酱鏍囩瀛椾綋鐨勭矖缁嗭紝榛樿�?.3
*-langle锛氳〃绀哄潗鏍囪酱鏍囩鏃嬭浆鐨勮搴︼紝榛樿涓轰笉鏃嬭浆
*-suffix锛氳〃绀洪渶瑕佸湪姣忎釜鍧愭爣杞存爣绛惧悗闈㈡坊鍔犵殑鏂囧瓧鎴栬€呯鍙峰悗缂€锛屾瘮濡傜敤鏉ユ坊鍔犲害鏁扮�?
*-asuffix锛氳〃绀哄綋鍧愭爣杞翠负缁忕含搴﹁酱鏃讹紝鏄惁鑷姩娣诲姞E/W/N/S/EQ杩欑鏍囪锛岄粯璁や负娣诲姞锛?
*鍙傛暟鍊间负 on/off 锛屽垎鍒〃绀鸿嚜鍔ㄦ坊鍔犲拰鍏抽棴鑷姩娣诲�?
*-hoffset锛氳〃绀哄潗鏍囪酱鏍囩鍦ㄦ按骞虫柟鍚戜笂鐨勫亸绉婚噺锛屽崟浣嶄负鑻卞锛屾璐熷潎�?
*-voffset锛氳〃绀哄潗鏍囪酱鏍囩鍦ㄥ瀭鐩存柟鍚戜笂鐨勫亸绉婚噺锛屽崟浣嶄负鑻卞锛屾璐熷潎�?
*-tformat锛氬綋鎵€缁樺埗鍧愭爣杞翠负鏃堕棿杞存椂浜х敓浣滅敤锛岃〃绀鸿鏄剧ず鐨勬椂闂存牸寮?
*鍙傛暟鍊间负y m d h 杩欏洓涓瓧姣嶇殑浠绘剰缁勫悎锛屽垎鍒〃绀哄勾鏈堟棩鏃?
*濡傦�?tformat my 鍒欎細灏嗘椂闂磋酱鏍囩鏄剧ず涓篔AN1951杩欑鏍煎紡
*-v锛氬綋缁樺埗鍥惧舰鏄?-D鍥撅紙set gxout line绛夛級鐨勬椂鍊欐槸蹇呴€夊弬鏁帮紝琛ㄧず褰撳墠display鐨勬槸鍝釜鍙橀�?

function main(args)
'q gxinfo'
line=sublin(result,1)
wrd = subwrd(line,4) 
if(wrd = 'clear' | wrd = 'Clear') 
    say 'Nothing displayed' 
  return
endif
if(args='')
    say 'Usage=>the format of command like'
    say 'axis -type b -label on -position o'
    say 'that means draw the axis on bottom with label on,an the scale will be outside of the frame'
    say 'please open the axis.gs to find more params'
  return
endif
line=sublin(result,5)
wrd=subwrd(line,3)
xtype=TypeTran(wrd)
wrd=subwrd(line,6)
ytype=TypeTran(wrd)
if(xtype='E'|ytype='E');say 'E dim is not suppotred by the script yet';return;endif
type=GetVars(args,'type')
label=GetVars(args,'label')
posi=GetVars(args,'position')
ss=GetVars(args,'start')
ee=GetVars(args,'end')
interv=GetVars(args,'interval')
sinterv=GetVars(args,'sinterval')
size=GetVars(args,'size')
color=GetVars(args,'color')
cthick=GetVars(args,'cthick')
suff=GetVars(args,'suffix')
hoffset=GetVars(args,'hoffset')
voffset=GetVars(args,'voffset')
tf=GetVars(args,'tformat')
v=GetVars(args,'v')
_lfont=GetVars(args,'lfont')
_lsize=GetVars(args,'lsize')
_lthick=GetVars(args,'lthick')
_langle=GetVars(args,'langle')
_autosuff=GetVars(args,'asuffix')
if(type='')
  say '-type arg must be set'
  return
endif
if(label='');label='on';endif
if(posi='');posi = 'I';endif
if(sinterv='');sinterv=0;endif
if(sinterv<0);sinterv=math_abs(sinterv);endif
if(size='');size=0.1;endif
if(color='');color=1;endif
if(cthick='');cthick=4;endif
if(hoffset='');hoffset=0;endif
if(tf='');tf='my';endif
if(voffset='');voffset=0;endif
if(_lsize='');_lsize=0.12;endif
if(_lthick='');_lthick=0.3;endif
if(_langle='');_langle=0;endif
size=math_abs(size)
'q dims'
id=1
xstart=''
ystart=''
xend=''
yend=''
start1=''
start2=''
end1=''
end2=''
while(id<=6)
  line=sublin(result,id)
  wrd=subwrd(line,1)
  if(wrd=xtype)
    xstart=subwrd(line,6)
    xend=subwrd(line,8)
  endif
  if(wrd=ytype)
    ystart=subwrd(line,6)
    yend=subwrd(line,8)
  endif
  if(xstart!='' & ystart!='');break;endif
  id=id+1
endwhile
if(xstart=''  )
    if(v='');say '1-D plot need -v params';return;endif
    GetLineMaxMin(v)
    xstart = _lmin
    xend = _lmax
endif
if(ystart='')
    if(v='');say '1-D plot need -v params';return;endif
    GetLineMaxMin(v)
    ystart = _lmin
    yend = _lmax
endif
if(type='B'|type='b'|type='T'|type='t')
    start1 = xstart
    end1 = xend
    start2 = ystart
    end2 = yend
else
    start1 = ystart
    end1 = yend
    start2 = xstart
    end2 = xend
endif
if(ss='')
    ss = start1
endif
if(ee='')
    ee = end1
endif
if(IsTargAxis(xtype,ytype,type,'T')=0)
********modify by Chen Dong*****************************************
*  if(ss!='');start1=ss;endif
*  if(ee!='');end1=ee;endif
  if(interv='')
    icount=5
    interv=math_int((end1-start1)/icount)
    if(sinterv!=0)
     lcint=(interv*1.0)/(sinterv*1.0)
    else
     lcint=interv*1.0
    endif
*        say 'testtest,ss=' ss 'start1=' start1 'interv=' interv 'xstart=' xstart 'ystart=' ystart
    icount1=math_int((ss-start1)/interv)
    icount2=math_int((ss-icount1*interv-start1)/lcint)
****use ee1 because sometimes the ee is not integer multiples of the interv
    ee1=ss+math_int((ee-ss)/interv)*interv
    icount3=math_int((end1-ee1)/interv)
    icount4=math_int((end1-(ee1+icount3*interv))/lcint)

    startss=ss-icount1*interv
    endss= ee1+icount3*interv
  else
*    icount=math_int((end1-start1)/interv)
*********modify by Chen Dong******************************************

    if(sinterv!=0)
     lcint=(interv*1.0)/(sinterv*1.0)
    else
     lcint=interv*1.0
    endif
*        say 'testtest,ss=' ss 'start1=' start1 'interv=' interv 'xstart=' xstart 'ystart=' ystart
    icount1=math_int((ss-start1)/interv)
    icount2=math_int((ss-icount1*interv-start1)/lcint)
****use ee1 because sometimes the ee is not integer multiples of the interv
    ee1=ss+math_int((ee-ss)/interv)*interv
    icount3=math_int((end1-ee1)/interv)
    icount4=math_int((end1-(ee1+icount3*interv))/lcint)

    startss=ss-icount1*interv
    endss= ee1+icount3*interv
    icount=math_int((endss-startss)/interv)
*    icount=math_int((ee-ss)/interv)
***********************************************************************
    if(icount<0)
      icount=math_abs(icount)
      interv=math_abs(interv)*(-1)
    endif
  endif
  if(icount>=1000)
      say 'Your data undef value my be wrong!'
      return
  endif
***********modify by Chen Dong for the first axises little scales*************

**  now = start1
 now = ss-(icount1*interv+icount2*lcint)

  nowcount = 1
  while(nowcount <= icount2)
    nowlbl=GetLbl(now,xtype,ytype,type,suff)
    GetNowPos(type,now,start2,end2)
    nowpos.x=_pos.x
    nowpos.y=_pos.y
    
    DrawAxis(posi,type,nowpos.x,nowpos.y,size*0.6,color,cthick/0.6,hoffset,voffset,nowlbl,suff,'off')  

    now = now+((interv*1.0)/(sinterv*1.0))
    nowcount=nowcount+1
*    lastpos.x=nowpos.x
*    lastpos.y=nowpos.y    
  endwhile

*****************************************************************************
now = ss-icount1*interv
nowcount = 1
  while(nowcount <= icount+1)
    nowlbl=GetLbl(now,xtype,ytype,type,suff)

    GetNowPos(type,now,start2,end2)
    nowpos.x=_pos.x
    nowpos.y=_pos.y
*****modify by Chen Dong*******************************************
    if(now >= ss & now<=ee)
        DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,label)
    else
      if(now<=ss & now>=ee)
        DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,label)      
      else
        DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,'off')
      endif
    endif
************************************************************************    
*    DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,label)
    if(nowcount>1 & sinterv != 0)
      DrawSAxis(lastpos.x,lastpos.y,nowpos.x,nowpos.y,size,sinterv,posi,type,color,cthick,hoffset,voffset,nowlbl,suff) 
    endif
    now = now+interv
    nowcount=nowcount+1
    lastpos.x=nowpos.x
    lastpos.y=nowpos.y
  endwhile
************modify by Chen Dong for the last axises little scales**********************

   now = ee1+icount3*interv+lcint

   nowcount = 1
   while(nowcount <= icount4)
    nowlbl=GetLbl(now,xtype,ytype,type,suff)
    GetNowPos(type,now,start2,end2)
    nowpos.x=_pos.x
    nowpos.y=_pos.y
    
    DrawAxis(posi,type,nowpos.x,nowpos.y,size*0.6,color,cthick*0.6,hoffset,voffset,nowlbl,suff,'off')  

    now = now+((interv*1.0)/(sinterv*1.0))
    nowcount=nowcount+1
*    lastpos.x=nowpos.x
*    lastpos.y=nowpos.y    
  endwhile

*****************************************************************************
else
  'q dims'
  line=sublin(result,5)
  tstart=subwrd(line,11)
  tend=subwrd(line,13)

*  if(ss!='');tstart = ss;endif
*  if(ee!='');tend=ee;endif
  if(interv='')
    if((tend-tstart)>10)
      interv = 5
    else
      interv = 1
    endif
  endif
  interv=math_abs(interv)

*********modify by Chen Dong******************************************
    if(sinterv!=0)
     lcint=(interv*1.0)/(sinterv*1.0)
    else
     lcint=interv*1.0
    endif
*say 'testtest,ss=' ss 'start1=' start1 'interv=' interv 'xstart=' xstart 'ystart=' ystart
    icount1=math_int((ss-tstart)/interv)

    icount2=math_int((ss-icount1*interv-tstart)/lcint)
****use ee1 because sometimes the ee is not integer multiples of the interv
    ee1=ss+math_int((ee-ss)/interv)*interv
    icount3=math_int((tend-ee1)/interv)
    icount4=math_int((tend-(ee1+icount3*interv))/lcint)

    startss=ss-icount1*interv
    endss= ee1+icount3*interv
    icount=math_int((endss-startss)/interv)

*  icount=(tend-tstart)/interv
**********************modify end************************************************  
 it = ss-(icount1*interv+icount2*lcint)

 while(it <= icount2*interv)
    'set t 'it''
    now = GetDimWrd(5,6)
    GetNowPos(type,now,start2,end2)
    nowpos.x=_pos.x
    nowpos.y=_pos.y
    nowlbl=GetTimeLbl(tf,now)
*    
    DrawAxis(posi,type,nowpos.x,nowpos.y,size*0.6,color,cthick*0.6,hoffset,voffset,nowlbl,suff,'off')  
*
    it = it+lcint
 
  endwhile
  'set time 'start1' 'end1''  
*********************************************************************************
*  it = tstart
   it = ss-icount1*interv

  if(icount>1000)
      say 'can't draw any more'
      return
  endif
  while(it<=tend)
    'set t 'it''
    now = GetDimWrd(5,6)
    GetNowPos(type,now,start2,end2)
    nowpos.x=_pos.x
    nowpos.y=_pos.y
    nowlbl=GetTimeLbl(tf,now)
*****modify by Chen Dong*******************************************
    if(it >= ss & it<=ee)
        DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,label)
    else
        DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,'off')
    endif
***********end******************************************************
*       DrawAxis(posi,type,nowpos.x,nowpos.y,size,color,cthick,hoffset,voffset,nowlbl,suff,label)  
*    if(it>tstart & sinterv!=0)
     if(it>tstart*interv & sinterv!=0)

      DrawSAxis(lastpos.x,lastpos.y,nowpos.x,nowpos.y,size,sinterv,posi,type,color,cthick,hoffset,voffset,nowlbl,suff) 
    endif
    it=it+interv
    lastpos.x=nowpos.x
    lastpos.y=nowpos.y
  endwhile  
  'set time 'start1' 'end1'' 
****************modify by Chen Dong*************************************************** 
 it = ee1+icount3*interv+lcint

 while(it <= tend)
    'set t 'it''
    now = GetDimWrd(5,6)
    GetNowPos(type,now,start2,end2)
    nowpos.x=_pos.x
    nowpos.y=_pos.y
    nowlbl=GetTimeLbl(tf,now)
*    
    DrawAxis(posi,type,nowpos.x,nowpos.y,size*0.6,color,cthick*0.6,hoffset,voffset,nowlbl,suff,'off')  
*
    it = it+lcint
 
  endwhile
  'set time 'start1' 'end1''  
*********************************************************************************
endif    
say 'welcome to http://bbs.06climate.com'
return
*main function end

function GetLineMaxMin(v)
'q gxout'
*line=sublin(result,1)
*old=subwrd(line,3)
***********modify by Chen Dong***************************
line=sublin(result,2)
old=subwrd(line,6)
*********************************************************

*old=subwrd(line,3)
'set gxout stat'
'd 'v''
_lmax=''
_lmin=''

idx=1
while(1)
    line=sublin(result,idx)
    wrd=subwrd(line,1)
    if(line='');break;endif
    if(wrd='Cmin,')
        _lmax=subwrd(line,6)
        _lmin=subwrd(line,5)
        break;
    endif
    idx=idx+1
endwhile
'set gxout 'old''
return

function DrawSAxis(lastx,lasty,nx,ny,size,sinterv,posi,type,color,cthick,hoffset,voffset,nowlbl,suff)
sidx = 1
if(lastx=nx)
  dy=(ny-lasty)/(sinterv*1.0)
else
  dx=(nx-lastx)/(sinterv*1.0)
endif
nowx=nx
nowy=ny
while(sidx < sinterv)
  if(lastx=nx)
    nowy=nowy-dy
  else
    nowx=nowx-dx
  endif
  DrawAxis(posi,type,nowx,nowy,size*0.6,color,cthick*0.6,hoffset,voffset,nowlbl,suff,'off')
  sidx=sidx+1
endwhile 
return

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

function DrawAxis(posi,type,posx,posy,size,color,cthick,hoffset,voffset,nowlbl,suff,label)
size1 = size/2.0
dh=0.25
dv=0.13
nowpos.x=posx;nowpos.y=posy
if(posi='I'|posi='i')
      if(type='b'|type='B')
        DrawLine(nowpos.x,nowpos.y,nowpos.x,nowpos.y+size,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x+hoffset,nowpos.y+voffset-dv,nowlbl,color,size,suff)
        endif
      endif
      if(type='l'|type='L')
        DrawLine(nowpos.x,nowpos.y,nowpos.x+size,nowpos.y,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x-dh+hoffset,nowpos.y+voffset,nowlbl,color,size,suff)
        endif
      endif
      if(type='t'|type='T')
          DrawLine(nowpos.x,nowpos.y,nowpos.x,nowpos.y-size,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x+hoffset,nowpos.y+voffset+dv,nowlbl,color,size,suff)
        endif
      endif
      if(type='r'|type='R')
          DrawLine(nowpos.x,nowpos.y,nowpos.x-size,nowpos.y,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x+hoffset+dh,nowpos.y+voffset,nowlbl,color,size,suff)
        endif
      endif
    endif
    if(posi='O'|posi='o')
      if(type='b'|type='B')
          DrawLine(nowpos.x,nowpos.y,nowpos.x,nowpos.y-size,color,cthick)
          if(label='on')
              DrawLbl(nowpos.x+hoffset,nowpos.y-size+voffset-dv,nowlbl,color,size,suff)
        endif
      endif
      if(type='l'|type='L')
          DrawLine(nowpos.x,nowpos.y,nowpos.x-size,nowpos.y,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x-size+hoffset-dh,nowpos.y+voffset,nowlbl,color,size,suff)
        endif
      endif
      if(type='t'|type='T')
          DrawLine(nowpos.x,nowpos.y,nowpos.x,nowpos.y+size,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x+hoffset,nowpos.y+size+voffset+dv,nowlbl,color,size,suff)
        endif
      endif
      if(type='r'|type='R')
          DrawLine(nowpos.x,nowpos.y,nowpos.x+size,nowpos.y,color,cthick)
        if(label='on')
            DrawLbl(nowpos.x+size+hoffset+dh,nowpos.y+voffset,nowlbl,color,size,suff)
        endif
      endif
    endif
    if(posi='M'|posi='m')
        if(type='B'|type='b'|type='T'|type='t')
          DrawLine(nowpos.x,nowpos.y,nowpos.x,nowpos.y+size1,color,cthick)
          DrawLine(nowpos.x,nowpos.y,nowpos.x,nowpos.y-size1,color,cthick)
          if((type='B'|type='b') & (label='on'))
              DrawLbl(nowpos.x+hoffset,nowpos.y-size1+voffset-dv,nowlbl,color,size,suff)
          endif
          if((type='T'|type='t') & (label='on'))
              DrawLbl(nowpos.x+hoffset,nowpos.y+size1+voffset+dv,nowlbl,color,size,suff)
          endif   
        endif
        if(type='l'|type='L'|type='r'|type='R')
          DrawLine(nowpos.x,nowpos.y,nowpos.x-size1,nowpos.y,color,cthick)
          DrawLine(nowpos.x,nowpos.y,nowpos.x+size1,nowpos.y,color,cthick)   
          if((type='l'|type='L') & (label='on'))
              DrawLbl(nowpos.x-size1+hoffset-dh,nowpos.y+voffset,nowlbl,color,size,suff)
          endif
          if((type='R'|type='r') & (label='on'))
              DrawLbl(nowpos.x+size1+hoffset+dh,nowpos.y+voffset,nowlbl,color,size,suff)
          endif
        endif
    endif  
return

function GetTimeLbl(tf,lbl)
idx=1
res=''
while(1)
    wrd=substr(tf,idx,1)
    if(wrd='');break;endif
    res=res%GetSingleTimeLbl(wrd,lbl)
    idx=idx+1
endwhile
if(res='');res=lbl;endif
return res

function GetSingleTimeLbl(tf,lbl)
if(tf='h'|tf='H')
    lbl=substr(lbl,1,3)
endif
if(tf='d'|tf='D')
    lbl=substr(lbl,4,2)
endif
if(tf='m'|tf='M')
    lbl=substr(lbl,6,3)
endif
if(tf='y'|tf='Y')
    lbl=substr(lbl,9,4)
endif
return lbl

function GetDimWrd(lidx,widx)
res=''
'q dims'
line=sublin(result,lidx)
res=subwrd(line,widx)
return res

function GetLbl(lbl,xtype,ytype,type,suff)
tmplbl=lbl
lbl=lbl%suff
if(_autosuff='off');return lbl;endif
if(type='b'|type='B'|type='t'|type='T')
  comptype = xtype
else
  comptype = ytype
endif  
if(comptype='X')
   if(tmplbl>=0)
    if(tmplbl<=360)
        tmplbl=tmplbl
    else
        tmplbl=tmplbl-math_int(tmplbl/360)*360
    endif
    ii=math_int(tmplbl/180) 
    if(ii=0)
        tmplbl = tmplbl
        if(tmplbl!=0)
           tmplbl=tmplbl%suff
           lbl=tmplbl%'`1E'
        else
           tmplbl=tmplbl%suff
           lbl= tmplbl
        endif
    endif
    if(ii=1)
        if(tmplbl!=180)
           tmplbl = 180-(tmplbl-ii*180)
           tmplbl=tmplbl%suff       
           lbl=tmplbl%'`1W'
        else
           tmplbl=tmplbl%suff
           lbl= tmplbl
        endif        
    endif
    if(ii=2)
        tmplbl=tmplbl-360
        tmplbl=tmplbl%suff
        lbl=tmplbl
    endif    
   endif  

if(tmplbl<=0)
   tmplbl=math_abs(tmplbl)
   
   if(tmplbl>=0)
    if(tmplbl<=360)
        tmplbl=tmplbl
    else
        tmplbl=tmplbl-math_int(tmplbl/360)*360
    endif
    ii=math_int(tmplbl/180) 
    if(ii=0)
        tmplbl = tmplbl
        if(tmplbl!=0)
           tmplbl=tmplbl%suff
           lbl=tmplbl%'`1W'
        else
           tmplbl=tmplbl%suff
           lbl= tmplbl
        endif
    endif
    if(ii=1)
        if(tmplbl!=180)
           tmplbl = 180-(tmplbl-ii*180)
           tmplbl=tmplbl%suff       
           lbl=tmplbl%'`1E'
        else
           tmplbl=tmplbl%suff
           lbl= tmplbl
        endif        
    endif
    if(ii=2)
        tmplbl=tmplbl-360
        tmplbl=tmplbl%suff
        lbl=tmplbl
    endif    
   endif  
 endif
endif
if(comptype='Y')
  if(tmplbl>0)
    lbl=lbl%'`1N'
*    say lbl
  else
    if(tmplbl=0)
*      lbl=lbl%'`1EQ'
       lbl=EQ
    else
      tmplbl=math_abs(tmplbl)
      lbl=lbl%'`1S'
    endif
  endif
endif
return lbl

function DrawLine(px1,py1,px2,py2,color,cthick)
'set line 'color' 1 'cthick''
'draw line 'px1' 'py1' 'px2' 'py2''  
return

function DrawLbl(px,py,lbl,color,size,suff)
if(lbl!='')
*  if(lbl!='EQ')
*    lbl=lbl%suff
*  endif
  'set string 'color' c '_lthick' '_langle''
  'set strsiz '_lsize''
  if(_lfont!='')
    'set font '_lfont''
    say 'You have set font '_lfont''
  endif
  'draw string 'px' 'py' 'lbl''
endif
return

function GetPos(wx,wy)
'q w2xy 'wx' 'wy''
_pos.x=subwrd(result,3)
_pos.y=subwrd(result,6)
return

function GetNowPos(type,now,start2,end2) 
    if(type='b'|type='B')
      nowpos.x=now
      nowpos.y=start2
    endif
    if(type='t'|type='T')
      nowpos.x=now
      nowpos.y=end2
    endif
    if(type='l'|type='L')
      nowpos.x=start2
      nowpos.y=now
    endif
    if(type='r'|type='R')
      nowpos.x=end2
      nowpos.y=now
    endif
GetPos(nowpos.x,nowpos.y)  
return

function IsTargAxis(xtype,ytype,type,targ)
res = 0
if(xtype=targ & (type='B'|type='b'|type='T'|type='t'))
    res = 1
endif
if(ytype=targ & (type='L'|type='l'|type='R'|type='r'))
    res = 1
endif
return res

function TypeTran(dim)
res=''
if(dim='Lat');res='Y';return res;endif
if(dim='Lon');res='X';return res;endif
if(dim='Time');res='T';return res;endif
if(dim='Lev');res='Z';return res;endif
if(dim='Val');res='val';return res;endif
return 'E'