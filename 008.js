class Str{
    constructor(string) {
        this.string = string;
    }
    lower(string){
        console.log(this.string.toLowerCase())
    }
    upper(string){
        console.log(this.string.toUpperCase())
    }
    capitalize(string){
        console.log(this.string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}))
    }
}
lowerStr= new Str('MAKAN')
lowerStr.lower()

upperStr= new Str('makan')
upperStr.upper()

capitalizeStr= new Str('saya ingin makan')
capitalizeStr.capitalize()