


# Dump of table admins
# ------------------------------------------------------------

DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `userid` varchar(200) NOT NULL DEFAULT '',
  `passwd` varchar(200) NOT NULL DEFAULT '',
  `regdttm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table ASKS
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ASKS`;

CREATE TABLE `ASKS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `editor` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `content` text COLLATE utf8_bin,
  `updatedt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `location_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_updatedt` (`updatedt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



# Dump of table COMMENTS
# ------------------------------------------------------------

DROP TABLE IF EXISTS `COMMENTS`;

CREATE TABLE `COMMENTS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(1000) COLLATE utf8_bin NOT NULL,
  `editor` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `content` text COLLATE utf8_bin,
  `updatedt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `location_id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_updatedt` (`updatedt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



# Dump of table LOCATIONS
# ------------------------------------------------------------

DROP TABLE IF EXISTS `LOCATIONS`;

CREATE TABLE `LOCATIONS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200) DEFAULT NULL,
  `area_name` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `updatedt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `editor` varchar(200) DEFAULT NULL,
  `addr` varchar(1000) DEFAULT NULL,
  `homepage` varchar(500) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `description` text,
  `image0` varchar(200) DEFAULT NULL,
  `image1` varchar(200) DEFAULT NULL,
  `image2` varchar(200) DEFAULT NULL,
  `image3` varchar(200) DEFAULT NULL,
  `image4` varchar(200) DEFAULT NULL,
  `latitude` float(10,6) NOT NULL DEFAULT '0.000000',
  `longitude` float(10,6) NOT NULL DEFAULT '0.000000',
  `restroom` varchar(2) DEFAULT NULL,
  `deleted` varchar(2) DEFAULT NULL,
  `opentime` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_updatedt` (`updatedt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


insert into admins (userid, passwd) values ('admin', md5('test'));

