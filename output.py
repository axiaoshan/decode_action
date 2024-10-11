#2024-10-11 15:35:24
import hashlib
import requests
import os
import time
import random
def version():
 print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text)
class yuanshen():
 def __init__(self,cookie)->None:
  self.cookie=cookie
  self.verid="1.1.0"
  self.url="https://ksf.plscn.com"
  self.headers={"Host":"ksf.plscn.com","Connection":"keep-alive","Content-Length":"123","charset":"utf-8","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64 MiniProgramEnv/android","x-account-sign":"","x-account-key":"d3hiNmQ5M2Q3YWY5M2YzMWRh","content-type":"application/x-www-form-urlencoded","Accept-Encoding":"gzip,compress,br,deflate","Referer":"https://servicewechat.com/wxb6d93d7af93f31da/104/page-frame.html"}
 def sign_(self,e):
  n=[]
  for t in e.values():
   n.append(t)
  i="wxb6d93d7af93f31da"+"wa_smartgo"
  o=sorted(n)
  r=""
  for item in o:
   r+=str(item)
  r+=i
  return hashlib.md5(r.encode('utf-8')).hexdigest()
 def sign(self):
  sig_day=time.strftime("%Y-%m-%d",time.localtime())
  url=f"{self.url}/brandwxa/api/bonus/signin"
  data={"pageid":"733","signday":f"{sig_day}","encryptsessionid":f"{self.cookie}","qr":"0","timestamp":f"{int(time.time() * 1000)}","versionid":f"{self.verid}"}
  self.headers["x-account-sign"]=self.sign_(data)
  r=requests.post(url,data=data,headers=self.headers).json()
  if r['errcode']==0:
   print(f"🎉️签到成功，获得[{r['result']['signrecords'][0]['bonus']}]积分")
  else:
   print(f"⛔️签到失败[{r['errmsg']}]")
 def video(self):
  url=f"{self.url}/brandwxa/api/wxa/getarticles"
  data={"itemid":"1010","tagid":"61","pageno":"1","encryptsessionid":f"{self.cookie}","qr":"0","timestamp":f"{int(time.time() * 1000)}","versionid":"1.1.0"}
  self.headers["x-account-sign"]=self.sign_(data)
  r=requests.post(url,data=data,headers=self.headers).json()
  if r['errcode']==0:
   print("获取视频列表成功！")
   j=0
   for i in r['result']:
    id=i.get('articleid')
    url=f"{self.url}/brandwxa/api/wxa/onitemevt"
    data={"event":"viewvideo","type":"start","linkid":"0","articleid":f"{id}","itemid":"1010","encryptsessionid":f"{self.cookie}","qr":"0","timestamp":f"{int(time.time() * 1000)}","versionid":"1.1.0"}
    self.headers["x-account-sign"]=self.sign_(data)
    r=requests.post(url,data=data,headers=self.headers).json()
    if r['errcode']==0:
     print(f"🎉️观看视频ID:[{id}]----Ok!")
     j+=1
    else:
     print(f"⛔️观看视频ID[{id}]失败---[{r['errmsg']}]")
    time.sleep(random.randint(5,12))
    if j==3:
     break
 def userinfo(self):
  url=f"{self.url}/brandwxa/api/vip/getinfo"
  data={"itemid":"1201","encryptsessionid":f"{self.cookie}","qr":"0","timestamp":f"{int(time.time() * 1000)}","versionid":"1.1.0"}
  self.headers["x-account-sign"]=self.sign_(data)
  r=requests.post(url,data=data,headers=self.headers).json()
  if r['errcode']==0:
   print(f"💰️查询信息成功,用户剩余积分[{r['result']['vipbonus']}]")
  else:
   print(f"⛔️查询用户信息失败---[{r['errmsg']}]")
 def main(self):
  self.sign()
  self.video()
  self.userinfo()
if __name__=='__main__':
 version()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_ksf")
  if not cookie:
   print("请设置环境变量:yuanshen_ksf")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.main()
  print(f"--------第{i}个账号执行完毕--------")
  time.sleep(20)
  i+=1
