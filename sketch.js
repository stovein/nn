function setup(){
    let nn = new NeuralNetwork(2,2,1);

    let x = new Matrix([[1,1,0],[1,1,1],[1,0,1]]);
    let y = new Matrix([[1],[0],[1]]);

    nn.train(x,y);

    //let y_hat = nn.feedforward(x);
    //y_hat.print(); 
}

function draw() {

}