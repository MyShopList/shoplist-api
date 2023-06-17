-- AlterTable
ALTER TABLE "Shop" ALTER COLUMN "isLive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isEmailVerified" DROP NOT NULL,
ALTER COLUMN "isEmailVerified" SET DEFAULT false,
ALTER COLUMN "isPhoneVerified" DROP NOT NULL,
ALTER COLUMN "isPhoneVerified" SET DEFAULT false;
