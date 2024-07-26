-- AlterTable
ALTER TABLE `IncidentAnalysis` MODIFY `report_time` DATETIME(3) NULL,
    MODIFY `contact_number` VARCHAR(191) NULL,
    MODIFY `incident_category` VARCHAR(191) NULL,
    MODIFY `report_source` VARCHAR(191) NULL,
    MODIFY `incident_location` VARCHAR(191) NULL,
    MODIFY `incident_details` VARCHAR(191) NULL,
    MODIFY `incident_status` VARCHAR(191) NULL,
    MODIFY `response_time` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Staff` MODIFY `position` VARCHAR(191) NULL,
    MODIFY `department` VARCHAR(191) NULL,
    MODIFY `contact` VARCHAR(191) NULL,
    MODIFY `skills` JSON NULL;

-- AlterTable
ALTER TABLE `Vehicle` MODIFY `vehicle_type` VARCHAR(191) NULL,
    MODIFY `brand_model` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NULL,
    MODIFY `usage_status` VARCHAR(191) NULL;
