# 测试用mongo数据

db.posts.insert({_id:1,title:'t1',date:new Date(1999,10,2),author:'john',content:'c1',comments:[{author:'li',comment:'cc1',score:3},{author:'bu',comment:'cc2',score:5}]});
db.posts.insert({_id:2,title:'t2',date:new Date(1998,09,12),author:'tom',content:'c2',comments:[{author:'bai',comment:'cc2',score:5},{author:'li',comment:'zhan',score:5}]});
db.posts.insert({_id:3,title:'xx1',date:new Date(2001,9,18),author:'mike',content:'ttx',comments:[{author:'john',comment:'cc5',score:5}]});
db.posts.insert({_id:4,title:'ww2',date:new Date(2102,10,9),author:'li',content:'nw',comments:[]});
