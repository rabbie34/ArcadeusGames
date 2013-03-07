#pragma strict

var Speed : float;

function Start () {

	Speed = GameObject.Find("Spawner").GetComponent(SpawnerScript).platformSpeed;

}

function Update () {

}

function FixedUpdate ()
{
	this.transform.Translate(0,0,-Speed*Time.deltaTime);
	if ( this.transform.position.y > -14.62776 )
	{
		transform.position = Vector3 ( transform.position.x, -51.02129, transform.position.z);
	}
}
