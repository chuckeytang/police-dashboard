/*
  Warnings:

  - You are about to drop the column `shift_type` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `team_id` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `day_team_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `night_team_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_team_id_fkey`;

-- AlterTable
ALTER TABLE `Schedule` DROP COLUMN `shift_type`,
    DROP COLUMN `team_id`,
    ADD COLUMN `day_team_id` INTEGER NOT NULL,
    ADD COLUMN `night_team_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_day_team_id_fkey` FOREIGN KEY (`day_team_id`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_night_team_id_fkey` FOREIGN KEY (`night_team_id`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
