import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createCheckClockDto, editCheckClockDto } from "./dto";

@Injectable()
export class CheckClockService {
    constructor(private prisma: PrismaService) {}

    async createCheckClock(dto: createCheckClockDto) {
        let data : any = { ...dto };
        try {
            const checkClock = await this.prisma.checkClocks.create({ data: data });
            return {
                statusCode: 201,
                message: "Check Clock created successfully",
                data: checkClock
            };
        } catch (error) {
            console.log("Error: ", error);
            return {
                statusCode: error.code,
                message: error.message
            };
        }
    }

    async getCheckClock(checkClockId: string) {
        const data = await this.prisma.checkClocks.findFirst({ where: { id: checkClockId } });
        if (data) {
            return {
                statusCode: 200,
                message: "Check Clock found",
                data: data
            };
        } else {
            return {
                statusCode: 404,
                message: "Check Clock not found"
            };
        }
    }

    async getCheckClocks() {
        return await this.prisma.checkClocks.findMany();
    }

    async updateCheckClock(checkClockId: string, dto: editCheckClockDto) {
        let data : any = { ...dto };
        try {
            const checkClock = await this.prisma.checkClocks.update({ where: { id: checkClockId }, data: data });
            return {
                statusCode: 200,
                message: "Check Clock updated successfully",
                data: checkClock
            }
        } catch (error) {
            console.log("Error: ", error);
            return {
                statusCode: error.code,
                message: error.message
            };
        }
    }

    async deleteCheckClock(checkClockId: string) {
        try {
            await this.prisma.checkClocks.delete({ where: { id: checkClockId } });
            return {
                statusCode: 200,
                message: "Check Clock deleted successfully"
            };
        } catch (error) {
            return {
                statusCode: error.code,
                message: error.message
            }
        }
    }
}