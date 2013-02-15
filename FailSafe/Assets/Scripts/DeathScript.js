#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (hit : Collision)
{
	
	if(hit.gameObject.tag == "Player")
	{
		hit.gameObject.GetComponent(PlayerAnimationScript).DieSprite();
		Destroy(hit.gameObject);
		
		//Debug.Log("Player died");
	}
	if(hit.gameObject.tag == "Platform")
	{
		Destroy(hit.gameObject);
		//Debug.Log("Platform removed");
	}

	
	
	

}