//TASK ONE
console.log("TASK 1")
function makeRows(row) {
	var puzzle = [];
    for(var i=0; i<4;i++){
        puzzle.push(row.slice());
    }
    return puzzle;
}

var row = [1 , 2 , 3 , 4];
var puzzle=(makeRows(row));
//a useful function that will help us visualise our Pseudoku puzzles.
console.log(visPuzzle(puzzle));
console.log(puzzle);

//TASK TWO
console.log("TASK 2")
function Queue() {
	this.arr = [];
	this.head = function() {
		return this.arr[0];
	};
	this.dequeue = function() {
		if (this.arr.length == 0) {
			return "Underflow!";
		} else {
			return this.arr.shift();
		}
	};
	this.enqueue = function(o) {
		this.arr.push(o);
	};
	this.isEmpty = function() {
			return this.arr.length == 0;
	};
}

function permuteRow(row, p) {
    var queue=new Queue();
    var a = row.length
    
    for(var i=0; i<a;i++){
        queue.enqueue(row[i]);
    }
    
    while(p > 0){
        queue.enqueue(queue.head());
        queue.dequeue();
        p--;
    }
    var row =[];
    while(!(queue.isEmpty())){
        row.push(queue.head());
        queue.dequeue();
    }
    return row;
    

}
var row = [1 , 2 , 3 , 4];
console.log(permuteRow(row,2));



function permutePuzzle(puzzle, p, q, r) {
    puzzle[1]=permuteRow(puzzle[1],p);
    puzzle[2]=permuteRow(puzzle[2],q);
    puzzle[3]=permuteRow(puzzle[3],r);
    return puzzle;

}
var row = [1 , 2 , 3 , 4];
var puzzle = makeRows ( row) ;
console . log ( permutePuzzle ( puzzle , 1 , 2 , 3) ) ;

//TASK THREE
console.log("TASK 3")
function linearSearch(array, item) {
	var n = array.length;
	for (var i = 0; i < n; i++) {
		if (array[i] == item) {
			return true;
        }
 	}
	return false;
}

function checkColumn(puzzle, j) {
//first make an array out of the values stored in column j

    var arr=[];
    var l = puzzle.length; 
    
    for(var i=0;i< l ;i++){
        arr.push(puzzle[i][j]);
    }
    for(var i=1;i<=4;i++){
        if(linearSearch(arr,i)!=true){
            return false;
        }
    }
    return true;

}

var puzzle=[[1,2,3,4],[2,3,4,1],[3,4,1,2],[4,1,2,3]];
console.log(checkColumn(puzzle,1));

puzzle=[[1,2,3,4],[2,3,4,1],[2,3,4,1],[4,1,2,3]];
console.log(checkColumn(puzzle,2));

//TASK FOUR
console.log("TASK 4")
function colCheck(puzzle) {
    if(!checkColumn(puzzle,0) && !checkColumn(puzzle,1) && !checkColumn(puzzle,2) && !checkColumn(puzzle,3)){
        return false;
    }
    
    return true;
    

}
puzzle=[[1,2,3,4],[2,3,4,1],[3,4,1,2],[4,1,2,3]];
console.log(colCheck(puzzle));

//TASK FIVE
console.log("TASK 5")
function makeGrid(puzzle, row1, row2, col1, col2) {
	
	var array1 = [];
	for (var i = row1; i <= row2; i++) {
		for (var j = col1; j <= col2; j++) {
			array1.push(puzzle[i][j]);
		}
	}
	return array1;
}

function checkGrid(puzzle, row1, row2, col1, col2) {
    var arr=makeGrid(puzzle,row1,row2,col1,col2);
    for(var i=1;i<=4;i++){
        if(linearSearch(arr,i)==false){
            return false;
        }
    }
    return true;

}
var puzzle = [[1 , 2 , 3 , 4] , [2 , 3 , 4 , 1] , [3 , 4 , 1 , 2] , [4 , 1 , 2 , 3]];
console . log ( checkGrid (puzzle , 0 , 1 , 2, 3) ) ;
puzzle = [[1 , 2 , 3 , 4] , [3 , 4 , 1 , 2] , [4 , 1 , 2 , 3] , [4 , 1 , 2 , 3]];
console . log ( checkGrid (puzzle , 0 , 1 , 0, 1) ) ;

//TASK SIX
console.log("TASK 6")
function checkGrids(puzzle) {
    if(checkGrid(puzzle,0,1,0,1) && checkGrid(puzzle,0,1,2,3) && checkGrid(puzzle,2,3,0,1) && checkGrid(puzzle,2,3,2,3)){
        return true;
    }
    else return false;
   
}

var puzzle = [[1 , 2 , 3 , 4] , [2 , 3 , 4 , 1] , [3 , 4 , 1 , 2] , [4 , 1 , 2 , 3]];
console . log ( checkGrids ( puzzle ) ) ;
puzzle = [[1 , 2 , 3 , 4] , [3 , 4 , 1 , 2] , [4 , 1 , 2 , 3] , [2 , 3 , 4 , 1] ,];
console . log ( checkGrids ( puzzle ) ) ;


//TASK SEVEN
console.log("TASK 7")
function makeSolution(row) {
    var puzzle=makeRows(row);
    for(var p=0; p<4;p++){
        for(var r=0;r<4;r++){
         for(var q=0;q<4;q++){
           
                puzzle=permutePuzzle(puzzle,p,q,r);
                if(colCheck(puzzle)==true &&   checkGrids(puzzle)==true){
                    return puzzle;
                }                
            }
        }
    }
    return false;
    
    
    

}


var  row = [1, 2, 3, 4];
console.log(makeSolution(row));



// TASK EIGHT
//The function entriesToDel produces a list of co-ordinates that tell us where to replace the numbers in a puzzle with " "

function entriesToDel(n) {
	if (n <= 16) {
        // All the possible outcome
		var array = [];
		for (var j = 0; j < 4; j++) {
			for (var i = 0; i < 4; i++) {
				array[j+(4 * i)] = [i,j];
			}
		}
        
        // This removes all the index ones they have been used.
		
        var total_num = 16;
		var arr = [];
		
        for (var i = 0; i < n; i++) {
			var x = Math.round( (total_num - i - 1) * Math.random() );
			arr[i] = array[x];
			array.splice(x,1);
		}
		return arr;
	}
}

function genPuzzle(row, n) {
    var arr=entriesToDel(n);
    var puzzle=makeSolution(row);
    console.log(visPuzzle(puzzle));
    for(var i=0; i<arr.length;i++){
        puzzle[arr[i][0]][arr[i][1]]=" ";
    }
    console.log(visPuzzle(puzzle));
    return puzzle;
    

}

var  row = [1, 2, 3, 4];
console.log(genPuzzle(row , 4));

// The following function is used to visualise the puzzles
function visPuzzle(puzzle) {
	var viz = "";
    var t = puzzle.length;

	for (var i = 0; i < t ; i++) {
		for (var j = 0; j < t; j++) {
			viz = viz + "----";
		}
		viz = viz + "-\n";
		for (var j = 0; j < t; j++) {
			viz = viz + "| " + puzzle[i][j] + " ";
		}
		viz = viz + "| " + "\n";
	}
	for (var j = 0; j < t; j++) {
			viz = viz + "----";
	}
	viz = viz + "-";

	return viz;
}








// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK AND YOU MAY GET NO MARKS

module.exports = {makeRows : makeRows, makeSolution : makeSolution, genPuzzle : genPuzzle, checkGrid : checkGrid, checkGrids : checkGrids, colCheck : colCheck, checkColumn : checkColumn, permuteRow : permuteRow, permutePuzzle : permutePuzzle}

function createPuzzle() {
	function swap(array, i, j) {
		var x = array[i];
		array[i] = array[j];
		array[j] = x;
		return array;
	}
	var row = [2,3,1,4];
	var rand = [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]
	if (rand[0]==1) {
		swap(row,0,1);
	}
	if (rand[1]==1) {
		swap(row,1,2);
	}
	if (rand[2]==1) {
		swap(row,2,3);
	}
	if (rand[3]==1) {
		swap(row,0,3);
	}
	var puzzle = genPuzzle(row,3 + Math.round(7*Math.random()));
	var string = "";
	for (var i = 0; i < 4; i++) {
		string += "<tr>";
		for (var j = 0; j < 4; j++) {
  		string += "<td>" + puzzle[i][j] + "</td>";
		}
		string += "</tr>";
	}
	document.getElementById("1").innerHTML = string
}