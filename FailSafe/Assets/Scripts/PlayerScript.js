#pragma strict

var maxMoveSpeed = 3.0f;
var moveAcc = 1.0f;
var moveSpeed : float;
private var screenEdge = 1.4f;


// ANIMATION
public var playerAnimation : PlayerAnimationScript;
private var pauseScript : PauseScript;

private var Facing : String;

function Start () {
	
	Facing = "Right";
	playerAnimation = this.GetComponent(PlayerAnimationScript);
	pauseScript = GameObject.Find("Main Camera").GetComponent(PauseScript);

}

function Update () {
	
	if ( pauseScript.isPaused() == false )
	{
	
		if (Input.GetKey(KeyCode.D))
		{
			//gameObject.transform.Translate(moveAcc*Time.deltaTime,0,0);
			moveSpeed = moveSpeed +  (moveAcc * Time.deltaTime*40);
			playerAnimation.Facing = "Right";
			if ( rigidbody.velocity.y > -1 )
			{
				playerAnimation.RunSprite();
			}
		}
	
		if (Input.GetKey(KeyCode.A))
		{
			//gameObject.transform.Translate(-moveAcc*Time.deltaTime,0,0);
			moveSpeed = moveSpeed - (moveAcc * Time.deltaTime*40);
			playerAnimation.Facing = "Left";
			if ( rigidbody.velocity.y > -1 )
			{
				playerAnimation.RunSprite();
			}
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
	if ( rigidbody.velocity.y < -0.5 )
	{
		playerAnimation.FallSprite();
	}
	if ( rigidbody.velocity.y >= -0.5 && rigidbody.velocity.x > -1.0 && rigidbody.velocity.x < 1.0 )
	{
		playerAnimation.StandSprite();
	}
	
	transform.Translate(moveSpeed * Time.deltaTime,0,0,Space.World);
}