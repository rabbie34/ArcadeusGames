#pragma strict

var numbers: int[];
var spawnedNumbers : GameObject[];

var amountOfNumbers : int;
var currentNumber = 0;
public var displayNumberPrefab : GameObject;
public var missedNumberPrefab : GameObject;

function Start () {

	numbers = new int[amountOfNumbers];
	spawnedNumbers = new GameObject[amountOfNumbers];
	DontDestroyOnLoad(this);

}

function Update () {

}

function newNumber (incNumber : int, arrayPosition : int)
{
	if(arrayPosition != -1)
	{
		numbers[arrayPosition] = incNumber;
		var newNumber : GameObject = GameObject.Instantiate(displayNumberPrefab, transform.position + Vector3(0.25f*arrayPosition,0,0), displayNumberPrefab.transform.rotation);
		spawnedNumbers[arrayPosition] = newNumber;
		newNumber.GetComponent(NumberScript).setNumber(incNumber, amountOfNumbers);
		DontDestroyOnLoad(newNumber);
		currentNumber++;
		if (currentNumber >= amountOfNumbers)
		{
			Application.LoadLevel("Key Pad");
		}
	}
	else
	{
	
	}
	
}

function missedNumber (incNumber : int, arrayPosition : int)
{
	if(arrayPosition != -1)
	{
		numbers[arrayPosition] = incNumber;
		var newNumber : GameObject = GameObject.Instantiate(missedNumberPrefab, transform.position + Vector3(0.25f*arrayPosition,0,0), displayNumberPrefab.transform.rotation);
		spawnedNumbers[arrayPosition] = newNumber;
		newNumber.GetComponent(NumberScript).setNumber(incNumber, amountOfNumbers);
		DontDestroyOnLoad(newNumber);
		currentNumber++;
		if (currentNumber >= amountOfNumbers)
		{
			Application.LoadLevel("Key Pad");
		}
	}
	else
	{
	
	}
}

function deleteAll ()
{
	for (var i=0; i <= currentNumber; i++)
	
	{
		Destroy(spawnedNumbers[i]);
		Destroy(this);
	}
}