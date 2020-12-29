CREATE TABLE `celke`.`contas_pagars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(220) NOT NULL,
  `valor` DOUBLE NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `celke`.`contas_pagars` 
CHARACTER SET = utf8 , COLLATE = utf8_unicode_ci ;
