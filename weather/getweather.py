import urllib,re
url="https://www.tianqiapi.com/api/?version=v1&city=%E9%9D%92%E5%B2%9B"
page=urllib.urlopen(url)
with open("weather.txt","w") as f:
    f.write(page.read())
imgurl="http://www.tianqiapi.com/api.php?style=ts&city=%e9%9d%92%e5%b2%9b"
page=urllib.urlopen(imgurl)
regex=re.compile("\"\./.*?\"")
links=regex.findall(page.read())
print links
for i in range(0,3):
    links[i]="http://www.tianqiapi.com"+links[i][2:-1]
    print links[i]
for i in range(0,3):
    with open("./image/"+str(i)+".png","wb") as f:
        png=urllib.urlopen(links[i])
        f.write(png.read())
print "Done."
