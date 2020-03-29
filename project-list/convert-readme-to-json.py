import re

f = open("open-source-readme.txt")

big = []

for line in f:
    temp = []
    if line.startswith('##'):
        if line.startswith('Table of Contents', 3):
            continue
        elif line.startswith('Contribute', 3):
            continue
        elif line.startswith('License', 3):
            continue

        lang = line[3:]
        lang = lang[0:len(lang)-1]
        f.readline()

        while True:
            temp = []

            line2 = f.readline()

            if not line2.strip():
                break

            temp.append(str(lang).strip())

            idea = (re.search(r"\[.*?]", line2)).group(0)
            idea = idea[1:len(idea)-1]
            temp.append(str(idea).strip())

            link = (re.search(r"\(.*?\)", line2)).group(0)
            link = link[1:len(link)-1]
            temp.append(str(link).strip())

            desc = re.compile("<br>(.*)")
            desc = desc.findall(line2)[0]
            temp.append(str(desc).strip())

            big.append(temp)


with open('projects.txt', 'w') as f2:
    f2.write(str(big))

f2.close()
