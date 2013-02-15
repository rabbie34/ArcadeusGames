#pragma strict

var maxMoveSpeed = 3.0f;
var moveAcc = 1.0f;
var moveSpeed : float;
private var screenEdge = 1.4f;

private var playerObj : GameObject;

public var RunningSprite : Texture2D;
public var StandingSprite : Texture2D;
public var FallingSprite : Texture2D;	
public var JumpingSprite : Texture2D;
public var DeathSprite : Texture2D;

private var Facing : String;

function Start () {
	
	Facing = "Right";
	playerObj = gameObject;

}

function Update () {
	
	if (Input.GetKey(KeyCode.D))
	{
		//gameObject.transform.Translate(moveAcc*Time.deltaTime,0,0);
		moveSpeed = moveSpeed +  (moveAcc * Time.deltaTime*40);
		Facing = "Right";
	}
	
	if (Input.GetKey(KeyCode.A))
	{
		//gameObject.transform.Translate(-moveAcc*Time.deltaTime,0,0);
		moveSpeed = moveSpeed - (moveAcc * Time.deltaTime*40);
		Facing = "Left";
	}
	
	if (moveSpeed > maxMoveSpeed )
	{
		moveSpeed = maxMoveSpeed;
	}
	if (moveSpeed < -maxMoveSpeed )
	{
		moveSpeed = -maxMoveSpeed;
	}

}

function FixedUpdate ()
{
	if(moveSpeed != 0)
	{
		moveSpeed -= moveSpeed/5;
	}
	if(transform.position.x> screenEdge || transform.position.x < -screenEdge)
	{
		transform.position = Vector3(-transform.position.x,transform.position.y,0);
	}
	
	if ( Facing.Equals("Left"))
	{
		//playerObj.renderer.material.mainTexture
	}
	transform.Translate(moveSpeed * Time.deltaTime,0,0,Space.World);
}