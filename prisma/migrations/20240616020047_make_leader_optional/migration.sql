-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_leader_id_fkey`;

-- AlterTable
ALTER TABLE `Team` MODIFY `leader_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_leader_id_fkey` FOREIGN KEY (`leader_id`) REFERENCES `Staff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
