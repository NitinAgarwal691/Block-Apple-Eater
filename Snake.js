class Snakes{
    constructor() {
      this.x=20;
      this.y=20;
      this.xdir=0;
      this.ydir=0;
      this.tailcount=1;
      this.snakeXPosition=[];
      this.snakeYPosition=[];
    }
    update(){
        if(!this.gameOver()){
        this.x=this.x+this.xdir;
        this.y=this.y+this.ydir;
        console.log(this.snakeXPosition.length);
        if(this.snakeXPosition.length>this.tailcount) {
            this.snakeXPosition.shift();
            this.snakeYPosition.shift();
        }
        this.snakeXPosition.push(this.x);
        this.snakeYPosition.push(this.y);
        }
    }

    eat(x,y) 
    {
        if(this.x===x && this.y===y) {
           this.tailcount++;
           return true;
        } else{
            return false;
        }
    }
    
    gameOver() {
        if(this.x>800 || this.x<0 || this.y>400 || this.y<0) {
            textSize(60);
            fill("red");
            text("Game Over",240,200);
            return true;
        }else{
        return false;
        }
    }

    display() {
        for(var i=0;i<this.tailcount;i++) {
        var x=this.snakeXPosition[i];
        var y=this.snakeYPosition[i];
        fill("green");
        rect(x,y,20,20);
        }
    }
}