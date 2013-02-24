#pragma strict

public var curNumber : int;

function Start () {
	
	//rowNumber = RandomNumber;
	
	var size : Vector2 = new Vector2(1.0f/parseFloat(4),1.0f/parseFloat(10));
	
	var offset : Vector2 = new Vector2((0)*size.x,(1.0f-size.y)-(curNumber)*size.y);
	
	renderer.material.SetTextureOffset ("_MainTex", offset);
    renderer.material.SetTextureScale ("_MainTex", size);	

}

function Update () {

}