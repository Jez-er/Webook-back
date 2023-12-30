-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `ganre` VARCHAR(191) NOT NULL,
    `image` BLOB NOT NULL,

    UNIQUE INDEX `Book_title_key`(`title`),
    UNIQUE INDEX `Book_author_key`(`author`),
    UNIQUE INDEX `Book_ganre_key`(`ganre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
