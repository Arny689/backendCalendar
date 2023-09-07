import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateDealDto {

    @IsNotEmpty()
    readonly year: number

    @IsNotEmpty()
    readonly month: number
    
    @IsNotEmpty()
    readonly day: number

    @IsNotEmpty()
    readonly name: string

    @IsOptional()
    readonly description: string

    @IsOptional()
    readonly explanation: string
}