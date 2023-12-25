function generateNumber() {

const min = Math.ceil(document.querySelector('.input-number1').value)

const max = Math.floor(document.querySelector('.input-number').value)

if (min >= max) {

alert ( 'O número precisa ser menor')

}else {
    const result = Math.floor(Math.random () * (max - min +1)) + min;
    alert (result)
}






}



