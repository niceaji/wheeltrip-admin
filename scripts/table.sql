
DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `userid` varchar(200) NOT NULL DEFAULT '',
  `passwd` varchar(200) NOT NULL DEFAULT '',
  `regdttm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `places`;

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
  `address` varchar(200) DEFAULT NULL,
  `regdttm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `places` (`id`, `name`, `latitude`, `longitude`, `image_0`, `image_1`, `image_2`, `image_3`, `image_4`, `description`, `homepage`, `category`, `area`, `address`, `regdttm`)
VALUES
	(1,'성산일출봉','33.45006654566682','126.93684382623414','http://wheeltrip.net/images/1.jpeg','','','','','','','관광지','제주','제주특별자치도 서귀포시 성산읍','2014-09-21 16:40:39');

insert into admins (userid, passwd) values ('test', md5('test'));

