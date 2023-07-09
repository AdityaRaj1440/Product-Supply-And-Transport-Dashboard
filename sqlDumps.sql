-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: threeway_studio
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(1000) DEFAULT NULL,
  `o_id` int DEFAULT NULL,
  `sender_category` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  KEY `o_id` (`o_id`),
  CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`o_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES (1,'adioss',NULL,'manufacturer'),(2,'adioss',NULL,'manufacturer'),(3,'adioss',NULL,'manufacturer'),(4,'adioss',NULL,'manufacturer'),(5,'',14,'transporter'),(6,'',14,'transporter'),(7,'hello',14,'transporter'),(8,'hello',14,'transporter'),(9,'hello',14,'transporter'),(10,'hello',14,'transporter'),(11,'hi',14,'manufacturer'),(12,'hi',14,'transporter'),(13,'hi',14,'transporter'),(14,'hillo',14,'manufacturer'),(15,'hillo',14,'transporter'),(16,'hillo',14,'transporter'),(17,'up',14,'manufacturer'),(18,'upside',14,'manufacturer'),(19,'upside Down',14,'manufacturer'),(20,'Demo',14,'manufacturer'),(21,'Demon',14,'manufacturer'),(22,'stranger',14,'transporter'),(23,'joker',14,'manufacturer'),(24,'hahaha',14,'transporter'),(25,'nice',14,'manufacturer'),(26,'hello',14,'manufacturer'),(27,'hello',15,'manufacturer'),(28,'hello?',15,'manufacturer'),(29,'ho',15,'transporter'),(30,'hello?',15,'manufacturer'),(31,'hello?',15,'manufacturer'),(32,'ho',15,'transporter'),(33,'',14,'manufacturer'),(34,'ho',14,'transporter'),(35,'ho',14,'transporter'),(36,'hollo',14,'manufacturer'),(37,'haiya',14,'transporter'),(38,'chings',14,'manufacturer'),(39,'chings',14,'manufacturer'),(40,'master',14,'transporter'),(41,'do it',14,'manufacturer'),(42,'Yup',14,'manufacturer'),(43,'Hugo',14,'transporter'),(44,'maggi',14,'manufacturer'),(45,'hug',14,'manufacturer'),(46,'gore',14,'manufacturer'),(47,'game',14,'manufacturer'),(48,'play',14,'transporter'),(49,'give up',14,'manufacturer'),(50,'glory',14,'manufacturer'),(51,'phase',14,'transporter'),(52,'glory',14,'manufacturer'),(53,'place',14,'manufacturer'),(54,'pace',14,'manufacturer'),(55,'pole',14,'transporter'),(56,'pacer',14,'manufacturer'),(57,'bowl',14,'manufacturer'),(58,'judge',14,'manufacturer'),(59,'rice',14,'transporter'),(60,'puff',14,'transporter'),(61,'potazto',14,'transporter'),(62,'tomato',14,'transporter'),(63,'let',14,'transporter'),(64,'yu',14,'manufacturer'),(65,'Hi! There.. I am in need of your help/ Please suggest som equotation for transporting my package from source to defined destination.',14,'manufacturer'),(66,'hello',14,'transporter'),(67,'hello',14,'transporter'),(68,'hi',14,'transporter'),(69,'warbreakerhulk',18,'manufacturer'),(70,'How u deoing?',18,'transporter'),(71,'Howdy!!',18,'transporter'),(72,'Hello',19,'manufacturer'),(73,'Hi',19,'transporter'),(74,'Hello. This is Aditya. I would like to request your services for the following order:-\nOrder ID: OID20\n Pickup Address: Patna\nFrom: Conveyer Belt\nTo: Gujrat\n Quantity: 10',20,'manufacturer'),(75,'HI. Estimated Price for the Given order will be 59.',20,'transporter'),(76,'HI. Estimated Price for the Given order will be 02.',20,'transporter'),(77,'What do you think?',20,'transporter');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `m_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(70) DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`m_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'a','Patna','a','f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0'),(2,'Aditya','Patna','Omni','ce56741be4e11d562e82f24a8669e774cc8c1d11'),(3,'Aditya Raj','Patna','Om','6403f2b7eb2aaafe6de34cbf2a029b01afebc512');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `o_id` varchar(10) DEFAULT NULL,
  `from_address` varchar(1000) DEFAULT NULL,
  `to_address` varchar(1000) DEFAULT NULL,
  `qty` double DEFAULT NULL,
  `pickup` varchar(1000) DEFAULT NULL,
  `m_id` int DEFAULT NULL,
  `t_id` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `m_id` (`m_id`),
  KEY `t_id` (`t_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `manufacturer` (`m_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`t_id`) REFERENCES `transporter` (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (13,'OID1','Patna','Panaji',11,'Patna',2,1,0),(14,'OID14','Patna','goa',21,'Patna',2,2,12),(15,'OID15','Patna','goa',21,'Patna',2,2,55.55),(16,'OID16','Patna','up',11,'Patna',2,2,NULL),(17,'OID17','Patna','Bhopal',11,'Patna',2,3,NULL),(18,'OID18','Warehouse','Shantinagar',14,'Patna',2,4,12),(19,'OID19','Patna','Bangalore',11,'Patna',2,4,90),(20,'OID20','Conveyer Belt','Gujrat',10,'Patna',2,1,2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transporter`
--

DROP TABLE IF EXISTS `transporter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transporter` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(70) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transporter`
--

LOCK TABLES `transporter` WRITE;
/*!40000 ALTER TABLE `transporter` DISABLE KEYS */;
INSERT INTO `transporter` VALUES (1,'t1','ter','e5353879bd69bfddcb465dad176ff52db8319d6f'),(2,'t2','terry','2a5bd02710e975a7fbb92da876655950fbd5e70d'),(3,'undefined','undefined','d5d4cd07616a542891b7ec2d0257b3a24b69856e'),(4,'ten','ttt','dd3562449147ffc783230d2a13d02a75ac42989b');
/*!40000 ALTER TABLE `transporter` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-09 23:29:46
