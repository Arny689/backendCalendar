import { Controller, Get, Delete, Post, Param, Body } from '@nestjs/common';
import { DealsService } from './deals.service';
import { Deals } from 'src/enteties/deals.entity';
import { CreateDealDto } from './createDealDto.dto';

@Controller('deals')
export class DealsController {

    constructor(private dealsService: DealsService) {}

    @Get(':id')
    async getOneDealById(@Param('id') id: string): Promise<Deals> {
        return await this.dealsService.getOneDealById(+id)
    }

    @Get()
    async getAllDeals(): Promise<Deals[]> {
        return await this.dealsService.getAllDeals()
    }

    @Get(':year/:month')
    async getMonthDeals(@Param('year') year: string, @Param('month') month: string): Promise<Deals[]> {
        return await this.dealsService.getDealsByMonthAndYear(+year, +month)
    }

    @Delete(':id')
    async removeDeal(@Param('id') id: string) {
        return await this.dealsService.removeDeal(+id)
    }

    @Post()
    async createDeal(@Body() createDeal: CreateDealDto) {
       return await this.dealsService.createDeal(createDeal)
    }
}
