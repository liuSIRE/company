 set names utf8;
 DROP  DATABASE IF  EXISTS  ylw;
 create database ylw charset utf8;

 create table users(
 uid int primary key Auto_increment,
 uname varchar(8),
 uphone varchar(12),
 email  varchar(20),
 question text
 );
 insert into users values(
 1,'tom',17316288196,'495200056@qq.com','没有问题，特别好！'
 );
 create table news(
 nid  int primary key Auto_increment,
title varchar(128),
time  Datetime,
content text,
img_url varchar(128),
 );
  insert into news values(
  null,'「重磅！」寓乐湾与加拿大环球国际高中Global Education Academy达成战略合作！','now()','10月11日，北京寓乐世界教育科技有限公司
  （简称：寓乐湾）与加拿大环球国际高中Global Education Academy成功签署战略合作协议。加拿大环球国际高中Global Education Academy 
  总裁James Song、寓乐湾CEO刘斌立等双方领导共同出席了此次签约仪式。',''
 );
  insert into news values(
  null,'范冰冰致歉信成中学病句修改范文，网民调侃冰冰语文没学好，缺个写作好老师！','now()','范冰冰自阴阳合同事件被曝“偷税漏税”后，
  成为了全民关注的焦点。10月3日，相关部门经过调查核实后，案件事实已经查清。其中主要人员范冰冰被责令按期缴纳税款、滞纳金、罚款8亿余元。
  在10月3日当天，范冰冰通过微博更新发布了“致歉信”就偷逃税进行道歉。明星们“致歉信”中的内容，
  不用多说，无非就是承认错误，愿意承担任何惩罚，保证不再犯。',''
 );
 insert into news values(
  null,'竞赛不再作为入学依据，入学敲门砖该何去何从！','now()','近日，教育部办公厅印发了《关于面向中小学生的全国性竞赛活动管理办法（试行）》（以下简称《办法》），对中小学生竞赛活动作出了具体的规定。',''
 );
 insert into news values(
  null,'喜大普奔，寓文网创意写作正式上线啦','now()','爱上生活，快乐写作。9月18日18时，寓文网正式上线啦！',''
 );
 insert into news values(
  null,'「重磅！」寓乐湾与加拿大环球国际高中Global Education Academy达成战略合作！','now()','10月11日，北京寓乐世界教育科技有限公司
  （简称：寓乐湾）与加拿大环球国际高中Global Education Academy成功签署战略合作协议。加拿大环球国际高中Global Education Academy 
  总裁James Song、寓乐湾CEO刘斌立等双方领导共同出席了此次签约仪式。',''
 );
  insert into news values(
  null,'范冰冰致歉信成中学病句修改范文，网民调侃冰冰语文没学好，缺个写作好老师！','now()','范冰冰自阴阳合同事件被曝“偷税漏税”后，
  成为了全民关注的焦点。10月3日，相关部门经过调查核实后，案件事实已经查清。其中主要人员范冰冰被责令按期缴纳税款、滞纳金、罚款8亿余元。
  在10月3日当天，范冰冰通过微博更新发布了“致歉信”就偷逃税进行道歉。明星们“致歉信”中的内容，
  不用多说，无非就是承认错误，愿意承担任何惩罚，保证不再犯。',''
 );
 insert into news values(
  null,'竞赛不再作为入学依据，入学敲门砖该何去何从！','now()','近日，教育部办公厅印发了《关于面向中小学生的全国性竞赛活动管理办法（试行）》（以下简称《办法》），对中小学生竞赛活动作出了具体的规定。',''
 );
 insert into news values(
  null,'喜大普奔，寓文网创意写作正式上线啦','now()','爱上生活，快乐写作。9月18日18时，寓文网正式上线啦！',''
 );
  create table course(
 cid  int primary key Auto_increment,
title varchar(128),
teacher varchar(12),
people int,
img_url varchar(128),
 );
  insert into course values(
  null,'scratch课程之做梦的汤姆','王宁','45','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );
  insert into course values(
  null,'scratch课程之做梦的汤姆','王宁','45','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );

  insert into course values(
  null,'scratch课程之做梦的汤姆','王宁','45','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );
  insert into course values(
  null,'创意写作课程之爱丽丝与神秘人','刘强','55','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );
   insert into course values(
  null,'创意写作课程之爱丽丝与神秘人','刘强','55','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );
   insert into course values(
  null,'创意写作课程之爱丽丝与神秘人','刘强','55','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );
   insert into course values(
  null,'创意写作课程之爱丽丝与神秘人2','利达','65','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );  insert into course values(
  null,'创意写作课程之爱丽丝与神秘人2','利达','65','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );  insert into course values(
  null,'创意写作课程之爱丽丝与神秘人2','利达','65','http://127.0.0.1:3000/images/8991a0bc17474d3e862445ca2887137c.jpg'
 );

 create table yw_course(
 cid  int primary key Auto_increment,
title varchar(128),
time  Datetime,
img_url varchar(128),
yw_yw_course_type varchar(128),
price_new  varchar(128),
price_old varchar(128),
people int,
family_id int
 );
 insert into yw_yw_course values(
  null,'小学高年级|叙事篇1对6','报名中','http://127.0.0.1:3000/images/20181024164936033.jpg','小班直播','980','1600','20',1
 );
  insert into yw_yw_course values(
  null,'小学高年级|叙事篇1对6','报名中','http://127.0.0.1:3000/images/20181024164936033.jpg','小班直播','980','1600','20',1
 );
  insert into yw_yw_course values(
  null,'小学3-4年级|写人篇02','报名中','http://127.0.0.1:3000/images/20180914190629079 (1).jpg','录播课','499','100','70',2
 );
   insert into yw_yw_yw_course values(
  null,'初中篇|写人篇','报名中','http://127.0.0.1:3000/images/20180921155437407.png','大班直播','399','100','70',,3
 );
  insert into yw_course values(
  null,'小学3-4年级|作业篇','报名中','http://127.0.0.1:3000/images/20180921093913423.jpg','小班直播','499','100','70',2
 );
   insert into yw_course values(
  null,'小学3-4年级|写人篇01','报名中','http://127.0.0.1:3000/images/20180914190629079 (1).jpg','录播课','499','100','70',2
 );
  insert into yw_course values(
  null,'小学高年级|叙事篇1对6','已结束','http://127.0.0.1:3000/images/20181024164936033.jpg','小班直播','980','1600','20',1
 );
  insert into yw_course values(
  null,'小学高年级|叙事篇1对6','已结束','http://127.0.0.1:3000/images/20181024164936033.jpg','小班直播','980','1600','20',1
 );
  insert into yw_course values(
  null,'小学5-6年级怎么写好记叙文','已结束','http://127.0.0.1:3000/images/20180919132912298.jpg','小班直播','980','1600','20',4
 );
  insert into yw_course values(
  null,'小学3-4年级|语言、动作、表情','已结束','http://127.0.0.1:3000/images/20180914185719470.jpg','小班直播','980','1600','20',2
 );
   insert into yw_course values(
  null,'小学3-4年级|语言、动作、表情','已结束','http://127.0.0.1:3000/images/20180914185719470.jpg','小班直播','980','1600','20',2
 );
    insert into yw_course values(
  null,'小学3-4年级|如何描述人物特征','已结束','http://127.0.0.1:3000/images/20180914185719470.jpg','小班直播','980','1600','2',2
 );
     insert into yw_course values(
  null,'小学3-4年级|给生活点赞-第一课','已结束','http://127.0.0.1:3000/images/20180914185839267.jpg','录播课','780','1600','2',2
 );
     insert into yw_course values(
  null,'小学3-4年级|如何优美的写景','已结束','http://127.0.0.1:3000/images/20180914185909845 (1).jpg','录播课','780','1600','2',2
 );
      insert into yw_course values(
  null,'小学5-6年级|打造出彩作文','已结束','http://127.0.0.1:3000/images/20180831092211064.jpg','录播课','1280','1600','2',5
 );
       insert into yw_course values(
  null,'小学5-6年级|有所感悟的读后感','已结束','http://127.0.0.1:3000/images/20180831092426267.jpg','录播课','1280','1600','2',5
 );
        insert into yw_course values(
  null,'高中|创意写作之人物写作','已结束','http://127.0.0.1:3000/images/20180914190331532.jpg','录播课','1280','1600','2',6
 );
         insert into yw_course values(
  null,'高中|创意写作之人物写作','已结束','http://127.0.0.1:3000/images/20180914190331532.jpg','录播课','1280','1600','2',6
 );
          insert into yw_course values(
  null,'高中|创意写作之技巧深化','已结束','http://127.0.0.1:3000/images/20180914190346767.jpg','录播课','1280','1600','2',6
 );
           insert into yw_course values(
  null,'高中|创意写作之构篇模型','已结束','http://127.0.0.1:3000/images/20180914190404017.jpg','录播课','1280','1600','2',6
 );
            insert into yw_course values(
  null,'高中|创意写作之思维训练','已结束','http://127.0.0.1:3000/images/20180914190419689.jpg','录播课','1280','1600','2',6
 );
  create table yw_user(
 uid  int primary key Auto_increment,
 uname varchar(128)
upwd varchar(128)
 );
    insert intoyw_uservalues(
  null,'tom','123456');
    insert intoyw_uservalues(
  null,'刘强','123456');


  create table ylw_show(
 sid  int primary key Auto_increment,
title varchar(128),
subtitle varchar(128),
pic varchar(128)
)
 insert into yw_course values(
  null,'热门直播','popular live','http://127.0.0.1:3000/images/live-icon.png',
 );
  insert into yw_course values(
  null,'课程推荐','course recommended','http://127.0.0.1:3000/images/course-remmend.png',
 );
