#pragma strict

var numbers: int[];

var amountOfNumbers : int;
var currentNumber = 1;
public var displayNumberPrefab : GameObject;
public var missedNumberPrefab : GameObject;

function Start () {

	numbers = new int[amountOfNumbers];

}

function Update () {

}

function newNumber (incNumber : int)
{
	numbers[currentNumber] = incNumber;
	var newNumber : GameObject = GameObject.Instantiate(displayNumberPrefab, transform.position + Vector3(0.25f*currentNumber,0,0), displayNumberPrefab.transform.rotation);
	newNumber.GetComponent(NumberScript).setNumber(incNumber);
	DontDestroyOnLoad(newNumber);
	currentNumber++;
}

function missedNumber (incNumber : int)
{
	numbers[currentNumber] = incNumber;
	var newNumber : GameObject = GameObject.Instantiate(displayNumberPrefab, transform.position + Vector3(0.25f*currentNumber,0,0), displayNumberPrefab.transform.rotation);
	newNumber.GetComponent(NumberScript).setNumber(incNumber);
	DontDestroyOnLoad(newNumber);
	currentNumber++;
}
