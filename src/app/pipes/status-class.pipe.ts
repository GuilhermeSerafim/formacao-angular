import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusClass'
})
export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
        console.log("Pipe: quantas vezes fui chamado?"); // 3v vezes
        // Tipando constante com uma chave numeral e um valor string
        const obj: { [ ket: number ]: string } = {
            1: 'active',
            2: 'partial',
            3: 'blocked',
        }

        return obj[status];
    }

}