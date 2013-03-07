#pragma strict

public var Facing : String;

public var StandingSprite : Texture2D;
public var StConcentrationSprite : Texture2D;
public var StInvisibleSprite : Texture2D;

public var RunningSprite : Texture2D;
public var RuConcentrationSprite : Texture2D;
public var RuInvisibleSprite : Texture2D;

public var JumpingSprite : Texture2D;

public var FallingSprite : Texture2D;
public var FaConcentrationSprite : Texture2D;
public var FaInvisibleSprite : Texture2D;

public var DeathSprite : Texture2D;
public var SpawningSprite : Texture2D;
private var AnimationScript : Animation2D;
var curAnimation : String;

var powerMode : String = "Normal";


function Start () {
	
	AnimationScript = this.GetComponent(Animation2D);
	AnimationScript.Start();

}

function Update () {

}

function FixedUpdate ()
{
	if (Facing  == "Left" )
	{
		transform.localScale = Vector3(-Mathf.Sqrt(transform.localScale.x * transform.localScale.x),transform.localScale.y,transform.localScale.z);
	}
	if (Facing == "Right" )
	{
		transform.localScale = Vector3(Mathf.Sqrt(transform.localScale.x * transform.localScale.x),transform.localScale.y,transform.localScale.z);
	}
	if ( curAnimation.Equals("Spawning") && AnimationScript.currentXFrame >15)
	{
		StandSprite();
	}
}

function StandSprite ()
{
	curAnimation = "Standing";
	this.GetComponent(Animation2D).rowCount = 4;
	
	if(powerMode.Equals("Normal"))
		gameObject.renderer.material.mainTexture = StandingSprite;
	if(powerMode.Equals("Concentration"))
		gameObject.renderer.material.mainTexture = StConcentrationSprite;
	if(powerMode.Equals("Invisible"))
		gameObject.renderer.material.mainTexture = StInvisibleSprite;
	//AnimationScript.
}

function RunSprite ()
{
	curAnimation = "Running";
	gameObject.renderer.material.mainTexture = RunningSprite;
}
function JumpSprite ()
{
	gameObject.renderer.material.mainTexture = JumpingSprite;
}

function FallSprite ()
{
	curAnimation = "Falling";
	gameObject.renderer.material.mainTexture = FallingSprite;
}

function DieSprite ()
{
	gameObject.renderer.material.mainTexture = DeathSprite;
}

function SpawnSprite ()
{
	AnimationScript =this.GetComponent(Animation2D);
	curAnimation = "Spawning";
	AnimationScript.rowCount = 17;
	gameObject.renderer.material.mainTexture = SpawningSprite;
}

function updatePowerMode (currentMode : String)
{
	powerMode = currentMode;
	if(curAnimation.Equals("Running"))
		RunSprite();
	if(curAnimation.Equals("Standing"))
		StandSprite();
	if(curAnimation.Equals("Falling"))
		FallSprite();
}