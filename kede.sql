/*
Navicat MySQL Data Transfer

Source Server         : Annari
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : kede

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-02-18 21:26:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `gid` int(6) NOT NULL AUTO_INCREMENT,
  `godsName` varchar(255) NOT NULL,
  `marketPrice` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `url` varchar(255) NOT NULL,
  `commentQty` int(10) NOT NULL,
  `integral` varchar(255) NOT NULL,
  `number` int(6) NOT NULL,
  `sell` varchar(255) NOT NULL,
  `bigUrl1` varchar(255) NOT NULL,
  `bigUrl2` varchar(255) NOT NULL,
  `bigUrl3` varchar(255) NOT NULL,
  `bigUrl4` varchar(255) NOT NULL,
  `bigUrl5` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=135 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', 'HAN BLUELESS全天候防蓝光护目眼镜-亮黑(HN3101-C6)平光', '178.00', '158.00', 'images/goslist1.jpg', '888', 'FM16B029', '100', '888', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('2', 'HAN时尚偏光太阳镜套镜HD5901-S01 黑框黑灰片', '268.00', '218.00', 'images/goslist2.jpg', '123', 'FM16B030', '123', '123', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('3', 'HAN时尚防紫外线太阳镜HD5828 银框浅水银片', '210.00', '189.00', 'images/goslist3.jpg', '333', 'FM16B031', '144', '333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('4', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '119.00', '79.00', 'images/goslist4.jpg', '2411', 'FM16B032', '155', '2411', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('5', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist5.jpg', '2333', 'FM16B033', '80', '2333', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('6', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist1.jpg', '3332', 'FM16B034', '50', '3332', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('7', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist2.jpg', '3123', 'FM16B035', '51', '123', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('8', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist3.jpg', '33', 'FM16B036', '52', '333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('9', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist4.jpg', '4442', 'FM16B037', '53', '2411', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('10', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist3.jpg', '177', 'FM16B038', '54', '2333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('11', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist4.jpg', '888', 'FM16B039', '188', '3332', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('12', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist5.jpg', '123', 'FM16B040', '189', '3123', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('13', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist1.jpg', '333', 'FM16B041', '190', '33', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('14', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist2.jpg', '2411', 'FM16B042', '191', '4442', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('15', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist3.jpg', '2333', 'FM16B043', '192', '177', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('16', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist2.jpg', '3332', 'FM16B044', '193', '888', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('17', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist3.jpg', '3123', 'FM16B045', '194', '52', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('18', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31002 C1/M)', '122.00', '105.00', 'images/goslist4.jpg', '33', 'FM16B046', '195', '53', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('19', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31005 C1/M)', '155.00', '119.00', 'images/goslist5.jpg', '4442', 'FM16B047', '196', '54', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('20', 'HAN READERS 防蓝光 阅读眼镜HN31006 C1/M 黑/玫红', '122.00', '109.00', 'images/goslist1.jpg', '177', 'FM16B048', '197', '188', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('21', 'HAN READERS 防蓝光 阅读眼镜HN31006 C4/M 浅棕/红', '177.00', '132.00', 'images/goslist2.jpg', '888', 'FM16B049', '198', '189', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('22', 'HAN READERS 防蓝光 阅读眼镜HN31006 C3/M 亮黑', '188.00', '169.00', 'images/goslist3.jpg', '123', 'FM16B050', '199', '190', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('23', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '119.00', '79.00', 'images/goslist4.jpg', '333', 'FM16B051', '200', '191', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('24', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist3.jpg', '2411', 'FM16B052', '201', '192', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('25', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist4.jpg', '2333', 'FM16B053', '202', '193', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('26', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist5.jpg', '3332', 'FM16B054', '203', '194', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('27', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist1.jpg', '3123', 'FM16B055', '130', '195', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('28', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist2.jpg', '33', 'FM16B056', '131', '137', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('29', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist3.jpg', '4442', 'FM16B057', '132', '138', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('30', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist4.jpg', '177', 'FM16B058', '133', '139', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('31', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist5.jpg', '888', 'FM16B059', '134', '100', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('32', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist1.jpg', '123', 'FM16B060', '135', '123', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('33', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist2.jpg', '333', 'FM16B061', '136', '144', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('34', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist3.jpg', '2411', 'FM16B062', '137', '155', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('35', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist2.jpg', '2333', 'FM16B063', '138', '80', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('36', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist3.jpg', '3332', 'FM16B064', '139', '50', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('37', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist4.jpg', '123', 'FM16B065', '100', '51', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('38', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist5.jpg', '333', 'FM16B066', '123', '52', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('39', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist1.jpg', '2411', 'FM16B067', '144', '53', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('40', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist2.jpg', '2333', 'FM16B068', '155', '3332', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('41', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist3.jpg', '3332', 'FM16B069', '80', '3123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('42', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist4.jpg', '3123', 'FM16B070', '50', '33', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('43', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist3.jpg', '33', 'FM16B071', '51', '4442', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('44', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist4.jpg', '4442', 'FM16B072', '52', '177', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('45', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist5.jpg', '177', 'FM16B073', '53', '888', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('46', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31002 C1/M)', '122.00', '105.00', 'images/goslist1.jpg', '888', 'FM16B074', '54', '123', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('47', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31005 C1/M)', '155.00', '119.00', 'images/goslist4.jpg', '123', 'FM16B075', '188', '333', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('48', 'HAN READERS 防蓝光 阅读眼镜HN31006 C1/M 黑/玫红', '122.00', '109.00', 'images/goslist5.jpg', '333', 'FM16B076', '189', '2411', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('49', 'HAN READERS 防蓝光 阅读眼镜HN31006 C4/M 浅棕/红', '177.00', '132.00', 'images/goslist1.jpg', '2411', 'FM16B077', '190', '2333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('50', 'HAN READERS 防蓝光 阅读眼镜HN31006 C3/M 亮黑', '188.00', '169.00', 'images/goslist2.jpg', '2333', 'FM16B078', '191', '3332', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('51', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '119.00', '79.00', 'images/goslist3.jpg', '3332', 'FM16B079', '192', '123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('52', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist4.jpg', '123', 'FM16B080', '193', '123', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('53', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist3.jpg', '333', 'FM16B081', '194', '333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('54', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist4.jpg', '2411', 'FM16B082', '195', '2411', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('55', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist5.jpg', '2333', 'FM16B083', '196', '2333', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('56', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist1.jpg', '3332', 'FM16B084', '197', '3332', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('57', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist2.jpg', '3123', 'FM16B085', '198', '123', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('58', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist3.jpg', '33', 'FM16B086', '199', '333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('59', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist4.jpg', '4442', 'FM16B087', '200', '2411', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('60', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist5.jpg', '177', 'FM16B088', '201', '2333', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('61', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist1.jpg', '888', 'FM16B089', '202', '3332', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('62', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist2.jpg', '123', 'FM16B090', '203', '3123', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('63', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist3.jpg', '333', 'FM16B091', '130', '33', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('64', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist2.jpg', '2411', 'FM16B092', '131', '4442', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('65', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist3.jpg', '2333', 'FM16B093', '132', '177', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('66', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist4.jpg', '3332', 'FM16B094', '133', '123', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('67', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist1.jpg', '123', 'FM16B095', '134', '333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('68', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist2.jpg', '333', 'FM16B096', '135', '2411', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('69', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist3.jpg', '2411', 'FM16B097', '136', '2333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('70', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist4.jpg', '2333', 'FM16B098', '137', '3332', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('71', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist5.jpg', '3332', 'FM16B099', '138', '123', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('72', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31002 C1/M)', '122.00', '105.00', 'images/goslist1.jpg', '3123', 'FM16B100', '139', '333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('73', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31005 C1/M)', '155.00', '119.00', 'images/goslist2.jpg', '33', 'FM16B101', '100', '2411', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('74', 'HAN READERS 防蓝光 阅读眼镜HN31006 C1/M 黑/玫红', '122.00', '109.00', 'images/goslist3.jpg', '4442', 'FM16B102', '123', '2333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('75', 'HAN READERS 防蓝光 阅读眼镜HN31006 C4/M 浅棕/红', '177.00', '132.00', 'images/goslist4.jpg', '177', 'FM16B103', '144', '3332', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('76', 'HAN READERS 防蓝光 阅读眼镜HN31006 C3/M 亮黑', '188.00', '169.00', 'images/goslist3.jpg', '888', 'FM16B104', '155', '3123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('77', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '119.00', '79.00', 'images/goslist4.jpg', '123', 'FM16B105', '80', '33', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('78', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist5.jpg', '333', 'FM16B106', '50', '4442', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('79', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist1.jpg', '2411', 'FM16B107', '51', '177', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('80', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist2.jpg', '2333', 'FM16B108', '52', '888', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('81', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist3.jpg', '3332', 'FM16B109', '53', '123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('82', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist2.jpg', '123', 'FM16B110', '54', '333', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('83', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist3.jpg', '333', 'FM16B111', '188', '2411', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('84', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist4.jpg', '2411', 'FM16B112', '189', '2333', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('85', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist5.jpg', '2333', 'FM16B113', '190', '3332', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('86', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist1.jpg', '3332', 'FM16B114', '191', '2411', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('87', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist2.jpg', '3123', 'FM16B115', '192', '2333', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('88', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist3.jpg', '33', 'FM16B116', '193', '3332', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('89', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist4.jpg', '4442', 'FM16B117', '194', '123', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('90', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist3.jpg', '177', 'FM16B118', '195', '123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('91', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist4.jpg', '888', 'FM16B119', '196', '333', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('92', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist5.jpg', '123', 'FM16B120', '197', '2411', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('93', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist1.jpg', '333', 'FM16B121', '198', '2333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('94', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist2.jpg', '2411', 'FM16B122', '199', '3332', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('95', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist3.jpg', '2333', 'FM16B123', '200', '123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('96', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist4.jpg', '3332', 'FM16B124', '201', '333', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('97', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist5.jpg', '333', 'FM16B125', '202', '2411', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('98', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist1.jpg', '2411', 'FM16B126', '203', '2333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('99', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist2.jpg', '2333', 'FM16B127', '130', '3332', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('100', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31002 C1/M)', '122.00', '105.00', 'images/goslist3.jpg', '3332', 'FM16B128', '131', '3123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('101', 'HAN READERS TR 防蓝光 阅读老光眼镜-亮黑色(HN31005 C1/M)', '155.00', '119.00', 'images/goslist2.jpg', '3123', 'FM16B129', '132', '33', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('102', 'HAN READERS 防蓝光 阅读眼镜HN31006 C1/M 黑/玫红', '122.00', '109.00', 'images/goslist3.jpg', '33', 'FM16B130', '133', '4442', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('103', 'HAN READERS 防蓝光 阅读眼镜HN31006 C4/M 浅棕/红', '177.00', '132.00', 'images/goslist4.jpg', '4442', 'FM16B131', '134', '177', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('104', 'HAN READERS 防蓝光 阅读眼镜HN31006 C3/M 亮黑', '188.00', '169.00', 'images/goslist5.jpg', '177', 'FM16B132', '135', '123', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('105', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '119.00', '79.00', 'images/goslist1.jpg', '888', 'FM16B133', '136', '333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('106', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist2.jpg', '123', 'FM16B134', '137', '2411', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('107', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist3.jpg', '333', 'FM16B135', '138', '2333', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('108', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist4.jpg', '2411', 'FM16B136', '139', '3332', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('109', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist3.jpg', '2333', 'FM16B137', '100', '123', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('110', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist4.jpg', '3332', 'FM16B138', '123', '333', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('111', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist5.jpg', '123', 'FM16B139', '144', '193', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('112', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist1.jpg', '333', 'FM16B140', '155', '194', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('113', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist4.jpg', '2411', 'FM16B141', '80', '195', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('114', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist5.jpg', '2333', 'FM16B142', '50', '137', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('115', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist1.jpg', '3332', 'FM16B143', '51', '138', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('116', 'HAN TR偏光太阳镜-黑红框炫彩蓝片(HN59413-C1)', '154.00', '129.00', 'images/goslist2.jpg', '3123', 'FM16B144', '52', '139', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('117', 'HAN TR偏光太阳镜-黑银框炫彩蓝片(HN59413-C2)', '155.00', '130.00', 'images/goslist3.jpg', '3123', 'FM16B145', '53', '100', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('118', 'HAN TR偏光太阳镜-棕框炫彩蓝色片(HN59413-C3)', '145.00', '105.00', 'images/goslist4.jpg', '33', 'FM16B146', '54', '123', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('119', 'HAN READERS TR 防蓝光 阅读老光眼镜-棕黄色(HN31001 C2/M)', '144.00', '125.00', 'images/goslist3.jpg', '4442', 'FM16B147', '188', '144', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('120', 'HAN READERS TR 防蓝光 阅读老光眼镜-浅棕绿(HN31001 C3/M)', '166.00', '109.00', 'images/goslist4.jpg', '177', 'FM16B148', '189', '155', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('121', 'HAN READERS TR 防蓝光 阅读老光眼镜-深棕红(HN31001 C1/M)', '100.00', '79.00', 'images/goslist5.jpg', '888', 'FM16B149', '190', '80', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('122', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist1.jpg', '123', 'FM16B150', '191', '50', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('123', 'HAN READERS 防蓝光 阅读眼镜HN31006 C3/M 亮黑', '188.00', '169.00', 'images/goslist2.jpg', '177', 'FM16B132', '135', '51', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('124', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '119.00', '79.00', 'images/goslist3.jpg', '888', 'FM16B133', '136', '52', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('125', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist4.jpg', '123', 'FM16B134', '137', '53', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('126', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist5.jpg', '333', 'FM16B135', '138', '3332', 'images/goslist5_1.jpg', 'images/goslist5_2.jpg', 'images/goslist5_3.jpg', 'images/goslist5_4.jpg', 'images/goslist5_5.jpg');
INSERT INTO `goodslist` VALUES ('127', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist1.jpg', '2411', 'FM16B136', '139', '3123', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('128', 'HAN纯钛偏光太阳镜- 黑框黑灰片(HD5827-S01)', '139.00', '109.00', 'images/goslist2.jpg', '2333', 'FM16B137', '100', '33', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('129', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '66.00', '48.00', 'images/goslist3.jpg', '3332', 'FM16B138', '123', '4442', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('130', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '60.00', '45.00', 'images/goslist2.jpg', '123', 'FM16B139', '144', '177', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');
INSERT INTO `goodslist` VALUES ('131', 'HAN金属偏光太阳镜-亚枪色(HD2926-S12)', '37.00', '18.00', 'images/goslist3.jpg', '333', 'FM16B140', '155', '888', 'images/goslist3_1.jpg', 'images/goslist3_2.jpg', 'images/goslist3_3.jpg', 'images/goslist3_4.jpg', 'images/goslist3_5.jpg');
INSERT INTO `goodslist` VALUES ('132', 'HAN金属偏光太阳镜-亮黑(HD2926-S01)', '35.80', '23.80', 'images/goslist4.jpg', '2411', 'FM16B141', '80', '123', 'images/goslist4_1.jpg', 'images/goslist4_2.jpg', 'images/goslist4_3.jpg', 'images/goslist4_4.jpg', 'images/goslist4_5.jpg');
INSERT INTO `goodslist` VALUES ('133', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '55.00', '39.90', 'images/goslist1.jpg', '2333', 'FM16B142', '50', '333', 'images/goslist1_1.jpg', 'images/goslist1_2.jpg', 'images/goslist1_3.jpg', 'images/goslist1_4.jpg', 'images/goslist1_5.jpg');
INSERT INTO `goodslist` VALUES ('134', 'HAN TR防UV太阳镜-玫红色(HN59414-C2)', '123.00', '109.00', 'images/goslist2.jpg', '3332', 'FM16B143', '51', '2411', 'images/goslist2_1.jpg', 'images/goslist2_2.jpg', 'images/goslist2_3.jpg', 'images/goslist2_4.jpg', 'images/goslist2_5.jpg');

-- ----------------------------
-- Table structure for indexgods
-- ----------------------------
DROP TABLE IF EXISTS `indexgods`;
CREATE TABLE `indexgods` (
  `gid` int(6) NOT NULL AUTO_INCREMENT,
  `godsName` varchar(255) NOT NULL,
  `marketPrice` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `url` varchar(255) NOT NULL,
  `commentQty` int(10) NOT NULL,
  `integral` varchar(255) NOT NULL,
  `number` int(6) NOT NULL,
  `sell` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexgods
-- ----------------------------
INSERT INTO `indexgods` VALUES ('1', '强生安视优舒日日抛30片装(海外版)', '178.00', '158.00', 'images/ms1.jpg', '888', 'CL17B001', '100', '3332');
INSERT INTO `indexgods` VALUES ('2', '安视优恒润氧日抛30片(海外版)', '268.00', '218.00', 'images/ms2.jpg', '123', 'CL17B002', '123', '3123');
INSERT INTO `indexgods` VALUES ('3', '卫康X-BLUE年抛1片装', '210.00', '189.00', 'images/ms3.jpg', '333', 'CL17B003', '144', '33');
INSERT INTO `indexgods` VALUES ('4', 'SHO-BI美瞳日本直邮', '119.00', '79.00', 'images/ms4.jpg', '2411', 'CL17B004', '155', '4442');
INSERT INTO `indexgods` VALUES ('5', '上海保税仓48h发货', '139.00', '109.00', 'images/ms5.jpg', '2333', 'CL17B005', '80', '80');
INSERT INTO `indexgods` VALUES ('6', '安瞳繁朵月抛2片装', '66.00', '48.00', 'images/zhi1.jpg', '3332', 'CC185004', '50', '50');
INSERT INTO `indexgods` VALUES ('7', '库博幻眸日抛10片装', '60.00', '45.00', 'images/zhi2.jpg', '3123', 'CC185005', '51', '51');
INSERT INTO `indexgods` VALUES ('8', '卫康X-BLUE年抛1片装', '37.00', '18.00', 'images/zhi3.jpg', '33', 'CC185006', '52', '52');
INSERT INTO `indexgods` VALUES ('9', '安瞳日式清洗器/存储盒', '35.80', '23.80', 'images/zhi4.jpg', '4442', 'CC185007', '53', '53');
INSERT INTO `indexgods` VALUES ('10', '超值体验 精品框架', '55.00', '39.90', 'images/zhi5.jpg', '177', 'CC185008', '54', '54');
INSERT INTO `indexgods` VALUES ('11', 'Ever Color 1 day MOIST LABEL日抛型10片装', '123.00', '109.00', 'images/5f_1.jpg', '888', 'CC187021', '188', '188');
INSERT INTO `indexgods` VALUES ('12', 'Ever Color 1 day Natural日抛型20片装', '154.00', '129.00', 'images/5f_2.jpg', '123', 'CC187022', '189', '177');
INSERT INTO `indexgods` VALUES ('13', 'Natural Mosit Label UV日抛型20片装', '155.00', '130.00', 'images/5f_3.jpg', '333', 'CC187023', '190', '888');
INSERT INTO `indexgods` VALUES ('14', '（日本本土版）蜷川实花联名彩片第二弹', '145.00', '105.00', 'images/5f_4.jpg', '2411', 'CC187024', '191', '123');
INSERT INTO `indexgods` VALUES ('15', 'SHO-BI BeeHeartB日抛彩片10片装', '144.00', '125.00', 'images/5f_5.jpg', '2333', 'CC187025', '192', '333');
INSERT INTO `indexgods` VALUES ('16', 'SHO-BI新PienAge55美妆彩片', '166.00', '109.00', 'images/5f_6.jpg', '3332', 'CC187026', '193', '2411');
INSERT INTO `indexgods` VALUES ('17', 'en Giorno彩片月抛2片装', '100.00', '79.00', 'images/5f_7.jpg', '3123', 'CC187027', '194', '2333');
INSERT INTO `indexgods` VALUES ('18', 'Decorative Eyes UVM彩片日抛10片装', '122.00', '105.00', 'images/5f_8.jpg', '33', 'CC187028', '195', '3332');
INSERT INTO `indexgods` VALUES ('19', 'PienAge Luxe彩片日抛10片', '155.00', '119.00', 'images/5f_9.jpg', '4442', 'CC187029', '196', '3123');
INSERT INTO `indexgods` VALUES ('20', 'PienAge彩片日抛12片', '122.00', '109.00', 'images/5f_10.jpg', '177', 'CC187030', '197', '33');
INSERT INTO `indexgods` VALUES ('21', 'LILMOON彩片日抛10片装', '177.00', '132.00', 'images/5f_11.jpg', '888', 'CC187031', '198', '4442');
INSERT INTO `indexgods` VALUES ('22', 'LILMOON彩片月抛1片装', '123.00', '109.00', 'images/5f_12.jpg', '123', 'CC187032', '199', '33');
INSERT INTO `indexgods` VALUES ('23', '加美醉心彩色隐形眼镜月抛1片', '154.00', '129.00', 'images/5f_13.jpg', '333', 'CC187033', '200', '4442');
INSERT INTO `indexgods` VALUES ('24', '星欧珠光彩片日拋10片裝', '155.00', '130.00', 'images/5f_14.jpg', '2411', 'CC187034', '201', '177');
INSERT INTO `indexgods` VALUES ('25', 'OLENS SYMPHONY交响曲月抛2片装', '145.00', '105.00', 'images/5f_15.jpg', '2333', 'CC187035', '202', '888');
INSERT INTO `indexgods` VALUES ('26', 'OLENS Falling暧恋系列彩片月抛2片装', '144.00', '125.00', 'images/5f_16.jpg', '3332', 'CC187036', '203', '123');
INSERT INTO `indexgods` VALUES ('27', '库博Biofinity佰视明月抛3片装', '155.00', '109.00', 'images/1f_1.jpg', '3123', 'CC184030', '130', '333');
INSERT INTO `indexgods` VALUES ('28', '库博EDGE III XT欧柯莱视半年抛2片装', '75.00', '55.00', 'images/1f_2.jpg', '33', 'CC184031', '131', '2411');
INSERT INTO `indexgods` VALUES ('29', '博士伦清朗舒适月抛6片装', '144.00', '108.00', 'images/1f_3.jpg', '4442', 'CC184032', '132', '2333');
INSERT INTO `indexgods` VALUES ('30', '海昌水润季抛2片装', '50.00', '28.00', 'images/1f_4.jpg', '177', 'CC184033', '133', '3332');
INSERT INTO `indexgods` VALUES ('31', '库博清氧清硅水凝胶日抛30片装', '200.00', '159.00', 'images/1f_5.jpg', '888', 'CC184034', '134', '3123');
INSERT INTO `indexgods` VALUES ('32', '强生润眸两周抛6片装', '100.00', '78.00', 'images/1f_6.jpg', '123', 'CC184035', '135', '33');
INSERT INTO `indexgods` VALUES ('33', '库博EDGE III XT欧柯莱视半年抛2片装', '75.00', '55.00', 'images/1f_7.jpg', '333', 'CC184036', '136', '4442');
INSERT INTO `indexgods` VALUES ('34', '博士伦清朗舒适月抛6片装', '144.00', '108.00', 'images/1f_8.jpg', '2411', 'CC184037', '137', '177');
INSERT INTO `indexgods` VALUES ('35', '海昌水润季抛2片装', '50.00', '28.00', 'images/1f_9.jpg', '2333', 'CC184038', '138', '888');
INSERT INTO `indexgods` VALUES ('36', '库博清氧清硅水凝胶日抛30片装', '144.00', '125.00', 'images/1f_10.jpg', '3332', 'CC184039', '139', '123');

-- ----------------------------
-- Table structure for orderlist
-- ----------------------------
DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist` (
  `oid` int(6) NOT NULL AUTO_INCREMENT,
  `uid` int(6) NOT NULL,
  `gid` int(6) NOT NULL,
  `qty` int(10) NOT NULL,
  `godsName` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderlist
-- ----------------------------
INSERT INTO `orderlist` VALUES ('1', '1', '2', '33', 'HAN时尚偏光太阳镜套镜HD5901-S01 黑框黑灰片', '218.00', 'images/goslist2.jpg');
INSERT INTO `orderlist` VALUES ('2', '1', '4', '1', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '79.00', 'images/goslist4.jpg');
INSERT INTO `orderlist` VALUES ('3', '1', '1', '31', 'HAN BLUELESS全天候防蓝光护目眼镜-亮黑(HN3101-C6)平光', '158.00', 'images/goslist1.jpg');
INSERT INTO `orderlist` VALUES ('4', '1', '10', '1', 'HAN TR防UV太阳镜-亮黑色(HN59414-C1)', '39.90', 'images/goslist3.jpg');
INSERT INTO `orderlist` VALUES ('9', '6', '7', '2', 'HAN时尚纯钛偏光太阳镜-黑框黑灰片(HD5826-S01)', '45.00', 'images/goslist2.jpg');
INSERT INTO `orderlist` VALUES ('8', '6', '2', '1', 'HAN时尚偏光太阳镜套镜HD5901-S01 黑框黑灰片', '218.00', 'images/goslist2.jpg');
INSERT INTO `orderlist` VALUES ('7', '6', '4', '7', 'HAN时尚防紫外线太阳镜HD5828 金框渐进片', '79.00', 'images/goslist4.jpg');
INSERT INTO `orderlist` VALUES ('10', '6', '6', '3', 'HAN时尚纯钛偏光太阳镜-黑框墨绿片(HD5825-S01)', '48.00', 'images/goslist1.jpg');

-- ----------------------------
-- Table structure for sign
-- ----------------------------
DROP TABLE IF EXISTS `sign`;
CREATE TABLE `sign` (
  `uid` int(6) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `upw` varchar(255) NOT NULL,
  `times` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sign
-- ----------------------------
INSERT INTO `sign` VALUES ('1', '18998420193', 'qweasd', '2019-02-11 22:18:07');
INSERT INTO `sign` VALUES ('23', '18998420191', 'qweasd', '2019-02-17 23:09:19');
INSERT INTO `sign` VALUES ('19', '15521332332', 'qweasd', '2019-02-17 22:58:16');
INSERT INTO `sign` VALUES ('18', '15521332333', 'qweasd', '2019-02-17 22:50:08');
SET FOREIGN_KEY_CHECKS=1;
