import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Deals } from 'src/enteties/deals.entity';
import { Repository } from 'typeorm';
import { CreateDealDto } from './createDealDto.dto';

@Injectable()
export class DealsService {

    constructor(
        @InjectRepository(Deals) private dealsRepository: Repository<Deals>
    ) {}

    async getOneDealById(id: number): Promise<Deals | null> {
        return this.dealsRepository.findOneBy({
            id
        })
    }

    async getAllDeals(): Promise<Deals[]> {
        return this.dealsRepository.find()
    }

    async getDealsByMonthAndYear(year: number, month: number): Promise<Deals[]> {
        return this.dealsRepository.findBy({
            year,
            month
        })
    }

    async removeDeal(id: number): Promise<void> {
        this.dealsRepository.delete({
            id
        })
    }

    async createDeal(deal: CreateDealDto): Promise<Deals> {
        return this.dealsRepository.save({ ...deal })
    }
}
