class Dato{
    constructor(title, date, description){
        this.title = title;
        this._date = date;
        this.description = description;
        this._id = Math.round(10000 * Math.random());
    }

    get title(){
        return this._title;
    }

    set title (title){
        this._title = title;
    }

    get valor(){
        return this._valor
    }

    set valor (valor){
        this._valor = valor;
    }

    get id(){
        return this._id
    }

    set id (id){
        this._id = id;
    }

    get date(){
        return this._date;
    }

    set date(date){
        this._date = date;
    }
}