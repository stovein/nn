class Matrix {
    constructor(a, b) {
        // TODO: ilk verilen line da exception çıkarmaya bak librarye atmasın
        if(arguments.length == 1){ // Matrix girilen parametre
            if (a.length === 0){
                throw new Error('Empty matrix must not be sent.');
            }

            else if (a[0].length === undefined){ // Column vector
                this.value = [];
                this.value.push(a);
                this.rows = 1;
                this.cols = a.length;
            }
            else { // Matrix or row vector
                for(let i = 1; i < a.length; i++){
                    if(a[i].length === 0) throw new Error('Empty column must not be sent.');
                    if(a[i].length != a[0].length) throw new Error('Column elements are not matching');
                }
                this.value = a;
                this.rows = this.value.length;
                this.cols = this.value[0].length;
            }
        } 
        else if(arguments.length == 2){ // dimention girilen parametre
            this.rows = a;
            this.cols = b;
            this.value = new Array(this.rows);
            for(let i = 0; i < this.rows; i++){
                this.value[i] = new Array(this.cols);
            }    
        }
        else {
            throw new SyntaxError('Pass one or two arguments.');
        }
    }

    zeros(){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] = 0;
            }
        }
    }

    ones(){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] = 1;
            }
        }
    }

    rand(){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] = Math.random();
            }
        }
    }

    randint(max){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] = Math.floor(Math.random() * max);
            }
        }
    }

    identity(){
        if(this.cols != this.rows) throw new Error('Cannot create an identity matrix out of non square matrices.');
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                if(i === j)
                    this.value[i][j] = 1;
                else
                    this.value[i][j] = 0;
            }
        }
    }

    sAdd(n){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] += n;
            }
        }
    }

    sSub(n){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] -= n;
            }
        }
    }

    sMult(n){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] *= n;
            }
        }
    }

    sDiv(n){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] /= n;
            }
        }
    }

    eAdd(arr){
        if(this.cols != arr.cols || this.rows != arr.rows) throw new Error('Dimentions does not match.');
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] += arr.value[i][j];
            }
        }
    }

    eSub(arr){
        if(this.cols != arr.cols || this.rows != arr.rows) throw new Error('Dimentions does not match.');
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] -= arr.value[i][j];
            }
        }
    }

    eMult(arr){
        if(this.cols != arr.cols || this.rows != arr.rows) throw new Error('Dimentions does not match.');
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] *= arr.value[i][j];
            }
        }
    }

    eDiv(arr){
        if(this.cols != arr.cols || this.rows != arr.rows) throw new Error('Dimentions does not match.');
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.value[i][j] /= arr.value[i][j];
            }
        }
    }

    transpose(){
        let t = new Array(this.cols);
        for(let i = 0; i < this.cols; i++){
            t[i] = new Array(this.rows);
        }  
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                t[j][i] = this.value[i][j];
            }
        }
        this.value = t;
    }

    dot(arr){
        if(this.cols != arr.rows) throw new Error('Dimentions does not match.');
        let result = new Matrix(this.rows, arr.cols);
        result.zeros();
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < arr.cols; j++){
                for(let k = 0; k < this.cols; k++){
                    result.value[i][j] += this.value[i][k] * arr.value[k][j]

                }
            }
        }
        return result;
    }
}
  
let a = new Matrix(2,2);
a.randint(5)
let b = new Matrix(2,2);
b.randint(5)
console.table(a.value)
console.table(b.value)
let c = a.dot(b)
console.table(c.value);



/*
console.log('İKİ');
a = new Matrix([[1,2,3],[1,2,3],[1,2,3]]);
console.log('matrix: ', a.value);
console.log('rows: ',a.rows)
console.log('cols: ',a.cols)

console.log('ÜÇ');
a = new Matrix([1,2,3]);
console.log('matrix: ', a.value);
console.log('rows: ',a.rows)
console.log('cols: ',a.cols)

console.log('DÖRD');
a = new Matrix([[1],[2],[3]]);
console.log('matrix: ', a.value);
console.log('rows: ',a.rows)
console.log('cols: ',a.cols)*/