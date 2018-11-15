import urllib,re
url="http://www.people.com.cn/rss/politics.xml"
page=urllib.urlopen(url)
with open("politics.xml","w") as f:
    f.write(page.read())
url="http://www.people.com.cn/rss/world.xml"
page=urllib.urlopen(url)
with open("world.xml","w") as f:
    f.write(page.read())
