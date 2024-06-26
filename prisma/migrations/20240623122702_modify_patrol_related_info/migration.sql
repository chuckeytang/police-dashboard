/*
  Warnings:

  - You are about to drop the column `shift_type` on the `PatrolSchedule` table. All the data in the column will be lost.
  - You are about to drop the `DutyManagement` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `PatrolSchedule` DROP COLUMN `shift_type`;

-- DropTable
DROP TABLE `DutyManagement`;

-- AddForeignKey
ALTER TABLE `PatrolSchedule` ADD CONSTRAINT `PatrolSchedule_patrol_team_id_fkey` FOREIGN KEY (`patrol_team_id`) REFERENCES `PatrolTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
