#pragma strict

var columnCount = 24; //Here you can place the number of columns of your sheet.
                           //The above sheet has 24
var rowCount = 1; //Here you can place the number of rows of your sheet.
                          //The above sheet has 1
var framesPerSecond = 10.0f;

var start=false;
var flip=false;
	
var currentAnimationRow=0;
var currentAnimationColumn=0;
	
private var currentAnimationIndex=0;

function StartAnimation()
{
	start = true;
}

function StopAnimation()
{
	start=false;
	currentAnimationIndex=0;
}

// Use this for initialization
function Start () 
{
	SetSpriteAnimation(columnCount,rowCount,currentAnimationRow,currentAnimationColumn,framesPerSecond);
}

function SetSpriteAnimation(rowCount : int , columnCount : int , rowNumber : int , columnNumber : int , fps : float)
{
	//int index=currentAnimationIndex;
		if (start){
			currentAnimationIndex = parseInt(Time.time*fps);
			currentAnimationIndex = currentAnimationIndex%columnCount;
			//currentAnimationIndex=index;
		}
		
		var size : Vector2 = new Vector2(1.0f/parseFloat(columnCount),1.0f/parseFloat(rowCount));
		
		var uIndex : int = currentAnimationIndex%columnCount;
		var vIndex : int = currentAnimationIndex/columnCount;
		
		var offset : Vector2 = new Vector2((uIndex+columnNumber)*size.x,(1.0f-size.y)-(vIndex+rowNumber)*size.y);
		if (flip){
			offset.y*=-1;
			size.y*=-1;
		}
    	renderer.material.SetTextureOffset ("_MainTex", offset);
    	renderer.material.SetTextureScale ("_MainTex", size);	
}
function Update () {
	SetSpriteAnimation(columnCount,rowCount,currentAnimationRow,currentAnimationColumn,framesPerSecond);
		/*
    	// Calculate index
    	int index = (int)(Time.time * framesPerSecond);
    	// repeat when exhausting all frames
    	index = (index % (int)(uvAnimationTileX * uvAnimationTileY));
   
    	// Size of every tile
    	Vector2 size = new Vector2 (1.0f / (float)uvAnimationTileX, 1.0f / (float)uvAnimationTileY);
   
    	// split into horizontal and vertical index
    	float uIndex = (index % uvAnimationTileX);
    	float vIndex = (index / uvAnimationTileX)*currentAnimationRow;

    	// build offset
    	// v coordinate is the bottom of the image in opengl so we need to invert.
   	 	Vector2 offset =new  Vector2 ((float)(uIndex * size.x), (float)(1.0f - size.y - vIndex * size.y));
   
    	renderer.material.SetTextureOffset ("_MainTex", offset);
    	renderer.material.SetTextureScale ("_MainTex", size);	*/

}