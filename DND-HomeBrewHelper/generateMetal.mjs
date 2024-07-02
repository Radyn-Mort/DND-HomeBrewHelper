import { generateGrade } from "./grade.mjs"
import { rollD100,rollD12 } from "./diceRolls.mjs"

export function generateMetal(amount){
    const   metals = {}
    const metalTable= {1:"Gold",2:"Aluminum",3:"Nickle",4:"Copper",5:"Tungsten",6:"Osmium",7:"Silver",8:"Iron",9:"Platinum",10:"Reflectinum",11:"Absorbium"}

    for(let i = 1; i<=amount;i++){
        let x = rollD12()
        let y = rollD100()
        //console.log(y)
        let multiplier = 1
        const grade = generateGrade(y)

        // double for metals on a 12 roll
        while(x==12){
            x = rollD12()
            multiplier++
            console.log("a twelve? thats x"+multiplier+" now")
        }

        //while loop to add metal to metals dictionary
        while(multiplier>=1){
            if(metals[metalTable[x]+' '+grade]>0){
            metals[metalTable[x]+' '+grade] = metals[metalTable[x]+' '+grade] +1
            }
            else{
                metals[metalTable[x]+' '+grade] = 1 
            }
            multiplier--
        }

    }
    return metals
}
