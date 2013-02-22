#pragma strict

private var curInput : String;

var numbers: int[];

var amountOfNumbers : int;
var currentNumber = 0;
public var displayNumberPrefab : GameObject;
public var missedNumberPrefab : GameObject;



function Start () {
	
	numbers = new int[amountOfNumbers];

}

function Update () {
	
	if (Input.GetMouseButtonDown(0))
	{
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit = new RaycastHit();
		if (Physics.Raycast(ray, hit)) 
		{
			if (hit.collider.gameObject.tag=="Number")
			{
				//get number
				if ( currentNumber >= amountOfNumbers )
				{
					
				}
				else
				{
					curInput += hit.collider.gameObject.GetComponent(KeypadScript).curNumber;
					newNumber (hit.collider.gameObject.GetComponent(KeypadScript).curNumber);
				}
			}
		}
	}

}

function newNumber (incNumber : int)
{
	numbers[currentNumber] = incNumber;
	var newNumber : GameObject = GameObject.Instantiate(displayNumberPrefab, transform.position + Vector3(0.25f*currentNumber,0,0), displayNumberPrefab.transform.rotation);
	newNumber.GetComponent(NumberScript).setNumber(incNumber);
	DontDestroyOnLoad(newNumber);
	currentNumber++;
	if (currentNumber >= amountOfNumbers)
	{
		//Application.LoadLevel("Key Pad");
	}
	
}

function missedNumber (incNumber : int)
{
	numbers[currentNumber] = incNumber;
	var newNumber : GameObject = GameObject.Instantiate(displayNumberPrefab, transform.position + Vector3(0.25f*currentNumber,0,0), displayNumberPrefab.transform.rotation);
	newNumber.GetComponent(NumberScript).setNumber(incNumber);
	DontDestroyOnLoad(newNumber);
	currentNumber++;
	if (currentNumber >= amountOfNumbers)
	{
		//Application.LoadLevel("Key Pad");
	}
}
