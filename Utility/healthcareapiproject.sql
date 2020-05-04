-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2020 at 11:36 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcareapiproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `docID` int(11) NOT NULL,
  `docName` varchar(50) NOT NULL,
  `specialization` varchar(50) NOT NULL,
  `contactNo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`docID`, `docName`, `specialization`, `contactNo`) VALUES
(1, 'Susantha Silva', 'CARDILOGIST', '0778213659'),
(2, 'Saman Perera', 'NEUROLOGY', '0777678456'),
(3, 'Shashi Rajakaruna', 'DERMATOLOGIST', '0719578458'),
(4, 'Eranga Balasooriya', 'SURGEON', '0704416578'),
(5, 'Dilsha Palihawadana', 'OPHTHALMOLOGIST', '0762578963'),
(6, 'Dilsha Palihawadana', 'OPHTHALMOLOGIST', '0762578963'),
(7, 'Dhanuka Madhushan', 'OPHTHALMOLOGIST', '0778213659'),
(8, 'Yeshan Abeygunawardane', 'DERMATOLOGIST', '0714456489');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `docID` int(11) NOT NULL,
  `password` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`docID`, `password`) VALUES
(1, 'doc001'),
(2, 'doc002'),
(3, 'doc003'),
(4, 'doc004'),
(5, 'doc005'),
(6, 'doc005'),
(7, '123456'),
(8, 'doc008');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`docID`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`docID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `docID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111213;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `docID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111213;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
