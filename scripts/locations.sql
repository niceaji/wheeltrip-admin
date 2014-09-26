

insert into LOCATIONS
(category_name,area_name,name,updatedt,editor,addr,homepage,
phone,description,image0,image1,image2,image3,image4,latitude,longitude)
select category,area,name,regdttm,'admin',address,homepage,
phone,description,image_0,image_1,image_2,image_3,image_4,latitude,longitude
from places


CREATE TABLE `LOCATIONS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200)  DEFAULT NULL,
  `area_name` varchar(200)  DEFAULT NULL,
  `name` varchar(200)  DEFAULT NULL,
  `updatedt` timestamp NULL DEFAULT NULL,
  `editor` varchar(200)  DEFAULT NULL,
  `addr` varchar(1000)  DEFAULT NULL,
  `homepage` varchar(500)  DEFAULT NULL,
  `phone` varchar(30)  DEFAULT NULL,
  `description` text ,
  `image0` varchar(200)  DEFAULT NULL,
  `image1` varchar(200)  DEFAULT NULL,
  `image2` varchar(200)  DEFAULT NULL,
  `image3` varchar(200)  DEFAULT NULL,
  `image4` varchar(200)  DEFAULT NULL,
  `latitude` float(10,6) DEFAULT NULL,
  `longitude` float(10,6) DEFAULT NULL,
  `restroom` varchar(2)  DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_updatedt` (`updatedt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;