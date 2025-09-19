function intro( v1 ){

if( v1 > 75 ) return 'A';

 else if( v1 > 60) return 'B';

 else if( v1 > 40) return 'C';

else return 'D'

}

let rank = intro( 90 );
console.log(rank);