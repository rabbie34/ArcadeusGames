#pragma strict
var slowAmount = 1.5f;
var Speed = 0.0f;

function Start () {

}

function Update () {

}

function OnTriggerEnter (hit : Collider)
{
	if(hit.gameObject.tag == "Player")
	{
		hit.gameObject.GetComponent(PlayerScript).slowPlayer(slowAmount);
	}
	if(hit.gameObject.name == "Ceiling")
	{
		GameObject.Find("Spawner").GetComponent(SpawnerScript).inkSpawning = true;
		Destroy(gameObject);
	}
}

function FixedUpdate ()
{
	this.transform.Translate(0,Speed*Time.deltaTime,0,Space.World);
}