#pragma strict
private var instructor : boolean = false;
var failedPrefab : GameObject;
public var failedSpawn : GameObject;

function Start () {
	
}

function Update () {
	
}

function OnCollisionEnter (hit : Collision)
{
	
	if(hit.gameObject.tag == "Player")
	{
		
		hit.gameObject.GetComponent(PlayerAnimationScript).DieSprite();
		hit.gameObject.GetComponent(PlayerScript).Death();
		
		if (instructor == false)
			{
				Debug.Log("Level Failed");
				failedPrefab = GameObject.Instantiate(failedPrefab, failedSpawn.transform.position, failedPrefab.transform.rotation);
				//Back = GameObject.Find("Back");
				instructor = true;
			}
		
		for (var platform : GameObject in GameObject.FindGameObjectsWithTag("Platform"))
	    {
			if(platform.GetComponent(PlatformScript) != null)
			{
				platform.GetComponent(PlatformScript).setSpeed(0.0f);
			}
		}
		
		for (var platform : GameObject in GameObject.FindGameObjectsWithTag("Number"))
		{
			if(platform.GetComponent(PlatformScript) != null)
			{
				platform.GetComponent(PlatformScript).setSpeed(0.0f);
			}
		}
		GameObject.Find("Spawner").GetComponent(SpawnerScript).platformSpeed = 0.0f;
		GameObject.Find("Spawner").GetComponent(SpawnerScript).numberSpawnTime = Mathf.Infinity;
		GameObject.Find("Background").GetComponent(BackgroundScript).Speed = 0.0f;
		
		//Debug.Log("Player died");
	}
	if(hit.gameObject.tag == "Platform")
	{
		Destroy(hit.gameObject);
		//Debug.Log("Platform removed");
	}
	if(hit.gameObject.tag == "Enemy")
	{
		if(hit.gameObject.name == "BallEnemy(clone)")
			GameObject.Find("Spawner").GetComponent(SpawnerScript).ballSpawning = true;
		if(hit.gameObject.name == "InkEnemy(clone)")
			GameObject.Find("Spawner").GetComponent(SpawnerScript).inkSpawning = true;
		Destroy(hit.gameObject);
	}
}