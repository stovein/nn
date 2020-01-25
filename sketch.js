function setup(){
    let nn = new NeuralNetwork(2,2,1);

    let x = new Matrix([[1,1,0],[1,1,1],[1,0,1]]);
    let y = new Matrix([[1],[0],[1]]);

    for(let i = 0; i < 100; i++)
    nn.train(x,y);

    let x_ = new Matrix([[1,0,0]]);
    console.table(nn.predict(x_).value)

    //let y_hat = nn.feedforward(x);
    //y_hat.print(); 
}

function draw() {

}