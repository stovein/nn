function sigmoid(a){
    // softmax ve relu ve sigmodi konulaiblir
    return 1 / (1 + Math.exp(-a));
}

function sigmoidGradient(a){
    return sigmoid(a) * (1 - sigmoid(a));
}

function bool(a){
    // softmax ve relu ve sigmodi konulaiblir
    return a >= 0.5 ? 1 : 0;
}

class NeuralNetwork {
    constructor(input, hidden, output){
        this.input_layer = input;
        this.hidden_layer = hidden;
        this.output_layer = output;

        this.w_1 = new Matrix(this.hidden_layer, this.input_layer + 1);
        this.w_2 = new Matrix(this.output_layer, this.hidden_layer + 1);

        this.w_1.rand();
        this.w_2.rand();

        this.alpha = 0.1; // learning rate
    }

    feedforward(x){ // assume dimention of x is => m x input_layer + 1 (bias)
        let a1 = x.dot(this.w_1.transpose());
        a1 = a1.map(sigmoid);
        a1.addBias(); // add bias to a1

        let a2 = a1.dot(this.w_2.transpose());
        a2 = a2.map(sigmoid);

        return a2;
    }

    train(x, y) {
        let a1 = x.dot(this.w_1.transpose());
        let a2 = a1.map(sigmoid);
        a2.addBias(); // add bias to a1
        // bias ekleyince dimentionlar matchlenmiyor onları kontrol et


        let a3 = a2.dot(this.w_2.transpose());
        a3 = a3.map(sigmoid);
        

        // burada bişiler dönüyor bir daha kontrol et
        let delta3 = a3.eSub(y);

        let w2t = this.w_2.transpose();
        let delta2 = w2t.dot(delta3.transpose());
        delta2 = delta2.transpose();

        delta2 = delta2.eMult(a1.map(sigmoidGradient));


        // weight adjustlamak için değişkneler matematiği kontrol et
        let w_1_grad = delta2.transpose().dot(a1);
        let w_2_grad = delta3.transpose().dot(a2);

        // grad değerleri ile weightleri topla

    }
}