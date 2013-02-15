#pragma strict

var Speed : float;

function Start () {

}

function Update () {

}

function FixedUpdate ()
{
	this.transform.Translate(0,0,-Speed*Time.deltaTime);
	if ( this.transform.position.y > -18.87773 )
	{
		transform.position = Vector3 ( transform.position.x, -60.66765, transform.position.z);
	}
}
