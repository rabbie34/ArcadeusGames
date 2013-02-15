#pragma strict

public var Facing : String;

public var StandingSprite : Texture2D;
public var RunningSprite : Texture2D;
public var JumpingSprite : Texture2D;
public var FallingSprite : Texture2D;
public var DeathSprite : Texture2D;

function Start () {

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
}

function StandSprite ()
{
	gameObject.renderer.material.mainTexture = StandingSprite;
}

function RunSprite ()
{
	gameObject.renderer.material.mainTexture = RunningSprite;
}
function JumpSprite ()
{
	gameObject.renderer.material.mainTexture = JumpingSprite;
}

function FallSprite ()
{
	gameObject.renderer.material.mainTexture = FallingSprite;
}

function DieSprite ()
{
	gameObject.renderer.material.mainTexture = DeathSprite;
}