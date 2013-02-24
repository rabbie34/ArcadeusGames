#pragma strict


private var CurrentTexture : Texture2D;
var columnCount = 4;
var rowCount = 10;
var uIndex = 0;
var vIndex = 0;
var columnNumber = 0;
var rowNumber = 0;
var timer = 0;
private var RandomNumber : int = 10;

var correctNumbers : int[];

var maxNumbers : int;

function Start () {

	if (RandomNumber == 10)
	{
		RandomNumber = Random.Range(1,10);
	}

	rowNumber = RandomNumber;
	
	var size : Vector2 = new Vector2(1.0f/parseFloat(columnCount),1.0f/parseFloat(rowCount));
	
	var offset : Vector2 = new Vector2((uIndex+columnNumber)*size.x,(1.0f-size.y)-(vIndex+rowNumber)*size.y);
	
	renderer.material.SetTextureOffset ("_MainTex", offset);
    renderer.material.SetTextureScale ("_MainTex", size);
	

}

function setNumber ( number : int , maxNumbers : int)
{

	RandomNumber = number;
	this.maxNumbers = maxNumbers;
	
}

function Update () {

}



function FixedUpdate ()
{
	/*
	var size : Vector2 = new Vector2(1.0f/parseFloat(columnCount),1.0f/parseFloat(rowCount));
	
	var offset : Vector2 = new Vector2((uIndex+columnNumber)*size.x,(1.0f-size.y)-(vIndex+rowNumber)*size.y);
	
	renderer.material.SetTextureOffset ("_MainTex", offset);
    renderer.material.SetTextureScale ("_MainTex", size);	
	*/
	timer++;
	if (timer > 30 )
	{
		timer = 0;
		//columnNumber++;
	}
}

function OnCollisionEnter (hit : Collision)
{
	if(hit.gameObject.tag == "Player")
	{
		GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).newNumber(RandomNumber);
		Destroy(gameObject);
	}
	
	if(hit.gameObject.name == "Ceiling")
	{
		GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).missedNumber(RandomNumber);
		Destroy(gameObject);
	}
}