/*
  Warnings:

  - You are about to drop the column `patrol_schedule_id` on the `PatrolStaffAssignment` table. All the data in the column will be lost.
  - Added the required column `patrol_team_id` to the `PatrolStaffAssignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shift` to the `PatrolStaffAssignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PatrolStaffAssignment` DROP COLUMN `patrol_schedule_id`,
    ADD COLUMN `patrol_team_id` INTEGER NOT NULL,
    ADD COLUMN `shift` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `PatrolVehicleAssignment` ADD CONSTRAINT `PatrolVehicleAssignment_patrol_team_id_fkey` FOREIGN KEY (`patrol_team_id`) REFERENCES `PatrolTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatrolVehicleAssignment` ADD CONSTRAINT `PatrolVehicleAssignment_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatrolStaffAssignment` ADD CONSTRAINT `PatrolStaffAssignment_patrol_team_id_fkey` FOREIGN KEY (`patrol_team_id`) REFERENCES `PatrolTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatrolStaffAssignment` ADD CONSTRAINT `PatrolStaffAssignment_staff_id_fkey` FOREIGN KEY (`staff_id`) REFERENCES `Staff`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
