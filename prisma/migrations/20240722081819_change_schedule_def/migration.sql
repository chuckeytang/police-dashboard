-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_day_team_id_fkey`;

-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_night_team_id_fkey`;

-- AlterTable
ALTER TABLE `Schedule` MODIFY `day_team_id` INTEGER NULL,
    MODIFY `night_team_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_day_team_id_fkey` FOREIGN KEY (`day_team_id`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_night_team_id_fkey` FOREIGN KEY (`night_team_id`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
