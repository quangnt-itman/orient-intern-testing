function handler ( input, duration ) {
	input.sort( ( a, b ) => a.endTime - b.endTime );

	let merged = [ input[ 0 ] ];

	for ( let i = 1; i < input.length; i++ ) {
		// console.log( input[ i ] );
		let prev = merged[ merged.length - 1 ];
		if ( prev.endTime >= input[ i ].startTime ) {
			prev.endTime = Math.max( prev.endTime, input[ i ].endTime );
		} else {
			merged.push( input[ i ] );
		}
	}

	let output = {};

	for ( let i = 1; i < merged.length; i++ ) {
		let range = merged[ i ].startTime - merged[ i - 1 ].endTime;

		if ( range >= duration ) {
			output.startTime = merged[ i - 1 ].endTime;
			output.endTime = merged[ i ].startTime;
		} else {
			output.startTime = merged[ i ].endTime;
			output.endTime = merged[ i ].endTime + duration;
		}
	}
	return output;
}



let arr = [ {
	id: 1,
	startTime: 10,
	endTime: 20
},
{
	id: 2,
	startTime: 19,
	endTime: 40
},
{
	id: 3,
	startTime: 40,
	endTime: 60
},
{
	id: 4,
	startTime: 70,
	endTime: 80
},
];

let arr2 = [ {
	id: 1,
	startTime: 180,
	endTime: 220
},
{
	id: 2,
	startTime: 0,
	endTime: 120
},
{
	id: 3,
	startTime: 110,
	endTime: 150
} ];


console.log( handler( arr2, 60 ) );
