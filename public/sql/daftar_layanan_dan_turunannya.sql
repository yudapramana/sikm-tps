/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : 127.0.0.1:3306
 Source Schema         : kemenag_ptsp_live

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 16/03/2023 12:56:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for daftar_jenis_layanan
-- ----------------------------
DROP TABLE IF EXISTS `daftar_jenis_layanan`;
CREATE TABLE `daftar_jenis_layanan` (
  `id_jenis_layanan` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id_jenis_layanan`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of daftar_jenis_layanan
-- ----------------------------
BEGIN;
INSERT INTO `daftar_jenis_layanan` VALUES (1, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Data/Informasi', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (2, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Kenaikan Pangkat', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (3, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Konsultasi', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (4, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Mutasi', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (5, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Pencatatan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (6, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Penerbitan SK GTT', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (7, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Pengaduan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (8, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Pengesahan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (9, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Pensiun', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (10, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Perizinan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (11, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Layanan Persetujuan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (12, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Rekomendasi', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (13, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Bantuan Operasional Sekolah', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (14, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan BOP RA', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (15, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Surat Masuk', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (16, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Surat Keterangan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (17, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Program Indonesia Pintar', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (18, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan PTK', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (19, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Bantuan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (20, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Layanan Pendaftaran', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (21, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Layanan Perbaikan Data CJH', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (22, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Layanan Persyaratan Kafilah', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (23, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Layanan Penunjukan', '', '');
INSERT INTO `daftar_jenis_layanan` VALUES (24, '2023-02-27 03:46:19', '2023-02-27 03:46:19', NULL, 'Layanan Keuangan', '', '');
COMMIT;

-- ----------------------------
-- Table structure for daftar_layanan
-- ----------------------------
DROP TABLE IF EXISTS `daftar_layanan`;
CREATE TABLE `daftar_layanan` (
  `id_layanan` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_unit_pengolah` int unsigned NOT NULL,
  `id_jenis_layanan` int unsigned NOT NULL,
  `id_output_layanan` int unsigned NOT NULL,
  `lama_layanan` int NOT NULL,
  `biaya_layanan` int NOT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id_layanan`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of daftar_layanan
-- ----------------------------
BEGIN;
INSERT INTO `daftar_layanan` VALUES (1, NULL, NULL, NULL, 'Pelayanan Kurikulum', 1, 1, 1, 1, 0, '', '');
INSERT INTO `daftar_layanan` VALUES (2, NULL, NULL, NULL, 'Pelayanan Kesiswaan', 2, 1, 1, 1, 0, '', '');
INSERT INTO `daftar_layanan` VALUES (3, NULL, NULL, NULL, 'Pelayanan Kepegawaian', 3, 1, 1, 1, 0, '', '');
INSERT INTO `daftar_layanan` VALUES (4, NULL, NULL, NULL, 'Pelayanan Sarana dan Prasarana', 4, 1, 1, 1, 0, '', '');
INSERT INTO `daftar_layanan` VALUES (5, NULL, NULL, NULL, 'Pelayanan Keasramaan', 5, 1, 1, 1, 0, '', '');
INSERT INTO `daftar_layanan` VALUES (6, NULL, NULL, NULL, 'Pelayanan Data dan Informasi', 6, 1, 1, 1, 0, '', '');

COMMIT;

-- ----------------------------
-- Table structure for daftar_output_layanan
-- ----------------------------
DROP TABLE IF EXISTS `daftar_output_layanan`;
CREATE TABLE `daftar_output_layanan` (
  `id_output_layanan` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id_output_layanan`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of daftar_output_layanan
-- ----------------------------
BEGIN;
INSERT INTO `daftar_output_layanan` VALUES (1, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Informasi', '', '');
INSERT INTO `daftar_output_layanan` VALUES (2, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Pengantar usul Kenaikan Pangkat', '', '');
INSERT INTO `daftar_output_layanan` VALUES (3, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Surat Pengantar', '', '');
INSERT INTO `daftar_output_layanan` VALUES (4, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Surat', '', '');
INSERT INTO `daftar_output_layanan` VALUES (5, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Legalisir', '', '');
INSERT INTO `daftar_output_layanan` VALUES (6, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Pengantar Pensiun', '', '');
INSERT INTO `daftar_output_layanan` VALUES (7, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Jadwal Audiensi', '', '');
INSERT INTO `daftar_output_layanan` VALUES (8, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Surat Izin', '', '');
INSERT INTO `daftar_output_layanan` VALUES (9, '2022-10-19 20:48:29', '2022-10-19 20:48:29', NULL, 'Surat Tugas', '', '');
INSERT INTO `daftar_output_layanan` VALUES (10, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Surat Rekomendasi', '', '');
INSERT INTO `daftar_output_layanan` VALUES (11, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Berkas Lengkap', '', '');
INSERT INTO `daftar_output_layanan` VALUES (12, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Pemahaman', '', '');
INSERT INTO `daftar_output_layanan` VALUES (13, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Laporan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (14, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Pengesahan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (15, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Surat Pengesahan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (16, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Surat Keputusan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (17, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Surat Keterangan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (18, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Konsultasi', '', '');
INSERT INTO `daftar_output_layanan` VALUES (19, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'S 28 a', '', '');
INSERT INTO `daftar_output_layanan` VALUES (20, '2022-10-19 20:48:30', '2022-10-19 20:48:30', NULL, 'Tanda Tangan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (21, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Pengajuan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (22, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Data', '', '');
INSERT INTO `daftar_output_layanan` VALUES (23, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Jadwal Konsultasi', '', '');
INSERT INTO `daftar_output_layanan` VALUES (24, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Karya Tulis', '', '');
INSERT INTO `daftar_output_layanan` VALUES (25, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Persyaratan', '', '');
INSERT INTO `daftar_output_layanan` VALUES (26, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Rekomendasi', '', '');
INSERT INTO `daftar_output_layanan` VALUES (27, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Sertifikat', '', '');
INSERT INTO `daftar_output_layanan` VALUES (28, '2022-10-19 20:48:31', '2022-10-19 20:48:31', NULL, 'Petugas Rohaniwan', '', '');
COMMIT;

-- ----------------------------
-- Table structure for daftar_unit_pengolah
-- ----------------------------
DROP TABLE IF EXISTS `daftar_unit_pengolah`;
CREATE TABLE `daftar_unit_pengolah` (
  `id_unit_pengolah` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id_unit_pengolah`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of daftar_unit_pengolah
-- ----------------------------
BEGIN;
INSERT INTO `daftar_unit_pengolah` VALUES (1, NULL, NULL, NULL, 'Bidang Kurikulum', '', '');
INSERT INTO `daftar_unit_pengolah` VALUES (2, NULL, NULL, NULL, 'Bidang Kesiswaan', '', '');
INSERT INTO `daftar_unit_pengolah` VALUES (3, NULL, NULL, NULL, 'Bidang Kepegawaian', '', '');
INSERT INTO `daftar_unit_pengolah` VALUES (4, NULL, NULL, NULL, 'Bidang Sarana dan Prasarana', '', '');
INSERT INTO `daftar_unit_pengolah` VALUES (5, NULL, NULL, NULL, 'Bidang Keasramaan', '', '');
INSERT INTO `daftar_unit_pengolah` VALUES (6, NULL, NULL, NULL, 'Bidang Data dan Informasi', '', '');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
