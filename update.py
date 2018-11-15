from urllib import urlopen
import re, os

#get weather
url = "https://www.tianqiapi.com/api/?version=v1&city=%E9%9D%92%E5%B2%9B"
page = urlopen(url)
with open("./weather/weather.txt","w") as f:
    f.write(page.read())
imgurl = "http://www.tianqiapi.com/api.php?style=ts&city=%e9%9d%92%e5%b2%9b"
page = urlopen(imgurl)
regex = re.compile("\"\./.*?\"")
links = regex.findall(page.read())
for i in range(0,3):
    links[i] = "http://www.tianqiapi.com"+links[i][2:-1]
for i in range(0,3):
    with open("./weather/image/"+str(i)+".png","wb") as f:
        png = urlopen(links[i])
        f.write(png.read())

#get people's daily
ls = os.listdir('./people/politics')
for i in ls:
    os.remove(os.path.join('./people/politics/', i))
ls = os.listdir('./people/world')
for i in ls:
    os.remove(os.path.join('./people/world/', i))

def getimg(page,types):
    thispage = page
    for i in re.findall('<img .*?src=".*?"', page) + re.findall('<IMG .*?src=".*?"', page):
        print(i)
        src = re.search('src=".*?"', i).group()[5 : -1]
        if src[0] == '/':
            src = 'http://www.people.com.cn' + src
        path = getpath(types)
        with open(path, 'wb') as f:
            f.write(urlopen(src).read())
        replaced = re.sub('src=".*?"', 'src="./tools'+path[1:]+'"', i)
        thispage = re.sub(i, replaced, thispage)
    return thispage
        
def getpath(types):
    files = os.listdir('./people/'+types)
    return './people/' + types + '/' + str(len(files)) + '.jpg'

url="http://www.people.com.cn/rss/politics.xml"
page=urlopen(url)
with open("./people/politics.xml","w") as f:
    f.write(getimg(page.read(), 'politics'))
url="http://www.people.com.cn/rss/world.xml"
page=urlopen(url)
with open("./people/world.xml","w") as f:
    f.write(getimg(page.read(), 'world'))
print "Done."
