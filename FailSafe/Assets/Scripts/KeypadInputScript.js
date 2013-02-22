#pragma strict

private var curInput : String;

var numbers: int[];
var correctNumbers: int[];

var amountOfNumbers : int;
var currentNumber = 0;
public var displayNumberPrefab : GameObject;
public var missedNumberPrefab : GameObject;
var spawnedNumbers : GameObject[];
var inputNumbers : GameObject[];
var Answer : boolean = true;
var Guesses : int = 3;



function Start () {
	
	var aNumber : GameObject = GameObject.Find("NumberGUI");
	if(aNumber != null)
	{
		amountOfNumbers = aNumber.GetComponent(NumberGUIScript).amountOfNumbers;
	}
	numbers = new int[amountOfNumbers];
	correctNumbers = new int[amountOfNumbers];
	spawnedNumbers = new GameObject[amountOfNumbers];
	inputNumbers = new GameObject[amountOfNumbers];
	getCorrectNumbers();

}

function Update () {
	
	var fingerCount = 0;
    for (var touch : Touch in Input.touches) {
        if (touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled)
            fingerCount++;
        var ray2 : Ray = Camera.main.ScreenPointToRay(touch.position);
		var hit2 : RaycastHit = new RaycastHit();
		if (Physics.Raycast(ray2, hit2)) 
		{
			if (hit2.collider.gameObject.name=="Confirm")
			{
				if(Guesses>0)
				{
					
					Answer = true;
					for (var j=0; j <= amountOfNumbers-1; j++)
					{
						if (numbers[j] != correctNumbers[j])
						{
							Answer = false;
						}
					}
					if(Answer == true)
					{
						//Debug.Log("Correct!");
						deleteAll();
						Application.LoadLevel("Test Level");
					}
					else
					{
						Guesses--;
						Debug.Log("Wrong! "+ Guesses + " tries left!");
					}
				}
	
			}
			if (hit2.collider.gameObject.name=="Backspace")
			{
				if(currentNumber>0)
				{
					currentNumber--;
					Destroy(inputNumbers[currentNumber]);
					numbers[currentNumber] = 0;
				}
			}
			if (hit2.collider.gameObject.tag=="Number")
			{
				//get number
				if ( currentNumber >= amountOfNumbers )
				{
					
				}
				else
				{
					curInput += hit2.collider.gameObject.GetComponent(KeypadScript).curNumber;
					newNumber (hit2.collider.gameObject.GetComponent(KeypadScript).curNumber);
				}
			}
		}

    }
	
	if (Input.GetMouseButtonDown(0))
	{
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit = new RaycastHit();
		if (Physics.Raycast(ray, hit)) 
		{
			if (hit.collider.gameObject.name=="Confirm")
			{
				if(Guesses>0)
				{
					
					Answer = true;
					for (var i=0; i <= amountOfNumbers-1; i++)
					{
						if (numbers[i] != correctNumbers[i])
						{
							Answer = false;
						}
					}
					if(Answer == true)
					{
						//Debug.Log("Correct!");
						deleteAll();
						Application.LoadLevel("Test Level");
					}
					else
					{
						Guesses--;
						Debug.Log("Wrong! "+ Guesses + " tries left!");
					}
				}
	
			}
			if (hit.collider.gameObject.name=="Backspace")
			{
				if(currentNumber>0)
				{
					currentNumber--;
					Destroy(inputNumbers[currentNumber]);
					numbers[currentNumber] = 0;
				}
			}
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

function FixedUpdate()
{
	if(Guesses<=0)
	{
		deleteAll();
		Application.LoadLevel("Menu");
	}
}
function newNumber (incNumber : int)
{
	numbers[currentNumber] = incNumber;
	var newNumber : GameObject = GameObject.Instantiate(displayNumberPrefab, transform.position + Vector3(0.25f*currentNumber,0,0), displayNumberPrefab.transform.rotation);
	inputNumbers[currentNumber] = newNumber;
	newNumber.GetComponent(NumberScript).setNumber(incNumber,amountOfNumbers);
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
	inputNumbers[currentNumber] = newNumber;
	newNumber.GetComponent(NumberScript).setNumber(incNumber,amountOfNumbers);
	currentNumber++;
	if (currentNumber >= amountOfNumbers)
	{
		//Application.LoadLevel("Key Pad");
	}
}

function getCorrectNumbers ()
{
	this.correctNumbers = GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).numbers;
	this.spawnedNumbers = GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).spawnedNumbers;
	
}

function deleteAll ()
{
	for (var i=0; i <= amountOfNumbers-1; i++)
	
	{
		Destroy(spawnedNumbers[i]);
	}
	Destroy(GameObject.Find("NumberGUI"));
}