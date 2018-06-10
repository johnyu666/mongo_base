# 测试用mongo数据

## 基础测试

db.users.drop();

db.users.insert({uname:'john',age:100,sex:true});

db.users.insert({uname:'johnson',age:67,sex:true});

db.users.insert({uname:'tom',age:98,sex:false});

db.users.insert({uname:'john',age:12,sex:true});

db.users.insert({uname:'alice',age:76,sex:false});

db.users.insert({uname:'mike',age:9,sex:true});


## 猴子与水果

db.monkey.insert({_id:1,name:'m1',fruit:['apple','bana','peach']}); 

db.monkey.insert({_id:2,name:'m2',fruit:['bana','peach','apple']}); 

db.monkey.insert({_id:3,name:'m3',fruit:['apple','peach']}); 

db.monkey.insert({_id:4,name:'m4',fruit:['kumquat','bana','peach']});


## 贴子评论
db.posts.insert({_id:1,title:'t1',date:new Date(1999,10,2),author:'john',content:'c1',comments:[{author:'li',comment:'cc1',score:3},{author:'bu',comment:'cc2',score:5}]});

db.posts.insert({_id:2,title:'t2',date:new Date(1998,09,12),author:'tom',content:'c2',comments:[{author:'bai',comment:'cc2',score:5},{author:'li',comment:'zhan',score:5}]});

db.posts.insert({_id:3,title:'xx1',date:new Date(2001,9,18),author:'mike',content:'ttx',comments:[{author:'john',comment:'cc5',score:5}]});

db.posts.insert({_id:4,title:'ww2',date:new Date(2102,10,9),author:'li',content:'nw',comments:[]});
