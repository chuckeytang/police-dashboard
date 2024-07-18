/*
 Navicat Premium Data Transfer

 Source Server         : 定海派出所
 Source Server Type    : MySQL
 Source Server Version : 50719 (5.7.19)
 Source Host           : localhost:3306
 Source Schema         : police_dashboard

 Target Server Type    : MySQL
 Target Server Version : 50719 (5.7.19)
 File Encoding         : 65001

 Date: 12/06/2024 23:13:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for IncidentAnalysis
-- ----------------------------
DROP TABLE IF EXISTS `IncidentAnalysis`;
CREATE TABLE `IncidentAnalysis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `incident_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiver` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `report_time` datetime NOT NULL,
  `contact_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reporter` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `incident_category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `report_source` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `incident_location` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `incident_details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `incident_status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `response_time` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of IncidentAnalysis
-- ----------------------------
BEGIN;
INSERT INTO `IncidentAnalysis` (`id`, `incident_number`, `receiver`, `report_time`, `contact_number`, `reporter`, `incident_category`, `report_source`, `incident_location`, `incident_details`, `incident_status`, `response_time`, `created_at`, `updated_at`) VALUES (1, '123123412', '张三', '2023-01-01 12:12:12', '1233343344', '张三', '交通安全', '交通事故', '定海路112号', '事件详情详情详情', '已反馈', '2023-01-01 12:12:12', '2024-06-06 16:57:07', '2024-06-06 16:57:07');
INSERT INTO `IncidentAnalysis` (`id`, `incident_number`, `receiver`, `report_time`, `contact_number`, `reporter`, `incident_category`, `report_source`, `incident_location`, `incident_details`, `incident_status`, `response_time`, `created_at`, `updated_at`) VALUES (2, '123123412', '张三', '2023-01-01 12:12:12', '1233343344', '张三', '交通安全', '交通事故', '定海路112号', '事件详情详情详情', '已反馈', '2023-01-01 12:12:12', '2024-06-06 16:57:07', '2024-06-06 16:57:07');
INSERT INTO `IncidentAnalysis` (`id`, `incident_number`, `receiver`, `report_time`, `contact_number`, `reporter`, `incident_category`, `report_source`, `incident_location`, `incident_details`, `incident_status`, `response_time`, `created_at`, `updated_at`) VALUES (3, '123123412', '张三', '2023-01-01 12:12:12', '1233343344', '张三', '交通安全', '交通事故', '定海路112号', '事件详情详情详情', '已反馈', '2023-01-01 12:12:12', '2024-06-06 16:57:07', '2024-06-06 16:57:07');
INSERT INTO `IncidentAnalysis` (`id`, `incident_number`, `receiver`, `report_time`, `contact_number`, `reporter`, `incident_category`, `report_source`, `incident_location`, `incident_details`, `incident_status`, `response_time`, `created_at`, `updated_at`) VALUES (4, '123123412', '张三', '2023-01-01 12:12:12', '1233343344', '张三', '交通安全', '交通事故', '定海路112号', '事件详情详情详情', '已反馈', '2023-01-01 12:12:12', '2024-06-06 16:57:07', '2024-06-06 16:57:07');
INSERT INTO `IncidentAnalysis` (`id`, `incident_number`, `receiver`, `report_time`, `contact_number`, `reporter`, `incident_category`, `report_source`, `incident_location`, `incident_details`, `incident_status`, `response_time`, `created_at`, `updated_at`) VALUES (5, '123123412', '张三', '2023-01-01 12:12:12', '1233343344', '张三', '交通安全', '交通事故', '定海路112号', '事件详情详情详情', '已反馈', '2023-01-01 12:12:12', '2024-06-06 16:57:07', '2024-06-06 16:57:07');
COMMIT;

-- ----------------------------
-- Table structure for PatrolSchedule
-- ----------------------------
DROP TABLE IF EXISTS `PatrolSchedule`;
CREATE TABLE `PatrolSchedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patrol_team_id` int(11) NOT NULL,
  `schedule_date` date NOT NULL,
  `shift_type` enum('早班','中班','晚班') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patrol_team_id` (`patrol_team_id`),
  CONSTRAINT `patrolschedule_ibfk_1` FOREIGN KEY (`patrol_team_id`) REFERENCES `PatrolTeam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of PatrolSchedule
-- ----------------------------
BEGIN;
INSERT INTO `PatrolSchedule` (`id`, `patrol_team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (1, 1, '2024-02-01', '早班', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolSchedule` (`id`, `patrol_team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (2, 1, '2024-02-01', '中班', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolSchedule` (`id`, `patrol_team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (3, 1, '2024-02-01', '晚班', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolSchedule` (`id`, `patrol_team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (4, 2, '2024-02-02', '早班', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolSchedule` (`id`, `patrol_team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (5, 2, '2024-02-02', '中班', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolSchedule` (`id`, `patrol_team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (6, 2, '2024-02-02', '晚班', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
COMMIT;

-- ----------------------------
-- Table structure for PatrolStaffAssignment
-- ----------------------------
DROP TABLE IF EXISTS `PatrolStaffAssignment`;
CREATE TABLE `PatrolStaffAssignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patrol_schedule_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patrol_schedule_id` (`patrol_schedule_id`),
  KEY `staff_id` (`staff_id`),
  CONSTRAINT `patrolstaffassignment_ibfk_1` FOREIGN KEY (`patrol_schedule_id`) REFERENCES `PatrolSchedule` (`id`),
  CONSTRAINT `patrolstaffassignment_ibfk_2` FOREIGN KEY (`staff_id`) REFERENCES `Staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of PatrolStaffAssignment
-- ----------------------------
BEGIN;
INSERT INTO `PatrolStaffAssignment` (`id`, `patrol_schedule_id`, `staff_id`, `created_at`, `updated_at`) VALUES (1, 1, 1, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolStaffAssignment` (`id`, `patrol_schedule_id`, `staff_id`, `created_at`, `updated_at`) VALUES (2, 2, 2, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolStaffAssignment` (`id`, `patrol_schedule_id`, `staff_id`, `created_at`, `updated_at`) VALUES (3, 3, 3, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolStaffAssignment` (`id`, `patrol_schedule_id`, `staff_id`, `created_at`, `updated_at`) VALUES (4, 4, 4, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolStaffAssignment` (`id`, `patrol_schedule_id`, `staff_id`, `created_at`, `updated_at`) VALUES (5, 5, 5, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolStaffAssignment` (`id`, `patrol_schedule_id`, `staff_id`, `created_at`, `updated_at`) VALUES (6, 6, 6, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
COMMIT;

-- ----------------------------
-- Table structure for PatrolTeam
-- ----------------------------
DROP TABLE IF EXISTS `PatrolTeam`;
CREATE TABLE `PatrolTeam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of PatrolTeam
-- ----------------------------
BEGIN;
INSERT INTO `PatrolTeam` (`id`, `team_name`, `created_at`, `updated_at`) VALUES (1, '巡逻1组', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolTeam` (`id`, `team_name`, `created_at`, `updated_at`) VALUES (2, '巡逻2组', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolTeam` (`id`, `team_name`, `created_at`, `updated_at`) VALUES (3, '巡逻3组', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolTeam` (`id`, `team_name`, `created_at`, `updated_at`) VALUES (4, '巡逻4组', '2024-06-06 16:51:00', '2024-06-06 16:51:00');
COMMIT;

-- ----------------------------
-- Table structure for PatrolVehicleAssignment
-- ----------------------------
DROP TABLE IF EXISTS `PatrolVehicleAssignment`;
CREATE TABLE `PatrolVehicleAssignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patrol_team_id` int(11) NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patrol_team_id` (`patrol_team_id`),
  KEY `vehicle_id` (`vehicle_id`),
  CONSTRAINT `patrolvehicleassignment_ibfk_1` FOREIGN KEY (`patrol_team_id`) REFERENCES `PatrolTeam` (`id`),
  CONSTRAINT `patrolvehicleassignment_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicle` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of PatrolVehicleAssignment
-- ----------------------------
BEGIN;
INSERT INTO `PatrolVehicleAssignment` (`id`, `patrol_team_id`, `vehicle_id`, `created_at`, `updated_at`) VALUES (1, 1, 1, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolVehicleAssignment` (`id`, `patrol_team_id`, `vehicle_id`, `created_at`, `updated_at`) VALUES (2, 2, 2, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolVehicleAssignment` (`id`, `patrol_team_id`, `vehicle_id`, `created_at`, `updated_at`) VALUES (3, 3, 3, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
INSERT INTO `PatrolVehicleAssignment` (`id`, `patrol_team_id`, `vehicle_id`, `created_at`, `updated_at`) VALUES (4, 4, 4, '2024-06-06 16:51:00', '2024-06-06 16:51:00');
COMMIT;

-- ----------------------------
-- Table structure for RecentDuties
-- ----------------------------
DROP TABLE IF EXISTS `RecentDuties`;
CREATE TABLE `RecentDuties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `duty_date` date NOT NULL,
  `duty_type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of RecentDuties
-- ----------------------------
BEGIN;
INSERT INTO `RecentDuties` (`id`, `duty_date`, `duty_type`, `content`, `created_at`, `updated_at`) VALUES (1, '2023-01-01', '清查整治', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:58:52', '2024-06-06 16:58:52');
INSERT INTO `RecentDuties` (`id`, `duty_date`, `duty_type`, `content`, `created_at`, `updated_at`) VALUES (2, '2023-01-01', '清查整治', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:58:52', '2024-06-06 16:58:52');
INSERT INTO `RecentDuties` (`id`, `duty_date`, `duty_type`, `content`, `created_at`, `updated_at`) VALUES (3, '2023-01-01', '清查整治', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:58:52', '2024-06-06 16:58:52');
INSERT INTO `RecentDuties` (`id`, `duty_date`, `duty_type`, `content`, `created_at`, `updated_at`) VALUES (4, '2023-01-01', '清查整治', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:58:52', '2024-06-06 16:58:52');
INSERT INTO `RecentDuties` (`id`, `duty_date`, `duty_type`, `content`, `created_at`, `updated_at`) VALUES (5, '2023-01-01', '清查整治', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:58:52', '2024-06-06 16:58:52');
COMMIT;

-- ----------------------------
-- Table structure for Schedule
-- ----------------------------
DROP TABLE IF EXISTS `Schedule`;
CREATE TABLE `Schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team_id` int(11) NOT NULL,
  `schedule_date` date NOT NULL,
  `shift_type` enum('白班','夜班') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `Team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Schedule
-- ----------------------------
BEGIN;
INSERT INTO `Schedule` (`id`, `team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (1, 1, '2024-02-01', '白班', '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Schedule` (`id`, `team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (2, 1, '2024-02-01', '夜班', '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Schedule` (`id`, `team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (3, 2, '2024-02-02', '白班', '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Schedule` (`id`, `team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (4, 2, '2024-02-02', '夜班', '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Schedule` (`id`, `team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (5, 3, '2024-02-03', '白班', '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Schedule` (`id`, `team_id`, `schedule_date`, `shift_type`, `created_at`, `updated_at`) VALUES (6, 3, '2024-02-03', '夜班', '2024-06-06 16:29:04', '2024-06-06 16:29:04');
COMMIT;

-- ----------------------------
-- Table structure for Staff
-- ----------------------------
DROP TABLE IF EXISTS `Staff`;
CREATE TABLE `Staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `police_number` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vehicle` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Staff
-- ----------------------------
BEGIN;
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (1, 'ZP00001', '秦壮保', '主任', '刑侦科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (2, 'ZP00002', '钱勤笛', '科长', '技术科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (3, 'ZP00003', '张颖启', '科长', '刑侦科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (4, 'ZP00004', '雷琳', '民警', '刑侦科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (5, 'ZP00005', '吴川宜', '民警', '技术科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (6, 'ZP00006', '钱勤笛', '科长', '技术科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (7, 'ZP00007', '张颖启', '科长', '刑侦科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (8, 'ZP00008', '雷琳', '民警', '刑侦科', '18876787654', NULL, '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (9, 'ZP00009', '吴川宜', '民警', '技术科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
INSERT INTO `Staff` (`id`, `police_number`, `name`, `position`, `department`, `contact`, `vehicle`, `created_at`, `updated_at`) VALUES (10, 'ZP00010', '吴川宜', '民警', '技术科', '18876787654', '陕A-00001', '2024-06-06 16:14:33', '2024-06-06 16:14:33');
COMMIT;

-- ----------------------------
-- Table structure for Team
-- ----------------------------
DROP TABLE IF EXISTS `Team`;
CREATE TABLE `Team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `leader_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `leader_id` (`leader_id`),
  CONSTRAINT `team_ibfk_1` FOREIGN KEY (`leader_id`) REFERENCES `Staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Team
-- ----------------------------
BEGIN;
INSERT INTO `Team` (`id`, `team_name`, `leader_id`, `created_at`, `updated_at`) VALUES (1, '勤务二组', 1, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Team` (`id`, `team_name`, `leader_id`, `created_at`, `updated_at`) VALUES (2, '勤务三组', 2, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `Team` (`id`, `team_name`, `leader_id`, `created_at`, `updated_at`) VALUES (3, '勤务四组', 3, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
COMMIT;

-- ----------------------------
-- Table structure for TeamMember
-- ----------------------------
DROP TABLE IF EXISTS `TeamMember`;
CREATE TABLE `TeamMember` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `team_id` (`team_id`),
  KEY `staff_id` (`staff_id`),
  CONSTRAINT `teammember_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `Team` (`id`),
  CONSTRAINT `teammember_ibfk_2` FOREIGN KEY (`staff_id`) REFERENCES `Staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of TeamMember
-- ----------------------------
BEGIN;
INSERT INTO `TeamMember` (`id`, `team_id`, `staff_id`, `created_at`, `updated_at`) VALUES (1, 1, 2, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `TeamMember` (`id`, `team_id`, `staff_id`, `created_at`, `updated_at`) VALUES (2, 1, 3, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `TeamMember` (`id`, `team_id`, `staff_id`, `created_at`, `updated_at`) VALUES (3, 2, 4, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `TeamMember` (`id`, `team_id`, `staff_id`, `created_at`, `updated_at`) VALUES (4, 2, 5, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
INSERT INTO `TeamMember` (`id`, `team_id`, `staff_id`, `created_at`, `updated_at`) VALUES (5, 3, 6, '2024-06-06 16:29:04', '2024-06-06 16:29:04');
COMMIT;

-- ----------------------------
-- Table structure for Vehicle
-- ----------------------------
DROP TABLE IF EXISTS `Vehicle`;
CREATE TABLE `Vehicle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plate_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vehicle_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_model` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('完好','损坏') COLLATE utf8mb4_unicode_ci NOT NULL,
  `usage_status` enum('空闲','使用中') COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `borrow_time` datetime DEFAULT NULL,
  `return_time` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Vehicle
-- ----------------------------
BEGIN;
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (1, '陕A-00032', '轿车', '比亚迪', '完好', '使用中', '刑侦科', 1, '2024-04-11 09:02:09', '2024-04-11 09:02:09', '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (2, '陕A-00032', '货车', '五菱宏光', '完好', '空闲', NULL, NULL, NULL, NULL, '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (3, '陕A-00032', '摩托车', '东风风尚', '损坏', '空闲', NULL, NULL, NULL, NULL, '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (4, '陕A-00032', '轿车', '吉利', '损坏', '使用中', '刑侦科', 4, '2024-04-11 09:02:09', '2024-04-11 09:02:09', '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (5, '陕A-00032', 'SUV', '比亚迪', '完好', '空闲', NULL, NULL, NULL, NULL, '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (6, '陕A-00032', 'SUV', '吉利', '完好', '空闲', NULL, NULL, NULL, NULL, '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (7, '陕A-00032', '轿车', '五菱宏光', '损坏', '空闲', NULL, NULL, NULL, NULL, '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (8, '陕A-00032', 'SUV', '东风风尚', '完好', '空闲', NULL, NULL, NULL, NULL, '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (9, '陕A-00032', '轿车', '比亚迪', '完好', '使用中', '刑侦科', 5, '2024-04-11 09:02:09', '2024-04-11 09:02:09', '2024-06-06 16:34:39', '2024-06-06 16:34:39');
INSERT INTO `Vehicle` (`id`, `plate_number`, `vehicle_type`, `brand_model`, `status`, `usage_status`, `department`, `user_id`, `borrow_time`, `return_time`, `created_at`, `updated_at`) VALUES (10, '陕A-00032', '轿车', '比亚迪', '完好', '使用中', '刑侦科', 5, '2024-04-11 09:02:09', '2024-04-11 09:02:09', '2024-06-06 16:34:39', '2024-06-06 16:34:39');
COMMIT;

-- ----------------------------
-- Table structure for WorkFocus
-- ----------------------------
DROP TABLE IF EXISTS `WorkFocus`;
CREATE TABLE `WorkFocus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `focus_date` date NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of WorkFocus
-- ----------------------------
BEGIN;
INSERT INTO `WorkFocus` (`id`, `focus_date`, `content`, `created_at`, `updated_at`) VALUES (1, '2023-01-01', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:56:34', '2024-06-06 16:56:34');
INSERT INTO `WorkFocus` (`id`, `focus_date`, `content`, `created_at`, `updated_at`) VALUES (2, '2023-01-01', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:56:34', '2024-06-06 16:56:34');
INSERT INTO `WorkFocus` (`id`, `focus_date`, `content`, `created_at`, `updated_at`) VALUES (3, '2023-01-01', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:56:34', '2024-06-06 16:56:34');
INSERT INTO `WorkFocus` (`id`, `focus_date`, `content`, `created_at`, `updated_at`) VALUES (4, '2023-01-01', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:56:34', '2024-06-06 16:56:34');
INSERT INTO `WorkFocus` (`id`, `focus_date`, `content`, `created_at`, `updated_at`) VALUES (5, '2023-01-01', '定海社区晚上盗窃多发，需加派人手', '2024-06-06 16:56:34', '2024-06-06 16:56:34');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
