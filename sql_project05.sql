-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: projectmd05
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Sofa','Sofa','Sofa'),(2,'Ghế','Ghế','Ghế');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_show`
--

DROP TABLE IF EXISTS `image_show`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_show` (
  `image_id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `_id` bigint DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `FK_4aafa9f1d1bf6637e0f0b07ad14` (`_id`),
  CONSTRAINT `FK_4aafa9f1d1bf6637e0f0b07ad14` FOREIGN KEY (`_id`) REFERENCES `products` (`_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_show`
--

LOCK TABLES `image_show` WRITE;
/*!40000 ALTER TABLE `image_show` DISABLE KEYS */;
INSERT INTO `image_show` VALUES (1,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-2.jpg?v=1696047606320',1),(2,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-37.jpg?v=1699240770157',1),(3,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-40.jpg?v=1699240772007',1),(4,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-43.jpg?v=1699240774233',1),(5,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-19.jpg?v=1699240779683',1),(6,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-10.jpg?v=1699240779683',1),(7,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-23.jpg?v=1699240779683',1),(8,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-4.jpg?v=1699240779683',1),(9,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-8.jpg?v=1699240777853',1),(10,'https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-6.jpg?v=1699240779683',1),(11,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-34.jpg?v=1696046819397',2),(12,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-24.jpg?v=1699240674663',2),(13,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-26.jpg?v=1699240676107',2),(14,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-28.jpg?v=1699240677460',2),(15,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-29.jpg?v=1699240678720',2),(16,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-9.jpg?v=1699240687237',2),(17,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-11.jpg?v=1699240687237',2),(18,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-2.jpg?v=1699240687237',2),(19,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-1.jpg?v=1699240683407',2),(20,'https://bizweb.dktcdn.net/100/361/830/products/sofa-pozzallo-28.jpg?v=1699240677460',2),(21,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-1.jpg?v=1692674173463',3),(22,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-6.jpg?v=1699240630980',3),(23,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-9.jpg?v=1699240634233',3),(24,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-19.jpg?v=1699240648813',3),(25,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-21.jpg?v=1699240650403',3),(26,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-5-1.jpg?v=1699240650403',3),(27,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-4.jpg?v=1699240650403',3),(28,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-3.jpg?v=1692674184513',3),(29,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-1.jpg?v=1692674173463',3),(30,'https://bizweb.dktcdn.net/100/361/830/products/ghe-sofa-castlery-9.jpg?v=1699240634233',3),(31,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-31-1-1680603819055.jpg?v=1688367547540',4),(32,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-9-min-1.jpg?v=1688367696117',4),(33,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-11-1680603833615.jpg?v=1688367696117',4),(34,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-2-min.jpg?v=1688367701150',4),(35,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-5-min.jpg?v=1688367702680',4),(36,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-4-1680603828625.jpg?v=1688367703917',4),(37,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-5-min.jpg?v=1688367702680',4),(38,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-2-min.jpg?v=1688367701150',4),(39,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-5-min.jpg?v=1688367702680',4),(40,'https://bizweb.dktcdn.net/100/361/830/products/marenco-doi-da-simili-9-min-1.jpg?v=1688367696117',4);
/*!40000 ALTER TABLE `image_show` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `ward` varchar(100) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FK_199e32a02ddc0f47cd93181d8fd` (`user_id`),
  CONSTRAINT `FK_199e32a02ddc0f47cd93181d8fd` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (37,'2023-11-27 12:26:11','pending','getreoktreok@gmail.com','0396071515','dqwdwqdwq','Tỉnh Hà Giang','Huyện Đồng Văn','Xã Má Lé',9,'fwefewfew');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `orderdetail_id` bigint NOT NULL AUTO_INCREMENT,
  `number` int DEFAULT NULL,
  `_id` bigint DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  PRIMARY KEY (`orderdetail_id`),
  KEY `FK_f47239431826807038c5e0e36b3` (`_id`),
  KEY `FK_86366c33ab36661bc4180384f1e` (`order_id`),
  CONSTRAINT `FK_86366c33ab36661bc4180384f1e` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_f47239431826807038c5e0e36b3` FOREIGN KEY (`_id`) REFERENCES `products` (`_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `sale` double NOT NULL DEFAULT '0',
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`_id`),
  KEY `FK_9a5f6868c96e0069e699f33e124` (`category_id`),
  CONSTRAINT `FK_9a5f6868c96e0069e699f33e124` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Ghế sofa Blogger',10,26990000,0,1),(2,'Ghế sofa Pozzallo',10,29990000,0,1),(3,'Ghế sofa Castlery',10,13790000,0,1),(4,'Ghế sofa Marenco',10,16390000,0,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tag_id` bigint NOT NULL AUTO_INCREMENT,
  `length` varchar(255) DEFAULT NULL,
  `width` varchar(255) DEFAULT NULL,
  `height` varchar(255) DEFAULT NULL,
  `_id` bigint DEFAULT NULL,
  PRIMARY KEY (`tag_id`),
  KEY `FK_75aaae425e5c35122af2a7b9107` (`_id`),
  CONSTRAINT `FK_75aaae425e5c35122af2a7b9107` FOREIGN KEY (`_id`) REFERENCES `products` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'220','110','72',1),(5,'200','110','82',2),(6,'200','90','72',3),(7,'180','100','80',4);
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'laammm','lam29@gmail.com','$2b$10$ntGcBtUAyW3u.F9jgKcWGeHzPcAFeWNWqMfXisdXCYdUJDsD/3wmq','user'),(5,'thanhlamm','lam123@gmail.com','$2b$10$KdATuMLy7wth4iUAqfUvpubT8oH.dF6Vb0darfCW68VVTGmLw37LO','user'),(7,'phamthanhlamm','phamlam@gmail.com','$2b$10$UYliSG7GhHL1DnJTxqFVEu7jgZNV5K2LCyHf90zfwO4l35PmI3Vq.','user'),(8,'phamthanhlamm','phamlam29@gmail.com','$2b$10$mCJ5tFuouzDtSDeXZCNWaONvrE/iK0/tMOUM9LnG4P0yAp57tU.jq','user'),(9,'phamthanhlammmmmm','lam2908@gmail.com','$2b$10$05NEIq5gB.aPywPeRUeXruWd4amCa/UhL4WAyGANnNhFW.QuR7JPm','user'),(11,'lamngul','lam123321@gmail.com','$2b$10$5Z5kNpRgbjS4YKqZ83jk/ebi9qdVblpALxXaWvnTlYqb7SJ958auG','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-27 13:56:27
