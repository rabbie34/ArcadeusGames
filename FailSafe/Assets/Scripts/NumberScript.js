#pragma strict

public var Number1 : Texture2D;
public var Number2 : Texture2D;
public var Number3 : Texture2D;
public var Number4 : Texture2D;
public var Number5 : Texture2D;
public var Number6 : Texture2D;
public var Number7 : Texture2D;
public var Number8 : Texture2D;
public var Number9 : Texture2D;

private var CurrentTexture : Texture2D;
private var RandomNumber : int;

function Start () {
	
	var RandomNumber : int = Random.Range(1,10);
	
	if (RandomNumber == 1) { CurrentTexture = Number1;}
	if (RandomNumber == 2) { CurrentTexture = Number2;}
	if (RandomNumber == 3) { CurrentTexture = Number3;}
	if (RandomNumber == 4) { CurrentTexture = Number4;}
	if (RandomNumber == 5) { CurrentTexture = Number5;}
	if (RandomNumber == 6) { CurrentTexture = Number6;}
	if (RandomNumber == 7) { CurrentTexture = Number7;}
	if (RandomNumber == 8) { CurrentTexture = Number8;}
	if (RandomNumber == 9) { CurrentTexture = Number9;}
	
	var columnCount = 6;
	var rowCount = 12;
	var uIndex = 1;
	var vIndex = RandomNumber;
	var columnNumber = 1;
	var rowNumber = 12;
	
	var size : Vector2 = new Vector2(1.0f/parseFloat(columnCount),1.0f/parseFloat(rowCount));
	
	var offset : Vector2 = new Vector2((uIndex+columnNumber)*size.x,(1.0f-size.y)-(vIndex+rowNumber)*size.y);
	
	renderer.material.SetTextureOffset ("_MainTex", offset);
    renderer.material.SetTextureScale ("_MainTex", size);	
	
	//gameObject.renderer.material.mainTexture = CurrentTexture;

}

function Update () {

}