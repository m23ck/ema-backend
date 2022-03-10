-- CreateTable
CREATE TABLE `medewerkers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `voornaam` VARCHAR(191) NOT NULL,
    `achternaam` VARCHAR(191) NOT NULL,
    `geslacht` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefoon` INTEGER NOT NULL,
    `straatnaam` VARCHAR(191) NOT NULL,
    `huisnummer` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `medewerkers_email_key`(`email`),
    UNIQUE INDEX `medewerkers_telefoon_key`(`telefoon`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
