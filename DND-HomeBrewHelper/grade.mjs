export function generateGrade(x){
    switch (true){
        case x<=40:
            //console.log("case 1")
        return "I";
    
        case 40<x && x<=60:
            //console.log("case 2")
            return "II";
    
        case 60<x && x<= 74:
            //console.log("case 3")
            return "III";
        
        case 74<x && x<=84:
            //console.log("case 4")
            return "IV";
        
        case 84<x && x<=94:
            //console.log("case 5")
            return "V";
    
        case 94<x:
            //console.log("case 6")
            return "VI";
    }
}