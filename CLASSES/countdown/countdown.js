export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _actualDate() {
        return new Date();
    }
    get _futureDate() {
        return new Date(this.futureDate);
    }
    get _timeStamppDiff() {//diferença entre o TimeStamp
        return this._futureDate.getTime() - this._actualDate.getTime();
    }
    get days(){//transformar para dias
        return Math.floor(this._timeStamppDiff / (24 * 60 * 60 * 1000));
    }
    get hours(){//transformar para dias
        return Math.floor(this._timeStamppDiff / (60 * 60 * 1000));
    }
    get minutes(){//transformar para dias
        return Math.floor(this._timeStamppDiff / (60 * 1000));
    }
    get seconds(){//transformar para dias
        return Math.floor(this._timeStamppDiff / (1000));
    }
    get total(){
        const days = this.days;
        const hours = this.hours % 24;//quando coloca o modulo, vai retornar exatamente as horas que faltam
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return{
            days,
            hours,
            minutes,
            seconds
        }
    }
}
