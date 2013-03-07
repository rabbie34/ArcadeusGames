#pragma strict

var maxMoveSpeed = 3.0f;
var moveAcc = 1.0f;
var moveSpeed : float;
private var screenEdge = 1.1f;
private var buildTarget : String = "Keyboard";
private var tilt : Vector3 = Vector3.zero;
private var previousPosition : Vector3;
private var playerIsDead : boolean = false;
private var deathTimer = 0.0f;
private var slowed : boolean = false;
private var slowedTimer = 0.0f;


// ANIMATION
public var playerAnimation : PlayerAnimationScript;
private var pauseScript : PauseScript;

private var Facing : String;

function Start () {
	
	#if UNITY_ANDROID
    buildTarget = "Android";
  	#endif
	
	Facing = "Right";
	playerAnimation = this.GetComponent(PlayerAnimationScript);
	playerAnimation.SpawnSprite();
	pauseScript = GameObject.Find("Main Camera").GetComponent(PauseScript);

}

function slowPlayer ( time : float)
{
	slowedTimer = time;
}

function Update () {

	
	if ( pauseScript.isPaused() == false && playerIsDead == false)
	{
		if (buildTarget == "Keyboard")
		{
		if(playerAnimation.curAnimation.Equals("Spawning") == false)
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
		if(playerAnimation.curAnimation.Equals("Spawning") == false)
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
	
			
		}
		if (buildTarget == "Android")
		{
			tilt = Input.acceleration;
			if(playerAnimation.curAnimation.Equals("Spawning") == false)
			moveSpeed = tilt.x*(Time.deltaTime*40)*6;
			//moveSpeed = (moveSpeed + (moveAcc * Time.deltaTime*40))*-tilt.y*3;
			if(moveSpeed > 0.2 && gameObject.transform.rigidbody.velocity.y > -1)
			{
				playerAnimation.Facing = "Right";
				playerAnimation.RunSprite();
			} 
			if(moveSpeed < -0.2 && gameObject.transform.rigidbody.velocity.y > -1)
			{
				playerAnimation.Facing = "Left";
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
function Death()
{
	playerIsDead = true;
}

function FixedUpdate ()
{
	if(slowedTimer > 0.0f)
	{
		slowed  = true;
		slowedTimer -= Time.deltaTime;
	}
	else
	{
		slowed = false;
	}
if(playerAnimation.curAnimation.Equals("Spawning") == false)
	if(playerIsDead == true)
	{
		deathTimer+=Time.deltaTime;
		if (deathTimer > 1.0f)
		{
			//load game over screen
			
		}
	}
	else
	{
		if(moveSpeed != 0)
		{
			moveSpeed -= moveSpeed/5;
		}
		if(transform.position.x> screenEdge)
		{
			transform.position = Vector3(-screenEdge,transform.position.y,0);
		}
		if(transform.position.x < -screenEdge)
		{
			transform.position = Vector3(screenEdge,transform.position.y,0);
		}
		if ( rigidbody.velocity.y < -0.5 )
		{
			playerAnimation.FallSprite();
		}
		if ( rigidbody.velocity.y >= -0.5 && rigidbody.velocity.x > -1.0 && rigidbody.velocity.x < 1.0 )
		{
			playerAnimation.StandSprite();
		}
		if(slowed)
		{
			transform.Translate(moveSpeed/2 * Time.deltaTime,0,0,Space.World);
		}
		else
		{
			transform.Translate(moveSpeed * Time.deltaTime,0,0,Space.World);
		}
			
	}
}