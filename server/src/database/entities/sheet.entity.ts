import { Entity, Property } from '@mikro-orm/core';
import { HasExercises, HasExercisesParams } from './ratedEntity.entity';

@Entity()
export class Sheet extends HasExercises {
    @Property()
    sheetNo: number;

    @Property()
    bonusSheet: boolean;

    constructor(params: SheetParams) {
        super(params);
        this.sheetNo = params.sheetNo;
        this.bonusSheet = params.bonusSheet;
    }

    /**
     * @returns The number of the sheet formatted as a string which has at least 2 digits (with leading zeros if necessary).
     */
    get sheetNoAsString(): string {
        return this.sheetNo.toString(10).padStart(2, '0');
    }
}

interface SheetParams extends HasExercisesParams {
    sheetNo: number;
    bonusSheet: boolean;
}