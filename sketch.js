function setup(){
    let nn = new NeuralNetwork(2,2,1);

    //let x = new Matrix([[1,1,0],[1,1,1],[1,0,1]]);
    //let y = new Matrix([[1],[0],[1]]);
    
    let x = new Matrix([[1,1,2],[1,1,0],[1,0,1],[1,2,3],[1,3,4],[1,4,5],[1,5,4],[1,4,3],[1,3,2],[1,2,1],[1,10,9],[1,11,12]]);
    let y = new Matrix([[1]    ,[0]    ,[1]    ,[1]    ,[1]    ,[1]    ,[0]    ,[0]    ,[0]    ,[0]    ,[0]     ,[1]]);

    console.log('First weights: ')
    //nn.w_1.print();
    //nn.w_2.print();

    for(let i = 0; i < 10; i++){
        //console.log('_-----------------------------------_');
        nn.train(x,y);
        //console.log(i, 'th weights: ')
        //nn.w_1.print();
        //nn.w_2.print();
            
    }

    let x_ = new Matrix([[1,15,13]]);
    console.table(nn.predict(x_).value)

    //let y_hat = nn.feedforward(x);
    //y_hat.print(); 
}

function draw() {

}