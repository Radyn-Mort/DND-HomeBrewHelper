import { generateGrade } from "./grade.mjs"
import { rollD100,rollD12 } from "./diceRolls.mjs"

export function generateFood(amount){
    const   food = {}
    const foodTable= {1:"Tiny Plant",2:" Tiny Animal",3:" Small Plant",4:"Small Animal",5:" Medium Plant",6:"Medium Animal",7:"Large Plant",8:"Large Animal",9:"Huge Plant",10:"Huge Animal",11:"Gargantuan Plant"}
    for(let i = 1; i<=amount;i++){
        let x = rollD12()
        let y = rollD100()
        //console.log(y)
        let multiplier = 1
        const grade = generateGrade(y)

        // double for food on a 12 roll
        while(x==12){
            x = rollD12()
            multiplier++
            console.log("a twelve? thats x"+multiplier+" now")
        }

        //while loop to add food to food dictionary
        while(multiplier>=1){
            if(food[foodTable[x]+' '+grade]>0){
            food[foodTable[x]+' '+grade] = food[foodTable[x]+' '+grade] +1
            }
            else{
                food[foodTable[x]+' '+grade] = 1 
            }
            multiplier--
        }

    }
    return food

}
