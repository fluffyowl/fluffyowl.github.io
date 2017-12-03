import json
import time
import datetime

with open("test/test.json") as f:
    data = json.load(f)

cnt = {}

for d in data:
    t = d['ac_time']
    if t == '':
        continue
    t = datetime.datetime.strptime(t.split(' ')[0], '%Y-%m-%d')
    unixtime = int(time.mktime(t.timetuple()))
    if unixtime in cnt:
        cnt[unixtime] += 1
    else:
        cnt[unixtime] = 1

print json.dumps(cnt)
