-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2022 at 04:48 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ema_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `medewerkers`
--

CREATE TABLE `medewerkers` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `voornaam` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `achternaam` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `geslacht` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefoon` int(11) NOT NULL,
  `straatnaam` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `huisnummer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medewerkers`
--

INSERT INTO `medewerkers` (`id`, `createdAt`, `updatedAt`, `isActive`, `voornaam`, `achternaam`, `geslacht`, `email`, `telefoon`, `straatnaam`, `huisnummer`, `district`) VALUES
(11, '2022-03-15 00:54:19.087', '2022-03-15 03:46:59.216', 1, 'Andojo', 'Mack', 'Man', 'andojomack@gmail.com', 8409113, 'Salvadorstraat', '5', 'Paramaribo'),
(12, '2022-03-15 01:13:14.617', '2022-03-15 03:47:38.999', 0, 'Joel', 'Naarendorp', 'Man', 'jnar@gmail.com', 8781953, 'indirastraat', '45A', 'Wanica');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('938be736-4bd0-4bff-a2d2-d888b1a0df2b', '1d0b9930ea9837f0f766696385ad4186f5cae7401badcfb59900208ba3e3b21b', '2022-03-11 04:53:31.152', '20220309181453_created_schema_with_medewerkers', NULL, NULL, '2022-03-11 04:53:31.120', 1),
('aafd0b97-1b84-4c29-bfee-b2dc2593219d', 'd8622d71ff13f86092aa8af86c29aa528b1972b854d8886daa2f5f9f776a69b4', '2022-03-11 04:53:31.171', '20220310011042_added_true_as_default_value_for_is_active_on_medewerker_schema', NULL, NULL, '2022-03-11 04:53:31.156', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `medewerkers`
--
ALTER TABLE `medewerkers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `medewerkers_email_key` (`email`),
  ADD UNIQUE KEY `medewerkers_telefoon_key` (`telefoon`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medewerkers`
--
ALTER TABLE `medewerkers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
