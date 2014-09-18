CREATE TABLE `places` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `latitude` varchar(200) DEFAULT NULL,
  `longitude` varchar(200) DEFAULT NULL,
  `image_0` varchar(200) DEFAULT NULL,
  `image_1` varchar(200) DEFAULT NULL,
  `image_2` varchar(200) DEFAULT NULL,
  `image_3` varchar(200) DEFAULT NULL,
  `image_4` varchar(200) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `homepage` varchar(200) DEFAULT NULL,
  `category` varchar(200) DEFAULT NULL,
  `area` varchar(200) DEFAULT NULL,
  `regdttm` datetime NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `admins` (
  `userid` varchar(200) NOT NULL DEFAULT '',
  `password` varchar(200) NOT NULL DEFAULT '',
  `regdttm` datetime NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into admins (userid, passwd) values ('test', md5('test'))
