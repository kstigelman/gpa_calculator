function calcGPA(data)
{

	var count = 0;
	var gpa = 0;
	
	for(var i = 0; i < data.length; i++)
	{
		var readClassLevel = "";
		
		if(data[i] != ' ' && data[i] != '\n')
		{
		
			//Search from the start of the new line and get all the values until it is a number
			while(isNaN(data[i])) 
			{
				readClassLevel = readClassLevel + data[i];
				i++;
			}
			
			var weighting = getWeighting(readClassLevel);
			i++;
			
			//Get grade value from file
			var grade = getGrade(data[i]);
			i+=1;
			
		
			gpa += weighting - grade; //See explanation in function getGrade()
			
			count += 1;
			
		}
	}
	
	console.log(count);
	return gpa / count;
}

function getWeighting(classType)
{

	var weighting;
	
	switch(classType) 
	{
		case "AP+":
			weighting = 5.5;
			break;
		case "AP":
			weighting = 5.0;
			break;
		case "H":
			weighting = 4.5;
			break;
		case "CP":
			weighting = 4.0;
			break;
		case "OC": //Open Campus. Same as CP
			weighting = 4.0;
			break;
		default: //If other is given, default to 4.0
			weighting = 4.0;
			break;	
	}
	
	return weighting;
	
}
function getGrade(classGrade)
{
	var grade;
	
	/* The selected number will be subtracted 
	 * from the maximum weighting the class has*/
	
	switch(classGrade) 
	{
		case "A":
			grade = 0;
			break;
		case "B":
			grade = 1;
			break;
		case "C":
			grade = 2;
			break;
		case "D":
			grade = 3;
			break;
		case "F":
			grade = 4;
			break;
		case "P":
			grade = 0;
		default:
			console.log("There is an error");
			break;
	}
	return grade;
	
}

const fs = require('fs'); //Library for reading files
var data = fs.readFileSync('grades.txt', 'utf8'); //Read from file and get GPA data

console.log(calcGPA(data));
