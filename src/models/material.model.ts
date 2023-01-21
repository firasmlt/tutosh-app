import {Country} from "./country.model";
import {Reference} from "./reference.model";
import {MaterialInput} from "./material-input.model";

export class Material {
    country?: Country;
    grade?: Reference;
    subject?: Reference;
    category?: Reference;
    subCategory?: Reference;

    public static toMaterialInput(material: Material): MaterialInput {
        return {
            countryId: material.country?.id,
            gradeId: material.grade?.id,
            subjectId: material.subject?.id,
            categoryId: material.category?.id,
            subCategoryId: material.subCategory?.id,
        }
    }

    // get id(): string {
    //     return `${this.country?.id}:${this.grade?.id}:${this.subject?.id}:${this.category?.id}:${this.subCategory?.id}`;
    // }
}
